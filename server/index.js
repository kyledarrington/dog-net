const express = require('express')
const app = express()
const port = 8081
const cors = require('cors')
const environment = process.env.ENVIRONMENT || 'development'
const knexConfig = require('../knexfile.js')[environment]
const auth = require('./local/authenticate')
const bcrypt = require('bcrypt')

const knex = require('knex')(knexConfig)
const db = require('./local/database')(knex)

knexInit()

app.use(cors())
app.use(express.json())


app.post('/login', async (req, res) => {
    try{
        let userInfo = {}
        const data = req.body,
              userRow = await db.loginQuery(data.email, knex),
              token = (userRow != null) ? await auth.getLoginToken(userRow, data.password) : null
        if (token) {
            userInfo = {token : token, id : userRow.id}
        }
        res.json(userInfo)
    }
    catch(err){
        console.error(err)
        res.json({error : err.message})
    }
})

app.post('/signup', async(req, res) => {
    let data = req.body
    let hash = await bcrypt.hash(data.password, 10)
    let user = {
          first_name: data.firstName,
          last_name: data.lastName,
          email: data.email,
          password_hash: hash,
          verified: false     
    }
    try{
        const result = await db.userInsert(user)
        res.send(result)
    }
    catch(err){
        console.error(err.message)
        res.json({error : err.message})
    }
})

app.get('/validate', async (req, res) => {
    try {
        const user = await auth.verifyToken(req.headers)
        res.json({
            isValid: (user != null)
        })
    }
    catch(err){
        console.error(err)
        res.json({error : err.message})
    }
})

app.get('/feed', async (req, res) => {
    try {
        const data = req.query;
        const userData = await auth.verifyToken(req.headers)
        let posts = []
        if (userData) posts = await db.postQuery(userData.userId, data.page, 'newsfeed');
        res.send(posts);
    }
    catch(err){
        console.error(err)
        res.json({error : err.message})
    }
})

app.get('/profile/:userid', async (req, res) => {
    try {
        const loggedInUser = await auth.verifyToken(req.headers)
        const userQueryResult = await db.userQuery(req.params.userid)
        const payload = {
            user : userQueryResult[0],
            posts : await db.postQuery(req.params.userid, 0, 'profile'),
            isFollowing : await db.isFollowing(loggedInUser.userId, userQueryResult[0].id)
        }
        res.json(payload);
    }
    catch(err){
        console.error(err)
        res.json({error : err.message})
    }
})

app.get('/users/follow/:followingId', async (req, res) => {
    try {
        const loggedInUser = await auth.verifyToken(req.headers)
        let followingId = req.params.followingId
        let followerId = loggedInUser.userId
        let result = await db.followInsert(followerId, followingId)
        res.send(result)
    }
    catch(err){
        console.error(err)
        res.json({error : err.message})
    }
})

app.delete('/users/follow/:followingId', async(req, res) => {
    try {
        const loggedInUser = await auth.verifyToken(req.headers)
        let followingId = req.params.followingId
        let followerId = loggedInUser.userId
        let result = await db.followDelete(followerId, followingId)
        res.sendStatus(200)
    }
    catch(err){
        console.error(err)
        res.json({error : err.message})
    }
})


app.listen(port, () => console.log(`Listening on port ${port}.`))

async function knexInit() {
    try{
        await knex.migrate.latest()
        await knex.seed.run()
    }
    catch(err){
        console.error(err);
    }
}
