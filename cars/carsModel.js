const db = require("../data/dbConfig.js");

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById
};

async function insert(cars) {
  return db("cars")
    .insert(cars)
    .returning("id");
}

async function update(id, changes) {
  return null;
}

function remove(id) {
  return db("cars")
    .where({ id })
    .del();
}

function getAll() {
  return db("hobbits");
}

function findById(id) {
  return null;
}
