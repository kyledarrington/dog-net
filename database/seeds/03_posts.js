const config = require('../seed_config')
const faker = require('faker')

exports.seed = async function(knex) {
    // Deletes ALL existing entries
    try{
        await knex('posts').del()
        const photos  = await knex.select("id", "user_id", "date_added").from('photos').where("type", "=", "post")
        let rows = []

        for (var p of photos){
            rows.push(await newPost(p))
        }
        
        await knex('posts').insert(rows)
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