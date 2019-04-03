//This files offers a set of routes for
//sending users to the various html pages.

//Dependencies
var path = require("path");
var passport = require("passport");
var ensuredLoggedIn = require("connect-ensure-login").ensureLoggedIn;
var userInside = false

//Routes
module.exports = function(app) {
     //Each of the routes below handles the html pages 
     //that the user gets sent to based requested route.

     //Root route loads login.html
     app.get("/", function(req, res) {
          if (userInside) {
               res.redirect('/task');
          };
          res.sendFile(path.join(__dirname, "../public/html/login.html"));
     });
     app.get("/task", ensuredLoggedIn('/'), function(req, res) {
          res.sendFile(path.join(__dirname, "../public/html/task.html"));
     });
     app.get("/workout", ensuredLoggedIn('/'), function(req, res) {
          res.sendFile(path.join(__dirname, "../public/html/workout.html"));
     });
     app.get("/user", ensuredLoggedIn('/'), function(req, res) {
          userInside = true;
          console.log("Hello!!!")
          console.log(req.user)
          res.sendFile(path.join(__dirname, "../public/html/user.html"));
     });
}