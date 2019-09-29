const express = require('express')
const app = express()
const port = 8080
const environment = process.env.ENVIRONMENT || 'development'
console.log(environment)
const knexConfig = require('../knexfile.js')[environment]

const knex = require('knex')(knexConfig)

var knexInit = async () => {
    await knex.migrate.latest()
    await knex.seed.run()
}

knexInit()

