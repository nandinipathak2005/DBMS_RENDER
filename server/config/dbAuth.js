// const { Sequelize } = require('sequelize');

// const authDB = new Sequelize('fatal_query', 'root', 'nandini@2005', {
//     host: 'localhost',
//     dialect: 'mysql',
//     logging: false,
//     define: {
//         timestamps: false
//     }
// });

// module.exports = authDB;
// const { Sequelize } = require('sequelize');

// const authDB = new Sequelize('bhrzxgaufey6jf8j6f0x', 'udcohdhmrcirdmbf', 'GfGPS2amdPVVCnCeojJn', {
//   host: 'bhrzxgaufey6jf8j6f0x-mysql.services.clever-cloud.com',        // e.g., 'db4.freehosting.com'
//   port: 3306,       // e.g., 3306 (without quotes if number)
//   dialect: 'mysql',
//   logging: false,
//   define: {
//     timestamps: false
//   }
// });

// module.exports = authDB;
require('dotenv').config();

const { Sequelize } = require('sequelize');

const authDB = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    logging: false,
    define: {
      timestamps: false
    }
  }
);

module.exports = authDB;
