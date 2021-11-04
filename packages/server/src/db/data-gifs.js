const db = require("../models");

async function getSeedGifs() {
  const { _id: userIdSeed } = await db.User.findOne(
    { email: "victorhugogote@gmail.com" },
    { _id: 1 },
  ).lean();
  console.log(userIdSeed);
  return [
    {
      title: "Mr Bean on GTA",
      category: "games",
      url: "https://c.tenor.com/lqdXQRTc2f8AAAAd/animated-ai.gif",
      userId: userIdSeed,
    },
    {
      title: "Michael GTA V",
      category: "games",
      url: "https://c.tenor.com/T-RQub6RMOcAAAAC/gta-v-michael-de-santa.gif",
      userId: userIdSeed,
    },
    {
      title: "GTA Dancing",
      category: "games",
      url: "https://c.tenor.com/xrCnyMFUtXkAAAAC/gta-dance.gif",
      userId: userIdSeed,
    },
    {
      title: "Oh no San Andreas",
      category: "games",
      url: "https://c.tenor.com/MHi_sQmVI_sAAAAd/cj-gta.gif",
      userId: userIdSeed,
    },
    {
      title: "GTA Wasted",
      category: "games",
      url: "https://c.tenor.com/tIyo69mo0OoAAAAd/gta-wasted.gif",
      userId: userIdSeed,
    },
  ];
}

module.exports = { getSeedGifs };
