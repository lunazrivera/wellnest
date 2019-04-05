module.exports = function(sequelize,DataTypes) {
     var task = sequelize.define("task", {

          taskname: {
               type: DataTypes.STRING,
               allowNull: false,
               validate: {
                    notEmpty: true,
               }
          },

          date: {
               type: DataTypes.STRING,
               allowNull: false,
               validate: {
                    notEmpty: true
               }
          },

          starttime: {
               type: DataTypes.STRING,
               allowNull: false,
               validate: {
                    notEmpty: true
               }
          },

          endtime: {
               type: DataTypes.STRING,
               allowNull: false,
               validate: {
                    notEmpty: true
               }
          },

          complete: {
               type: DataTypes.BOOLEAN,
               // defaultValue is a flag that defaults a new todos complete value to false if
               // it isn't supplied one
               defaultValue: false
          }
          
     });


     task.associate = function(models) {
          task.belongsTo(models.user, {
               foreignKey: {
                    allowNull: false
               }
          });
     };

     return task;

}