const Car = require('../models/car')

let getCar = (req, res) => {
  Car.find({}, (err, car) => {
    return err ? res.status(401).json({error: err}) : res.status(200).json(car)
  })
}

module.exports = {
  getCar: getCar
}
