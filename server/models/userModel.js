// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// /**
// * Hint: Why is bcrypt required here?
// */
// const SALT_WORK_FACTOR = 10;
// // const bcrypt = require('bcryptjs');

// const userSchema = new Schema({
//   username: {type: String, required: true, unique: true},
//   password: {type: String, required: true}
// });

// userSchema.pre('save', () => {
//   const user = this;
//   console.log(this)
//   console.log(user.username, user.password)
//   // bcrypt things:
//   // generate salt
//   // hash password
//   // 
// })

// module.exports = mongoose.model('User', userSchema);
