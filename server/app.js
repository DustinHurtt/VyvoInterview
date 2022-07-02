require("dotenv/config");

require("./db");

const express = require("express");

const app = express();
var path = require("path");

const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");

require("./config")(app);

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

const allRoutes = require("./routes");
app.use("/api", allRoutes);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(
  cors({
    //   origin: [process.env.FRONTEND_URL],
    origin: ["http://localhost:3000"],
  })
);

app.use("/", indexRouter);
app.use("/users", usersRouter);

require("./error-handling")(app);

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://0.0.0.0/VyvoInterviewServer")
  .then((x) =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch((err) => console.error("Error connecting to mongo", err));

module.exports = app;
