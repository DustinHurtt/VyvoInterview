var express = require("express");
var router = express.Router();

const User = require("../models/User.model");

require("dotenv/config");

router.get("/", function (req, res, next) {
  User.find()

    .then((usersFromDB) => {
      res.json({ users: usersFromDB });
    })
    .catch((err) =>
      console.log(`Error while getting the users from the DB: ${err}`)
    );
});

module.exports = router;
