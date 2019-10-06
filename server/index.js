const express = require('express')
const app = express()
const port = 8081
const cors = require('cors')
const environment = process.env.ENVIRONMENT || 'development'
const knexConfig = require('../knexfile.js')[environment]
const auth = require('./local/authenticate')

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
