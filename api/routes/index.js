const express = require("express");

const { Flights, Airports, Users } = require("../models");

const router = express.Router();

router.get("/flights", (req, res) => {
  Flights.findAll({
    include: [
      { model: Airports, as: "origin" },
      { model: Airports, as: "destination" },
    ],
  })
    .then((flights) => res.send(flights))
    .catch((error) => res.status(500).send(error));
});

router.get("/airports", (req, res) => {
  Airports.findAll()
    .then((airports) => res.send(airports))
    .catch((error) => res.status(500).send(error));
});

router.post("/login", (req, res) => {
  Users.findOne({
    where: { name: "Tom Hanks" },
    include: {
      model: Flights,
      as: "favorites",
      include: [
        { model: Airports, as: "origin" },
        { model: Airports, as: "destination" },
      ],
    },
  })
    .then((user) => res.send(user))
    .catch((error) => {
      console.log(error);
      res.status(500).send(error);
    });
});

router.put("/favorites", (req, res) => {
  const { userId, flightId } = req.query;
  Users.findByPk(userId)
    .then((user) => user.addFavorite(flightId))
    .then(() => res.sendStatus(200))
    .catch(() => res.status(500).send("Already added"));
});

router.delete("/favorites", (req, res) => {
  const { userId, flightId } = req.query;
  Users.findByPk(userId)
    .then((user) => user.removeFavorite(flightId))
    .then(() => res.sendStatus(200))
    .catch((err) => res.status(500).send(err));
});

module.exports = router;
