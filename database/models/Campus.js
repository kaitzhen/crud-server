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
    defaultValue: "https://i.picsum.photos/id/1076/4835/3223.jpg?hmac=sw_W2oBUV1Pp_QwMbkODYHgWlX-SOkVRatS_UErh64Q",
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