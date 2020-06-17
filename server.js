const express = require('express')
const app = express()
const mongoose = require('mongoose')

//use .json()
app.use(express.json());

// public folder is static and public
app.use(express.static('public'))

//controller
const catController = require('./controllers/litterBoxRoute.js')
app.use('/litterbox', catController)

// connect mongoose to database litterbox
mongoose.connect('mongodb://localhost:27017/litterbox',
{
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000, (req, res) => {
  console.log('listening..');
})
