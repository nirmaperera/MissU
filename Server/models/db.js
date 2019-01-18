//const dbusername = 'postgres';
//const dbpassword = 'admin123';
const dbport = '5432';
const databaseName = 'postgres';
const postgresUrl= `postgres://postgres:abc@localhost:${dbport}/${databaseName}`;
const Sequelize = require('sequelize');
const sequelize = new Sequelize(postgresUrl)