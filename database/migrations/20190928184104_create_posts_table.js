
exports.up = async function(knex) {
   await knex.schema
    .createTable('posts', function(table){
      table.increments('id');
      table.integer('user_id').notNullable();
      table.string('photo_id', 255).notNullable();
      table.string('content', 255);
      table.date('date_posted');
  })
};

exports.down = async function(knex) {
    await knex.schema
        .dropTable('posts');
};
