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

let updateCar = (req, res) => {
  Car.findOne({_id: req.params.id}, (err, car) => {
    if (err) return res.status(401).json({error: err})
    else {
      car.brand = req.body.brand
      car.model = req.body.model
      car.year = req.body.year

      car.save((err, result) => {
        return err ? res.status(401).json({error: err}) : res.status(201).json(result)
      })
    }
  })
}

let deleteCar = (req, res) => {
  Car.remove({_id: req.params.id}, (err) => {
    return err ? res.status(401).json({error: err}) : res.status(201).json('Delete Successful')
  })
}
module.exports = {
  getCar: getCar,
  newCar: newCar,
  updateCar: updateCar,
  deleteCar: deleteCar
}
