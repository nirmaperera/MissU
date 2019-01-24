const db = require("./db")
const Sequelize = require("sequelize");

const User  = db.define("user",{
    name:{
        type:Sequelize.STRING,
        allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      validate: {
        isEmail: true
      }
    },
    googleId: {
      type: Sequelize.STRING
    }
});

module.exports = User;
