
exports.up = async function(knex) {
  await knex.schema
    .createTable('follows', function(table){
      table.increments('id');
      table.integer('follower_id').notNullable();
      table.integer('following_id').notNullable();
  })
};

exports.down = async function(knex) {
    await knex.schema
        .dropTable('follows');
};
