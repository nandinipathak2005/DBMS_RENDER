// const { Sequelize } = require('sequelize');

// const gameDB = new Sequelize('hidden_symphony_db', 'root', 'nandini@2005', {
//   host: 'localhost',
//   dialect: 'mysql',
//   logging: false,
//   define: {
//     timestamps: false
//   }
// });
// module.exports = gameDB;
const { Sequelize } = require('sequelize');

const gameDB = new Sequelize('bhrzxgaufey6jf8j6f0x', 'udcohdhmrcirdmbf', 'GfGPS2amdPVVCnCeojJn', {
  host: 'bhrzxgaufey6jf8j6f0x-mysql.services.clever-cloud.com',        // e.g., 'db4.freehosting.com'
  port: 3306,       // e.g., 3306 (without quotes if number)
  dialect: 'mysql',
  logging: false,
  define: {
    timestamps: false
  }
});

module.exports = gameDB;
