const Car = require('../models/car')

let getCar = (req, res) => {
  Car.find({}, (err, car) => {
    return err ? res.status(401).json({error: err}) : res.status(200).json(car)
  })
}

let newCar = (req, res) => {
  var makeCar = new Car()
  makeCar.brand = req.body.brand
  makeCar.model = req.body.model
  makeCar.year = req.body.year

  makeCar.save((err, result) => {
    return err ? res.status(401).json({error: err}) : res.status(201).json(result)
  })
}

module.exports = {
  getCar: getCar,
  newCar: newCar
}
