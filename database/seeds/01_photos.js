const config = require('../seed_config')
const faker = require('faker')

exports.seed = async function(knex) {
  
  try{
      // Deletes ALL existing entries
      await knex('photos').del()
      let rows = []
      
      //Create 2 posts and 1 portrait for every user
      for (var i = 1; i <= config.numberOf.users; i++){
          //First, posts
          for (var j = 0; j < config.numberOf.postsPerUser; j++){
              rows.push(newPhoto('post', i));
          }
          //Then, portrait
          rows.push(newPhoto('portrait', i));
      }
      
      //Insert generated photos. 
      await knex('photos').insert(rows)
  }
  catch(err){
      console.error(err)
  }
};

const newPhoto = (photoType, userId) => ({
    user_id : userId,
    img_src : photoType == 'portrait' ? faker.image.avatar() : faker.image.imageUrl(), //placeholder
    size_kb : 1, //placeholder
    type: photoType,
    date_added: faker.date.recent()
});
    

