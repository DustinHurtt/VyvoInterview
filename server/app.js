// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

const app = express();
var path = require("path");

const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

// 👇 Start handling routes here
// Contrary to the views version, all routes are controlled from the routes/index.js
const allRoutes = require("./routes");
app.use("/api", allRoutes);

// app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(
    cors({
    //   origin: [process.env.FRONTEND_URL],
      origin: ['http://localhost:3000']
    })
  );


  app.use("/", indexRouter);
  app.use("/users", usersRouter);
// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

mongoose
  .connect(
    process.env.MONGODB_URI || "mongodb://0.0.0.0/VyvoInterviewServer"
  )
  .then((x) =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch((err) => console.error("Error connecting to mongo", err));

module.exports = app;
