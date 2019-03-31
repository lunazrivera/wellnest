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
               type: DataTypes.INTEGER,
               allowNull: false,
               validate: {
                    notEmpty: true
               }
          },

          month: {
               type: DataTypes.STRING,
               allowNull: false,
               validate: {
                    isAlpha: true,
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