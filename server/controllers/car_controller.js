var Car = require('../models/car')

var getCar = function (req, res) {
  Car.find({}, function (err, car) {
    return err ? res.status(401).json({error: err}) : res.status(200).json(car)
  })
}

var showCar = function (req, res) {
  Car.findOne({_id: req.params.id}, function (err, car) {
    return err ? res.status(401).json({error: err}) : res.status(200).json(car)
  })
}

var newCar = function (req, res) {
  var makeCar = new Car()
  makeCar.brand = req.body.brand
  makeCar.model = req.body.model
  makeCar.year = req.body.year

  makeCar.save(function (err, result) {
    return err ? res.status(401).json({error: err}) : res.status(201).json(result)
  })
}

var updateCar = function (req, res) {
  Car.findOne({_id: req.params.id}, function (err, car) {
    if (err) return res.status(401).json({error: err})
    else {
      car.brand = req.body.brand
      car.model = req.body.model
      car.year = req.body.year

      car.save(function (err, result) {
        return err ? res.status(401).json({error: err}) : res.status(201).json(result)
      })
    }
  })
}

var deleteCar = function (req, res) {
  Car.remove({_id: req.params.id}, function (err) {
    return err ? res.status(401).json({error: err}) : res.status(201).json('Delete Successful')
  })
}
module.exports = {
  getCar: getCar,
  newCar: newCar,
  updateCar: updateCar,
  deleteCar: deleteCar,
  showCar: showCar
}
