// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dognet-dev.sql'
    },
    migrations:{
      directory: __dirname + '/database/migrations'
    },
    seeds:{
      directory: __dirname + '/database/seeds'
    },
    useNullAsDefault: true
  }
};
