// Here we are requiring our dependencies
var db = require("../models");
var bcrypt = require("bcrypt");
var passport = require('passport');


module.exports = function(app) {


     //Create Task routes
     app.post("/api/task", function(req, res) {
          // create takes an argument of an object describing the item we want to
          // insert into our table.
          db.task.create(req.body).then(function(dbTask) {
               // console.log("inside database")
               // console.log(dbTask)
               res.json(dbTask);
          }).catch(function(err) {
               res.json(err);
          })
     });

     //Reading task from the database
     app.get("/api/task", function(req, res) {
          // console.log("Getting Task")
          // console.log(req.user);
          // Returning all tasks entries
          db.task.findAll({where:{userId: req.user.dataValues.id}}).then(function(dbTask) {
               // console.log(dbTask);
               //Sending the task back as an argument inside a callback function
               res.json(dbTask)
          })
     });

     app.delete("/api/task/:id", function(req, res) {
          db.task.destroy({
               where: {
                    id: req.params.id
               }
          }).then(function(dbTask) {
               res.json(dbTask);
          });
     });

     // app.put("/api/task/complete/:id", function(req, res) {
     //      db.task.update({complete})
     // })
     app.put("/api/task/:id", function(req, res) {
          console.log(req.body.complete);
          db.task.update({
               taskname: req.body.taskname,
               date: req.body.date,
               starttime: req.body.starttime,
               endtime: req.body.endtime,
               complete: req.body.complete
          }, {
               where: {
                    id: req.params.id
               }
          }).then(function(dbTask) {
               res.json(dbTask);
          }).catch(function(err) {
               res.json(err)
          })
     })
}