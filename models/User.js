const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

module.exports = User = mongoose.model('user', UserSchema);

//Note: 'user' here is the name of the model, not to be confused with file name User