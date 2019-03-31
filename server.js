// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dotenv required
require('dotenv').config();
// Bellow we'll be requiring dependencies for the server.
var express = require("express");

//Below this code will require passport for the use of authentication
var passport = require('passport');
var LocalStrategy = require('passport-local');



// Bellow we'll be creating an instance of the express application.
var app = express();
var PORT = process.env.PORT || 8000;

// Requiring models for syncing.
var db = require("./models");

// Sets up the express app to handle data parsing.
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Static directory to be served
app.use(express.static("public"));

// Routes
require("./routes/user-api-routes")(app);
// require("./routes/task-api-routes")(app);
require("./routes/html-routes.js")(app);

//Syncing our sequelize models and then starting our express application.
db.sequelize.sync({ force: true }).then(function() {
     app.listen(PORT, function() {
          console.log("App listening on: https://localhost:" + PORT);
     });
});
