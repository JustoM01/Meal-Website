const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Menu = require('./Menu');

class Order extends Model {}

Order.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    date:{
      type:DataTypes.DATE
    },
    menu_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Menu,
        key: 'id', 
        onDelete: 'CASCADE', // Move onDelete option here
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'order',
  }
);

module.exports = Order;
