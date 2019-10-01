const express = require('express')
const app = express()
const port = 8080
const environment = process.env.ENVIRONMENT || 'development'
const knexConfig = require('../knexfile.js')[environment]

const knex = require('knex')(knexConfig)

knexInit()

async function knexInit() {
    try{
        await knex.migrate.latest()
        await knex.seed.run()

    }
    catch(err){
        console.error(err);
    }
}
