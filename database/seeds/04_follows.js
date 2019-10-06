const config = require('../seed_config')
const faker = require('faker')

exports.seed = async function(knex) {
    // Deletes ALL existing entries
    try{
        await knex('follows').del()
        let rows = []

        for (var i = 2; i <= config.numberOf.users; i++){
            rows.push({follower_id: 1, following_id: i})
        }
        
        await knex('follows').insert(rows)
    }
    catch(err){
        console.error(err);
    }
}

const newPost = async (photo) => ({
    user_id : photo.user_id,
    photo_id : photo.id,
    content : faker.lorem.sentences(),
    date_posted: photo.date_added,
})