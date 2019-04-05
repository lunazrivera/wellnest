// Here we are requiring our dependencies
var db = require("../models");
var bcrypt = require("bcrypt");
var passport = require('passport');


module.exports = function(app) {

     app.get("/api/user-logged", function(req, res) {
          // console.log(req.user.dataValues);
          res.json(req.user)
     })

     app.post("/api/users", function(req, res) {
          db.user.findOne({where: {username: req.body.username}}).then(function(data) {
               if (data) {
                    res.status(400).send({error: "Try again!"});
               } else {
                    var newUser = {
                         username: req.body.username,
                         firstname: req.body.firstname,
                         lastname: req.body.lastname,
                         password: req.body.password
                    }

                    //Hashing the password of the user
                    bcrypt.genSalt(10,function(err,salt) {
                         bcrypt.hash(newUser.password, salt, function(err, hash) {
                              if (err) {throw err};
                              //Setting password to hash
                              newUser.password = hash;
                              //saving user
                              db.user.create(newUser).then(function(dbUser) {
                                   res.json(dbUser);
                              }).catch(err => console.log(err))
                         })
                    });
               }
          });
     })

     app.post('/api/login', passport.authenticate('local', { failureRedirect: '/' }), (req, res, next) => {
          req.session.save((err) => {
               if (err) {
                    return next(err);
               }
               res.redirect('/task');
          });
     });

     app.get('/logout', (req, res, next) => {
          req.logout();
          req.session.save((err) => {
               if (err) {
                    return next(err);
               }
               res.redirect('/');
          });
     });

}