//This files offers a set of routes for
//sending users to the various html pages.

//Dependencies
var path = require("path");

//Routes
module.exports = function(app) {
     //Each of the routes below handles the html pages 
     //that the user gets sent to based requested route.

     //Root route loads login.html
     app.get("/", function(req, res) {
          res.sendFile(path.join(__dirname, "../public/html/login.html"));
     });

     app.get("/task", function(req, res) {
          res.sendFile(path.join(__dirname, "../public/html/task.html"));
     });
     app.get("/workout", function(req, res) {
          res.sendFile(path.join(__dirname, "../public/html/workout.html"));
     });
     app.get("/user", function(req, res) {
          res.sendFile(path.join(__dirname, "../public/html/user.html"));
     });
}