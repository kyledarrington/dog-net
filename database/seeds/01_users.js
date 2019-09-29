const faker = require('faker')

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  try{
      await knex('users').del()
      let rows = [],
          i = 1;
      while (i <= 5){
          rows.push({
              id: i,
              first_name: faker.name.firstName(),
              last_name: faker.name.lastName(),
              email: 'dummy' + '+' + i + '@dognet.dev',
              password_hash: faker.internet.password()
          })
          i++
      }
      rows.push({
          id: 0,
          first_name: 'Dev',
          last_name: 'User',
          email: 'devuser@dognet.dev',
          password_hash: 'dognet'
      })
      await knex('users').insert(rows)
  }
  catch(err){
      console.error(err)
  }
};
