exports.default = {
  sequelize: () => {
    return {
      autoMigrate: true,
      loadFixtures: false,
      database: 'aniket',
      dialect: 'postgres',
      port: 5432,
      host: '127.0.0.1',
      username: 'postgres',
      password: 'admin@123'
    }
  }
}

exports.test = {
  ...exports.default.sequelize(),
  sequelize: () => {
    return {
      dialect: 'postgres',
      storage: ':memory:',
      host: 'localhost',
      logger: true
    }
  }
}

exports.development = { ...exports.default.sequelize() }

// You can define even more elaborate configurations (including replication).
// See http://sequelize.readthedocs.org/en/latest/api/sequelize/index.html for more information
// For example:

// exports.production = {
//   ...exports.default.sequelize(),
//   sequelize: function(){
//     return {
//       "autoMigrate" : false,
//       "loadFixtures": false,
//       "logging"     : false,
//       "database"    : "PRODUCTION_DB",
//       "dialect"     : "mysql",
//       "port"        : 3306,
//       "replication" : {
//         "write": {
//           "host"     : "127.0.0.1",
//           "username" : "root",
//           "password" : "",
//           "pool"     : {}
//         },
//         "read": [
//           {
//             "host"     : "127.0.0.1",
//             "username" : "root",
//             "password" : "",
//             "pool"     : {}
//           }
//         ]
//       }
//     }
//   }
// }
