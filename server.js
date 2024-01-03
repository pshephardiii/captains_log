require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const jsxEngine = require('jsx-view-engine')
const methodOverride = require('method-override')
const Logs = require('./models/logs')
const PORT = process.env.PORT || 3001

const app = express()



app.use(express.urlencoded({  extended: true  })) 
app.use(methodOverride('_method'))
app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())

mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', () => {
  console.log('connected to mongodb')
})

// INDEX

app.get('/logs', async (req, res) => {
  try {
    const foundLogs = await Logs.find({})
    res.render('logs/Index', {
      logs: foundLogs
    })
  } catch {
    res.status(400).send({ messsage: error.message })
  }
})

// NEW

// DELETE

// UPDATE

// CREATE

// EDIT

// SHOW

app.listen(PORT, () => {
  console.log(`Port at ${PORT} is working`)
})