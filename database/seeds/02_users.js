const config = require('../seed_config')
const faker = require('faker')
const bcrypt = require('bcrypt')

exports.seed = async (knex) => {
  // Deletes ALL existing entries
  try{
      await knex('users').del()
      let rows = [],          
          i = 2;
      
      var portraits  = await knex.select("id", "user_id").from('photos').where("type", "=", "portrait")
      
      let portraitMap = {}
      for (var p of portraits) portraitMap[p.user_id] = p.id
      
      //Generate 5 Dummy Users
      while (i <= config.numberOf.users){
          let portraitId = portraitMap[i]
          rows.push(await newDummyUser(i, portraitId))
          i++
      }
      
      //Generate one Dev User with simple credentials
      rows.push(await newDevUser('dev@dognet.dev', 'dognet'))
      
      //Insert generated users. 
      await knex('users').insert(rows)
  }
  catch(err){
      console.error(err)
  }
};

const newDummyUser = async (userId, portraitId) => {
    let password = faker.internet.password()
    let hash = await bcrypt.hash(password, 10)
    return{
          id: userId,
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          email: 'dummy' + '+' + userId + '@dognet.dev',
          portrait_id: portraitId,
          password_hash: hash
    }
}

const newDevUser = async (email, password) => {
    let hash = await bcrypt.hash(email, 10);
    return {
        id: 1,
        first_name: 'Dev',
        last_name: 'User',
        email: 'devuser@dognet.dev',
        password_hash: await bcrypt.hash('dognet', 10)
    }
}
