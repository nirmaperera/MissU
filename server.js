const express = require("express");
const path = require("path");
const bodyParse = require("body-parser");
const { MissingPeople } = require("./server/models");
const { User } = require("./server/models");
const { Tip } = require("./server/models");
const port = process.env.PORT || 3000;
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./server/config/keys');
require('./server/services/passport');
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
require('./server/routes/authRoutes')(app);

app.use(bodyParse.json());
app.use(bodyParse.urlencoded());

app.use("/api", require("./server/api"));

// Tip.belongsTo(MissingPeople);
// MissingPeople.hasMany(Tip);

// {force: true} will drop the table if it already exists
MissingPeople.sync().then(() => console.log("missing people table connected"));
User.sync().then(() => console.log("User table connected!"));
Tip.sync().then(() => console.log("Tip table connected!"));

// if(process.env.NODE_ENV === 'production'){
//   // Express will serve up production assets
//   app.use(express.static('../dist'));
//   app.get('*' (req, res)=>{
//     res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
//   })
//   // Express will serve up the index.html file if ..
// }

app.use(express.static(__dirname + '/dist'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
