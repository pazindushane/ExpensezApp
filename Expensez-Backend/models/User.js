const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  _id: { type: String },
    name: String,
    email: String,
    password: String
  });
  
  module.exports = mongoose.model("User", schema);