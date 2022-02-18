const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db");

class Flights extends Model {}

Flights.init(
  {
    code: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    departure: {
      type: DataTypes.JSON, // { day, hour }
    },
    arrival: {
      type: DataTypes.JSON, // { day, hour }
    },
  },
  {
    sequelize,
    modelName: "flights",
  }
);

module.exports = Flights;
