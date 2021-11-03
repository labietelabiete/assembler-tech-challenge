const db = require("../models");

const { getSeedUsers } = require("./data-users");

async function seedUsers() {
  const results = getSeedUsers();

  await db.User.deleteMany({});
  await db.User.create([...results]);
}

module.exports = { seedUsers };
