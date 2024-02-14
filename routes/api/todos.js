const express = require('express')
const router = express.Router()
const todoCtrl = require('../../controllers/api/todos')

// Index 
router.get('/', stockCtrl.index, stockCtrl.jsonStocks)

// Create
router.post('/', stockCtrl.create, stockCtrl.jsonStock)
// Show
router.get('/:id', stockCtrl.show, stockCtrl.jsonStock)

module.exports = router