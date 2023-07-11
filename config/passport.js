const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
//Require your User Model here!
const User = require("../models/user");
// configuring Passport!
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
   
    async function (accessToken, refreshToken, profile, cb) {

// the cb signature function is either cb(error or successfull data that you want)
      try {
     // this will show the users profile if they log in and their info has been found on the database
        let userDocument = await User.findOne({ googleId: profile.id });

// if we find their info, pass the info along, if not, proceed to error
        if (userDocument) return cb(null, userDocument);
      
       // if its the first time logging in, this will create the user
        userDocument = await User.create({
          name: profile.displayName,
          googleId: profile.id,
          email: profile.emails[0].value,
          avatar: profile.photos[0].value,
        });
       
        return cb(null, userDocument);
      } catch (err) {
        return cb(err);
      }
    }
  )
);


// this will be called after the verifiy cb above, its the second function called after the user logs in
// it will take the userDocument and add the ID of the user to the session cookie
passport.serializeUser(function(user, done) {
  done(null, user.id); // adding the users mongoDb id to the session cookie
});

passport.deserializeUser(async function(userId, cb) {
  const user = await User.findById(userId);
  cb(null, user);

});



