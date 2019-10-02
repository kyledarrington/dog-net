require('dotenv').config()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

module.exports = {
    getLoginToken : async (user, password) => {
        let userQueryResult = 
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