
// imported sequelize
const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');


class Menu extends Model {};


Menu.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },

          name:{
            type:DataTypes.STRING,
            allowNull:false
          },

          price: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
      
          category:{
            type:DataTypes.STRING
          },
    
          description:{
            type:DataTypes.STRING,
            allowNull:false
          },
          serving_size:{
            type:DataTypes.INTEGER,
            allowNull:false
          },
          
    },


    {    // Link to database connection
        sequelize,
        // Set to false to remove `created_at` and `updated_at` fields
        timestamps: false,
        underscored: true,
        modelName: 'menu'}
)







module.exports = Menu;