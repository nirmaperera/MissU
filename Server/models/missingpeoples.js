const db = require("./db")
const Sequelize = require("sequelize");

const MissingPeople  = db.define("missingpeople",{
    name:{
        type:Sequelize.STRING,
        allowNull: false
    },
    imageUrl:{
        type:Sequelize.STRING,
        defaultValue:"http://www.colby.edu/visitors/wp-content/uploads/sites/8/2018/01/17-087_Campus-Map_MapOnly-011518.jpg"
    },
    address:{
        type:Sequelize.STRING,
        allowNull: false
    },
    description:{
        type:Sequelize.TEXT
    }

});

module.exports = MissingPeople;