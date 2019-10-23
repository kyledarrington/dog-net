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
        const data = req.body,
              user = await db.loginQuery(data.email, knex),
              token = (user != null) ? await auth.getLoginToken(user, data.password) : null
        res.send(token)
    }
    catch(err){
        console.error(err)
        res.send(err)
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
    }
})

app.get('/validate', async (req, res) => {
    try {
        const token = (req.headers.authorization).replace('Bearer ', '')
        const user = await auth.verifyToken(token)
        res.json({
            isValid: (user != null)
        })
    }
    catch(err){
        console.error(err.message)
        res.json({error : err.message})
    }
})

app.get('/feed', async (req, res) => {
    try {
        const data = req.query;
        const userData = await auth.verifyToken(data.token)
        let posts = []
        if (userData) posts = await db.newsfeedQuery(data.page, userData.userId);
        res.send(posts);
    }
    catch(err){
        console.error(err)
        res.send(err)
    }
})

app.get('/profile/:userid', async (req, res) => {
    try {
        const result = await db.profileQuery(req.params.userid)
        res.send(result);
    }
    catch(err){
        console.error(err)
        res.send(err)
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
