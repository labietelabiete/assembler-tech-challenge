const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const { userRouter } = require("./routes");

const app = express();

app.use(express.json());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());

app.use("/users", userRouter);

module.exports = app;
