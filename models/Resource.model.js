const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let resourceSchema = new Schema({
  title: {
    type: String,
    required: false,
    trim: true
  },
  description: {
      type: String,
      required: false,
      trim: true
  },
  url: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
}, {
  timestamps: true
});

const Resource = mongoose.model('Resource', resourceSchema);

module.exports = Resource;