var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var resourcesSchema = new Schema({
  title: String,
  description: String,
  url: String
});

module.exports = mongoose.model('resources', resourcesSchema);