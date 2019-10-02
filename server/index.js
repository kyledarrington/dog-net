const express = require('express')
const app = express()
const port = 8080
const environment = process.env.ENVIRONMENT || 'development'
const knexConfig = require('../knexfile.js')[environment]
const db = require('./local/database')
const auth = require('.local/authentication')

const knex = require('knex')(knexConfig)

knexInit()

app.use(express.json())

app.post('/login', async (req, res) => {
    const data = req.body,
          user = await db.loginQuery(data.email),
          token = (user != null) ? auth.getLoginToken(user, data.password) : null
    return token
}) 

async function knexInit() {
    try{
        await knex.migrate.latest()
        await knex.seed.run()
    }
    catch(err){
        console.error(err);
    }
}
