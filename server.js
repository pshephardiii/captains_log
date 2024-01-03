require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const jsxEngine = require('jsx-view-engine')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const Log = require('./models/logs')
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

app.get('/logs/new', (req, res) => {
  res.render('logs/New')
})

// DELETE

// UPDATE

// CREATE

// app.post('/logs', async (req, res) => {
//   if (req.body.shipIsBroken === 'on') {
//     req.body.shipIsBroken = true
//   } else {
//     req.body.shipIsBroken = false
//   }
//   try {
//     const createdLog = await Log.create(req.body)
//     res.redirect(`/logs/${createdLog._id}`)
//   } catch(error){
//     res.status(400).send({message: error.message})
//   }
// })

app.post('/logs', async (req, res) => {
  try {
    res.send(req.body)
  } catch(error){
    res.status(400).send({message: error.message})
  }
})

// EDIT

// SHOW

app.listen(PORT, () => {
  console.log(`Port at ${PORT} is working`)
})