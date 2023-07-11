const router = require('express').Router();
const passport = require('passport');

// The root route renders our only view
router.get('/', function(req, res, next) {
res.render('index', {title: 'Day Planner'});
});

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google', 
  { scope: ['profile', 'email'], prompt: 'select_account' }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/planner', // UPDATE THIS, where do you want the client to go after you login 
    failureRedirect : '/planner' //  UPDATE THIS, where do you want the client to go if login fails
  }
));

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout(function(){ // req.logout is from passport, and when we call it we destroy the session cookie and make a brand new one, 
    // so the user has to login again
    res.redirect('/')
  })
})

module.exports = router;
