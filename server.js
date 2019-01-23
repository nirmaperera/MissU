const express = require("express");
const path = require("path");
const bodyParse = require("body-parser");
const { MissingPeople } = require("./Server/models");
const { User } = require("./Server/models");
const port = process.env.PORT || 3000;
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./Server/config/keys');
require('./Server/services/passport');
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
require('./Server/routes/authRoutes')(app);

app.use(bodyParse.json());
app.use(bodyParse.urlencoded());

app.use("/api", require("./Server/api"));
// {force: true} will drop the table if it already exists
MissingPeople.sync().then(() => console.log("missing people table"));
User.sync().then(() => console.log("User table"));

// if(process.env.NODE_ENV === 'production'){
//   // Express will serve up production assets
//   app.use(express.static('../dist'));
//   app.get('*' (req, res)=>{
//     res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
//   })
//   // Express will serve up the index.html file if ..
// }
if(process.env.NODE_ENV === 'production'){
app.use(express.static(__dirname + '/dist'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
