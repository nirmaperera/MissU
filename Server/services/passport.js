const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const { User } = require('../models');


passport.serializeUser( (user, done) => {
  done(null, user.id);
});

passport.deserializeUser( (id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  })
});


passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      // console.log('accessToken', accessToken);
      // console.log('refreshToken', refreshToken);
      // console.log('profile:', profile);
      User.findOne({
          where: {
            googleId: profile.id
          }
        })
        .then( (existingUser) => {

            if(existingUser){
              console.log('find existing user', existingUser);
              done(null, existingUser);
            } else{
              User.create({
                  name: profile.displayName,
                  googleId: profile.id
                })
              .then(user => done(null, user));
            }

        });
    }
  )
);
