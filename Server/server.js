const express = require("express")
const app = express();
const path = require("path")
const bodyParse = require("body-parser")
const { MissingPeople } = require("./models")
//const { Student } = require("./models")
const port = process.env.PORT || 3000;

app.use(bodyParse.json());
app.use(bodyParse.urlencoded());

app.use("/api", require("./api"));

MissingPeople.sync().then(() => console.log("missing people table"))


app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
