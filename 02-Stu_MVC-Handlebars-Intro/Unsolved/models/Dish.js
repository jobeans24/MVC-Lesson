// ? Here is where we set up our Dish model, for when we are ready to connect to a database in future activities.

// TODO: Add a comment indicating how this file fits into the MVC framework.
// TODO: What is it responsible for handling?
// This file is a model and it is responsible for handling the dish model
// It is responsible for setting up the Dish model
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Dish extends Model {}

Dish.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    dish_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    guest_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    has_nuts: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'dish',
  }
);

module.exports = Dish;
