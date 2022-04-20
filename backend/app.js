const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const postRoutes = require("./routes/posts");

const app = express();

mongoose.connect("mongodb+srv://yorvinlunawisky:ParallelUniverse***@cluster0.a4aed.mongodb.net/node-angular?retryWrites=true&w=majority")
    .then(() => {
        console.log('Connect to database!');
    })
    .catch(() => {
        console.log('Connection failed!');
    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    next();
  });

app.use("/api/posts", postRoutes);

module.exports = app;