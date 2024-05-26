const { Sequelize } = require('sequelize');

const database = "db_testing";
const username = "postgres";
const password = "140220";
const host = "db";

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: 'postgres'
});

module.exports = sequelize;




