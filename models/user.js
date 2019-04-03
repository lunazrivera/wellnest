//Bellow we are exporting a function that defines the models/tables using sequelize
module.exports = function(sequelize,DataTypes) {

     //Bellow we are defining table name following 
     //the columns with their respective characteristics.
     var user = sequelize.define("user", {
          username: {
               type: DataTypes.STRING,
               allowNull: false,
               validate: {
                    isAlphanumeric: true,
                    len: [5, 15],
                    notEmpty: true,
               }
          },

          firstname: {
               type: DataTypes.STRING,
               allowNull: false,
               validate: {
                    isAlpha: true,
                    notEmpty: true,
                    len: [1,25]
               }
          },

          lastname: {
               type: DataTypes.STRING,
               allowNull: false,
               validate: {
               isAlpha: true,
               notEmpty: true,
               len: [1,35]
               }
          },

          password: {
               type: DataTypes.STRING,
               allowNull: false,
               validate: {
                    notEmpty: true,
                    len: [6]
               }
          }
     });

     //Here we are initiating our association on the user model
     user.associate = function(models) {
          //Associating user's with Task's.
          //When an user is deleted, also delete any associated task.
          user.hasMany(models.task, {
               onDelete: "cascade"
          }) 
     };

     return user;
};