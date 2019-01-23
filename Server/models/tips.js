const db = require("./db")
const Sequelize = require("sequelize");

const Tip  = db.define("tip",{
    caseNumber:{
        type:Sequelize.STRING,
        // allowNull: false
    },
    tip: {
      type: Sequelize.TEXT,
      // allowNull: false
    },
    firstName:{
        type:Sequelize.STRING,
        // allowNull: false
    },
    lastName:{
        type:Sequelize.STRING,
        // allowNull: false
    },
    tipGiverId: {
      type: Sequelize.STRING
    }

});

module.exports = Tip;
