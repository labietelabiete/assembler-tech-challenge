const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

// const {
//   accountRouter,
//   authRouter,
//   trackRouter,
//   genreRouter,
//   albumRouter,
//   searchRouter,
//   meRouter,
//   playlistsRouter,
//   usersRouter,
// } = require("./routes");

const app = express();

app.use(express.json());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());

// app.use("/api", authRouter);
// app.use("/api/account", accountRouter);
// app.use("/api/tracks", trackRouter);
// app.use("/api/genres", genreRouter);
// app.use("/api/albums", albumRouter);
// app.use("/api/search", searchRouter);
// app.use("/api/me", meRouter);
// app.use("/api/playlists", playlistsRouter);
// app.use("/api/users", usersRouter);

module.exports = app;
