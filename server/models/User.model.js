const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    email: String,
    name: String,
    location: String,
    occupation: String,
    age: Number
  },
  {
    timeseries: true,
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;

