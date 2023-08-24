const express = require('express');
const path = require('path');
// const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');


const userController = require('./controllers/userController');
// const cookieController = require('./controllers/cookieController');
const sessionController = require('./controllers/sessionController');
const { isLoggedIn } = require('./controllers/sessionController');

const PORT = 3000;

const app = express();

const mongoURI = '';
mongoose.connect(mongoURI)

// app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded());

// app.use('/signup', userController);
// app.use('/login', userController);

// app.use('/', express.static(path.resolve(__dirname, '../client')));

// HOME PAGE
  // home page allows users to play without signing in
app.get('/',
  (req, res) => {
    res.status(202).sendFile(path.join(__dirname, '../client/index.html'))
  }
)

// // SIGNUP
// app.get('/signup', 
// (req, res) => {
//   return res.status(202).sendFile(path.join(__dirname, '../client/html/signup.html'));
// }
// );

// app.post('/signup', 
//   userController.createUser, 
//   // cookieController.setSSIDCookie,
//   // start session when user signs up
//   sessionController.startSession,
//   (req, res) => {
//   // trying to redirect if duplicate username
//   // if (res.locals.redirect === 'signup') {
//   //   return res.redirect('/signup')
//   // }
//     res.redirect('/game');
//   }
// );


// LOGIN CONFIRMATION
app.get('/confirm_login',
  // (req, res) => {
  //   return res.status(202).sendFile(path.join(__dirname, '../client/index.js'))
  // }
)
// app.post('/login', 
//   userController.verifyUser, 
//   // cookieController.setSSIDCookie,
//   sessionController.startSession,
//   (req, res) => {
//   // what should happen here on successful log in?
//     if (res.locals.redirect === 'signup') {
//       return res.redirect('/signup');
//     } else if (res.locals.redirect === 'success') {
//       return res.redirect('/secret')
//     } else res.status(404).send('Not found')
//   }
// );


// AUTHORIZED ROUTES
  // must login to access
// app.get('/game', 
//   // put session controller is loggin in here
//   sessionController.isLoggedIn,
//   // check res.locals to see if we can go to secret page
//   // if we can, continue, otherwise, send to signup
//   (req, res) => {
//   // usre redirected to signup page if they don't have ssid cookie
//     if (res.locals.redirect === 'false') {
//       res.sendFile(path.resolve(__dirname, '../client/secret.html'));
//     } else if (res.locals.redirect === 'true') {
//       return res.redirect('/signup')
//     } else {
//       return res.status(404).send('Not found')
//     }

//   });



/**
 * 404 handler
 */
app.use('*', (req,res) => {
  res.status(404).send('Not Found');
});

/**
 * Global error handler
 */
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ error: err });
});

app.listen(PORT, ()=>{ console.log(`Beep boop 🤖 Listening on port ${PORT}...`); });

module.exports = app;

