const db = require("./db")
const Sequelize = require("sequelize");

const MissingPeople  = db.define("missingpeople",{
    caseNumber:{
        type:Sequelize.STRING,
        allowNull: false
    },
    firstName:{
        type:Sequelize.STRING,
        allowNull: false
    },
    lastName:{
        type:Sequelize.STRING,
        allowNull: false
    },
    middleName:{
        type:Sequelize.STRING,
    },
    age:{
        type:Sequelize.INTEGER,
    },
    dateOfLastContact:{
        type:Sequelize.STRING,
        // allowNull: false
    },
    cityOfLastContact:{
        type:Sequelize.STRING,
        // allowNull: false
    },
    countryOfLastContact:{
        type:Sequelize.STRING,
        // allowNull: false
    },
    race:{
        type:Sequelize.STRING,
        // allowNull: false
    },
    gender:{
        type:Sequelize.STRING,
        // allowNull: false
    },
    imageUrl:{
        type:Sequelize.STRING,
        defaultValue:"http://www.colby.edu/visitors/wp-content/uploads/sites/8/2018/01/17-087_Campus-Map_MapOnly-011518.jpg"
    },
    address:{
        type:Sequelize.STRING,
        // allowNull: false
    },
    description:{
        type:Sequelize.TEXT
    }

});

module.exports = MissingPeople;
