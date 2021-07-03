const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    uid: String ,
    name: String,
    email: String,
    password: String
  });
  
  module.exports = mongoose.model("User", schema);