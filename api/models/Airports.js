const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db");

class Airports extends Model {}

Airports.init(
  {
    value: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "airports",
  }
);

module.exports = Airports;
