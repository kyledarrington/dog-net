
exports.up = async function(knex) {
    try{
        await knex.schema
            .createTable('photos', function(table){
                table.increments('id');
                table.integer('user_id').notNullable();
                table.string('img_src', 255).notNullable();
                table.integer('size_kb').notNullable();
                table.date('date_added');
        })
    }
    catch(err){
        console.log(err)
    }
};

exports.down = async function(knex) {
    await knex.schema
        .dropTable('photos')
};
