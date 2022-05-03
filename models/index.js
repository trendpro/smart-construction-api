const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize('sqlite::memory:');

const material = require('./material');

const db = {
  sequelize,
  Sequelize,
  Material: material(sequelize, DataTypes)
}

module.exports = db;
