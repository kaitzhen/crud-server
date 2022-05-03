const Sequelize = require('sequelize');
const db = require('../db');

const Campus = db.define("campus", {

  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  imageUrl: {
    type: Sequelize.STRING,
    allowNull:false,
    defaultValue: "https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ",
  },

  address: {
    type: Sequelize.STRING,
    allowNull: false
  },

  description: {
    type: Sequelize.STRING,
  }

});

module.exports = Campus;