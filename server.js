// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dotenv required for concealing password and api keys
require('dotenv').config();

// Below we'll be requiring dependencies for the server.
var express = require("express");
var session = require("express-session");  //expression-session is dealing with the session created by passport
var passport = require("passport"); //passport is required for dealing with our auth.

// Below we'll be creating an instance of the express application.
var app = express();
var PORT = process.env.PORT || 8000;

// Requiring models for syncing.
var db = require("./models");

// Sets up the express app to handle data parsing.
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Static directory to be served
app.use(express.static("public"));

//Sets up express app to handle passport.js
app.use(session({secret: "secret"}))
app.use(passport.initialize());
app.use(passport.session());

// Passport config
require("./config/passport")(passport)

// Routes
require("./routes/user-api-routes")(app);
require("./routes/task-api-routes")(app);
require("./routes/html-routes.js")(app);

//Syncing our sequelize models and then starting our express application.
db.sequelize.sync({ force: false }).then(function() {
     app.listen(PORT, function() {
          console.log("App listening on: https://localhost:" + PORT);
     });
});
