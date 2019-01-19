const Sequelize = require("sequelize");
const db = new Sequelize(process.env.DATABASE_URL || "postgres://postgres:admin123@localhost/postgres");


module.exports = db
