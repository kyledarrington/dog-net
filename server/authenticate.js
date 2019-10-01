require('dotenv').config()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

module.exports = {
    loginToken : async (email, password, knex) => {
        let userQueryResult = await knex
            .select('u.id', 'u.password_hash', 'u.email', 'u.first_name', 'u.last_name', 'p.img_src as portraitSrc')
            .leftJoin('photos as p', 'p.id', 'u.portrait_id')
            .from('users as u')
            .where('u.email', '=', email)
        if (userQueryResult.length == 0) return false
        let user = userQueryResult[0]
        let match = bcrypt.compare(password, user.password_hash)
        if (match){
            const payload = {
                userId : user.id,
                userEmail : user.email,
                userFirstName: user.first_name,
                userLastName: user.last_name,
                userPortrait : user.portraitSrc
            }
            const options = {
                issuer: 'Dognet',
                subject: user.email,
            }
            const SECRET = process.env.JWT_PRIVATE
            const token = await jwt.sign(payload, SECRET, options)
            return
        }
    }
}