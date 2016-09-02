var mongoose = require('mongoose')

var carSchema = new mongoose.Schema({
  brand: String,
  model: String,
  year: String
})

var Car = mongoose.model('Car', carSchema)
module.exports = Car
