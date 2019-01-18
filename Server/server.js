const express = require("express")
const app = express();
const path = require("path")
const bodyParse = require("body-parser")
const { MissingPeople } = require("./models")
//const { Student } = require("./models")


// const dbusername = 'postgres';
// const dbpassword = 'admin123';
// const dbport = '5432';
// const databaseName = 'postgres';
// const postgresUrl= `postgres://${dbusername}:${dbpassword}@localhost:${dbport}/${databaseName}`;
// const Sequelize = require('sequelize');
// const sequelize = new Sequelize(postgresUrl)

app.use(bodyParse.json());
app.use(bodyParse.urlencoded());

app.use("/config", require("./config"));

MissingPeople.sync().then(() => console.log("missing people table"))


app.listen(3000, () => {
    console.log("App is listening on port 3000");
});
