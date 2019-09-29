
exports.up = async function(knex) {
    await knex.schema
        .createTable('users', function(table){
          table.increments('id');
          table.string('first_name', 40).notNullable();
          table.string('last_name', 40).notNullable();
          table.string('email', 255).notNullable();
          table.string('password_hash', 255).notNullable();
          table.integer('portrait_id');
      });
    };

exports.down = async function(knex) {
    await knex.schema
        .dropTable('users');
};
