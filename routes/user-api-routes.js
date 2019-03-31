// Here we are requiring our dependencies
var db = require("../models");
var passport = require('passport');
var LocalStrategy = require('passport-local');

// This section below im still testing.
// ************************************************
passport.use(new LocalStrategy(function(username, password, done) {
                    
     db.user.findOne({ username: username }, function(err, user) {
          if (err) { return done(err); }

          if (!user) {
               return done(null, false, { message: 'Incorrect username.' });
          }

          if (!user.validPassword(password)) {
               return done(null, false, { message: 'Incorrect password.' });
          }
          return done(null, user);
     });
}
// ************************************************
));
module.exports = function(app) {
     app.post("/api/users", function(req, res) {
          console.log(req.body);
          db.user.create(req.body).then(function(dbUser) {
               res.json(dbUser);
          })
     })

     app.post("/api/login", function(req,res){

          // console.log(req.body); //this console logs the user input
          // This section below im still testing.
          // *******************************************
          var tryUsername = req.body.username;
          var tryPassword = req.body.password;
          console.log(tryUsername);
          console.log(tryPassword);
          passport.authenticate('local', { 
               successRedirect: '/workout',
               failureRedirect: '/user', 
               failureFlash: true 
          });
          // *******************************************
     })
}