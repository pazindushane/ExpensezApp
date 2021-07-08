const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    uid:String,
    type: String,
    category:String,
    value:Number,
    date:String,
    descrpiton:String
  });
  
  module.exports = mongoose.model("Expenses", schema);