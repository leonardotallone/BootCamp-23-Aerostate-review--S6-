const Sequelize = require("sequelize");

const sequelize = new Sequelize("aerostate", null, null, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = sequelize;
