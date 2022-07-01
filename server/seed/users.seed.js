const mongoose = require('mongoose');
require("dotenv/config");

const User = require('../models/User.model')

const users = [
    {
      email: "testUser1@gmail.com",
      name: "Jane Doe",
      location: "Miami",
      occupation: "Web Developer",
      age:34

    },
    {
      email: "testUser2@gmail.com",
      name: "John Smith",
      location: "Miami",
      occupation: "UX/UI Designer",
      age: 36

    },
    {
      email: "testUser3@gmail.com",
      name: "Johnny Depp",
      location: "Paris",
      occupation: "Actor",
      age: 59

    },
    {
      email: "testUser4@gmail.com",
      name: "Amber Heard",
      location: "New York",
      occupation: "Actress",
      age: 36

    },
    {
      email: "testUser5@gmail.com",
      name: "Kanye West",
      location: "Jackson",
      occupation: "Rapper",
      age: 45

    },
    {
      email: "testUser6@gmail.com",
      name: "Kim Kardashian",
      location: "Malibu",
      occupation: "Celebrity",
      age: 41

    },
    {
      email: "testUser7@gmail.com",
      name: "Taylor Swift",
      location: "Nashville",
      occupation: "Singer",
      age: 32

    },
    {
      email: "testUser8@gmail.com",
      name: "Harry Styles",
      location: "London",
      occupation: "Singer",
      age: 28

    },
    {
      email: "testUser9@gmail.com",
      name: "Will Smith",
      location: "Bel Air",
      occupation: "Actor",
      age: 53

    },
    {
      email: "testUser1@gmail.com",
      name: "Elon Musk",
      location: "Austin",
      occupation: "Entrepeneur",
      age: 51

    },
    {
      email: "testUser10@gmail.com",
      name: "Barack Obama",
      location: "Chicago",
      occupation: "former President",
      age: 60

    },
  ];



User.create(users)
.then(function(results){
    console.log("User Saved", results)
    mongoose.connection.close()
})
.catch (function(error){
    console.log("Something went wrong", error.message)
    mongoose.connection.close()
})


mongoose
  .connect(process.env.MONGODB_URI)
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));