const express = require('express')
const router = express.Router()
const homeController = require('../controllers/homeController')

// Si la ruta es /homes, entonces ejecuta el controlador homeController.CreateHome
router.get('/homes', homeController.createHome)

module.exports = router
