var express = require('express')
var app = express()
var port = process.env.PORT || 3000
var morgan = require('morgan')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var carCtrl = require('./server/controllers/car_controller')
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URI)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static(__dirname + '/public'))

app.use(morgan('dev'))

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})

// routes
app.get('/', (req, res) => {
  res.sendFile('index.html')
})

app.post('/api/car', carCtrl.newCar)
app.get('/api/car', carCtrl.getCar)
app.put('/api/car/:id', carCtrl.updateCar)
app.delete('/api/car/:id', carCtrl.deleteCar)
app.get('/api/car/:id', carCtrl.showCar)
