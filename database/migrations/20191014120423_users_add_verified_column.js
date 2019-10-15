
exports.up = async function(knex) {
  await knex.schema.table('users', table => {
      table.boolean('verified')
  })
};

exports.down = async function(knex) {
  await knex.schema.table('users', table => {
      table.dropColumn('users')
  })
};
