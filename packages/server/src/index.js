const app = require("./server");
const { config } = require("./config/config");
const connect = require("./db/connect");
// const { seedUsers } = require("./db/seed");

connect()
  .then(async () => {
    app.listen(config.app.port, () => {
      console.log(`Server running at port ${config.app.port}`);
    });
    // await seedUsers();
  })
  .catch((err) => {
    console.log(err);
  });
