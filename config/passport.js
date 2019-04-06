//Below we are requiring the files and resources we'll need to use passport authentication
const LocalStrategy = require("passport-local").Strategy;
var db = require("../models");
var bcrypt = require("bcrypt");

//Below we are exporting a function and requiring it in the server.js
module.exports = function(passport) {
     //Here we are setting a localStrategy to be used when authenticating a user
     //this setting will look up for the username provided to match the username in the database 
     //if it matches it goes and de hashes the password in the database to check it with the password given
     passport.use( new LocalStrategy({ usernameField: "username" }, (username, password, done) => {
               console.log(username, password);
               console.log("Going to the database now");
               console.log();
               //Looking for user and comparing
               db.user.findOne({where: {username: username}}).then(function(user) {
                    console.log();
                    console.log(user);
                    console.log();
                    if(!user){
                         return done(null, false, {message: "that username is not registered"}); 
                    };
                    console.log();
                    console.log();
                    console.log();
                    //Looking for password and comparing
                    bcrypt.compare(password, user.password, function(err, isMatch) {
                         if  (err) throw err;
                         if (isMatch) {
                              return done(null, user)
                         } else {
                              return done(null, false, {message: "password incorrect"}); 
                         }
                    })

               }).catch(err => console.log(err))
          })); //End of our strategy

     //Below we are setting up the req.user to be the user in our database
     //who has been properly signed in.
     passport.serializeUser(function(user, done) {
          done(null, user.id);
     });

     passport.deserializeUser(function(id, done) {
          db.user.findOne({where: {id: id}}).then(function(user) {
               done(null, user);
          });
     });


}// End of our exports function
