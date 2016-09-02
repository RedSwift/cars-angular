const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const morgan = require('morgan')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const carCtrl = require('./server/controllers/car_controller')
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URI)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

// app.use(express.static(__dirname + '/public'))

app.use(morgan('dev'))

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})

// routes
app.post('/api/car', carCtrl.newCar)
app.get('/api/car', carCtrl.getCar)
app.put('/api/car/:id', carCtrl.updateCar)
app.delete('/api/car/:id', carCtrl.deleteCar)
