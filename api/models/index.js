const Flights = require("./Flights");
const Airports = require("./Airports");
const Users = require("./Users");

Users.belongsToMany(Flights, { as: "favorites", through: "favorites_flights" });
Flights.belongsToMany(Users, { as: "favorites", through: "favorites_flights" });

Flights.belongsTo(Airports, { as: "origin" });
Flights.belongsTo(Airports, { as: "destination" });

module.exports = { Flights, Airports, Users };
