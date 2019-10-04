// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: __dirname + '/dognet-dev.db'
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
