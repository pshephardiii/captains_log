require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const jsxEngine = require('jsx-view-engine')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const Log = require('./models/logs')
const controllers = require('./controllers/logs')
const PORT = process.env.PORT || 3001

const app = express()

app.use(express.urlencoded({  extended: true  })) 
app.use(methodOverride('_method'))
app.use(controllers)
app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())

mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', () => {
  console.log('connected to mongodb')
})

app.listen(PORT, () => {
  console.log(`Port at ${PORT} is working`)
})

module.exports = Log