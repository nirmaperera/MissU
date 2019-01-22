const express = require("express");
const path = require("path")
const bodyParse = require("body-parser")
const { MissingPeople } = require("./models")
const { User } = require("./models")
const port = process.env.PORT || 3000;
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./services/passport');
const app = express();
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());


// below two lines can be refactor to be third line
// const authRoutes = require('./routes/authRoutes');
// authRoutes(app);
require('./routes/authRoutes')(app);

app.use(bodyParse.json());
app.use(bodyParse.urlencoded());

app.use("/api", require("./api"));
// {force: true} will drop the table if it already exists
MissingPeople.sync().then(() => console.log("missing people table"));
User.sync().then(() => console.log("User table"));

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
