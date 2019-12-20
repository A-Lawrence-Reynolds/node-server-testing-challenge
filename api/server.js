const express = require("express");

const Cars = require("../cars/carsModel.js");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "up", dbenv: process.env.DB_ENV });
});

server.get("/cars", (req, res) => {
  Cars.getAll()
    .then(ride => {
      res.status(200).json(ride);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

server.post("/", (req, res) => {
  Cars.insert(req.body)
    .then(([id]) => {
      res.status(201).json(id);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = server;
