const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: 'user cannot be blank'
    },
    email: {
      type: String,
      required: 'email  cannot be blank'
    }
  },
  { collection: 'user' }
);

module.exports = mongoose.model('user', userSchema);