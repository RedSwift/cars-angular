const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
  brand: String,
  model: String,
  year: String
})

let Car = mongoose.model('Car', carSchema)
module.exports = Car
