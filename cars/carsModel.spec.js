const Cars = require("./carsModel.js");

const db = require("../data/dbConfig.js");

describe("cars model", function() {
  beforeEach(async () => {
    await db("cars").truncate();
  });
  describe("insert()", function() {
    it("adding a car to the db ", async function() {
      await Cars.insert({ name: "subaru wrx sti" });

      const cars = await db("cars");
      expect(cars).toHaveLength(1);
    });
  });
});

describe("cars model", function() {
  beforeEach(async () => {
    await db("cars").truncate();
  });
  describe("remove()", function() {
    it("remove a car from the db ", async function() {
      await Cars.insert({ name: "subaru wrx sti" });
      await Cars.remove({ id: 1 });

      const cars = await db("cars");
      expect(cars).toHaveLength(1);
    });
  });
});
