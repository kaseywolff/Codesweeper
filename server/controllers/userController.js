// const User = require('../models/userModel');

// const userController = {};

// /**
// * getAllUsers - retrieve all users from the database and stores it into res.locals
// * before moving on to next middleware.
// */
// userController.getAllUsers = (req, res, next) => {
//   User.find({}, (err, users) => {
//     // if a database error occurs, call next with the error message passed in
//     // for the express global error handler to catch
//     if (err) return next('Error in userController.getAllUsers: ' + JSON.stringify(err));
    
//     // store retrieved users into res.locals and move on to next middleware
//     res.locals.users = users;
//     return next();
//   });
// };

// /**
// * createUser - create and save a new User into the database.
// */
// userController.createUser = async (req, res, next) => {
//   // write code here
//   try {
//     // destructure request body to get new username and password
//     const { username, password } = req.body;
//     // if username already exists, send to signup page again
//     // User.find({username: username}).exec()
//     //   .then((results) => {
//     //     if (results.length !== 0) {
//     //       res.locals.redirect = 'signup'
//     //       return next()
//     //     }
//     //   })
//     // if user/pw is not a string, send error
//     if (typeof username !== 'string' || typeof password !== 'string') {
//       return next('Error in createUser')
//     }

//     // if no error, add username and pw to database
//     await User.create({username, password})
//     // User.find({}).exec().then((results) => console.log(results))
//     return next();
//   } catch (error) {
//     return next(error);
//   }
//   // console.log(req.body)
// };


// /**
// * verifyUser - Obtain username and password from the request body, locate
// * the appropriate user in the database, and then authenticate the submitted password
// * against the password stored in the database.
// */
// userController.verifyUser = (req, res, next) => {
//   // find user in database
//   // check if user exists in database
  
//   try {
//     const {username, password} = req.body
//     User.find({username: username, password: password}).exec()
//       .then((results) => {
//         // if array length is 0, set redirect to signup
//         if (results.length === 0) {
//           res.locals.redirect = 'signup';
//           return next();
//         } else {
//           // otherwise, redirect to secret
//           res.locals.redirect = 'success';
//           return next();
//         }
//       })
//   }
//   catch (error) {
//     return next({err: error})
//   }
// };

// module.exports = userController;
