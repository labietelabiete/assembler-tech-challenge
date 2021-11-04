const db = require("../models");

const { getSeedUsers } = require("./data-users");
const { getSeedGifs } = require("./data-gifs");

async function seedUsers() {
  const results = getSeedUsers();

  await db.User.deleteMany({});
  await db.User.create([...results]);
  console.log("Users seeding finished");
}

async function seedGifs() {
  const results = await getSeedGifs();

  await db.Gif.deleteMany({});
  await db.Gif.create([...results]);

  console.log("Gifs seeding finished");
}

module.exports = { seedUsers, seedGifs };
