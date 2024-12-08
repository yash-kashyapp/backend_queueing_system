const knex = require('knex')({
    client: 'mysql2',
    connection: {
      host: '103.163.40.130',
      port: 3388,
      user: 'ccuser',
      password: 'cloudVirAmiNag119',
      database: 'cc_master',
    },
});

module.exports = knex