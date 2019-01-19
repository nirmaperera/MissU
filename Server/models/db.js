const Sequelize = require("sequelize");
const db = new Sequelize("postgres://postgres:admin123@localhost/postgres");


module.exports = db
