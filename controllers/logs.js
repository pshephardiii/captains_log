const express = require('express')
const router = express.Router()
const Log = require('../models/logs')

// INDEX

router.get('/logs', async (req, res) => {
    try {
      const foundLogs = await Log.find({})
      res.render('logs/Index', {
        logs: foundLogs
      })
    } catch {
      res.status(400).send({ messsage: error.message })
    }
  })
  
  // NEW
  
  router.get('/logs/new', (req, res) => {
    res.render('logs/New')
  })
  
  // DELETE
  
  router.delete('/logs/:id', async (req, res) => {
    try {
      await Log.findOneAndDelete({'_id': req.params.id}).then(() => {
        res.redirect('/logs')
      })
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  })
  
  // UPDATE
  
  router.put('/logs/:id', async (req, res) => {
    if (req.body.shipIsBroken === 'on') {
      req.body.shipIsBroken = true
    } else {
      req.body.shipIsBroken = false
    }
    try {
      await Log.findOneAndUpdate({ '_id': req.params.id }, req.body, { new: true })
        .then(() => {
          res.redirect(`/logs`)
        })
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  })
  
  // CREATE
  
  router.post('/logs', async (req, res) => {
    if (req.body.shipIsBroken === 'on') {
      req.body.shipIsBroken = true
    } else {
      req.body.shipIsBroken = false
    }
    try {
      const createdLog = await Log.create(req.body)
      res.redirect(`/logs/${createdLog._id}`)
    } catch(error){
      res.status(400).send({message: error.message})
    }
  })
  
  // EDIT
  
  router.get('/logs/:id/edit', async (req, res) => {
    try {
      const foundLog = await Log.findOne({'_id': req.params.id})
      res.render('logs/Edit', {
        log: foundLog
      })
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  })
  
  // SHOW
  
  router.get('/logs/:id', async (req, res) => {
    try {
      const foundLog = await Log.findOne({_id: req.params.id})
      res.render('logs/Show', {
        log: foundLog
      })
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  })

  module.exports = router