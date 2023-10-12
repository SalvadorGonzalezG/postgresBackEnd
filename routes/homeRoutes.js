//
const express = require('express')
const router = express.Router()
// Importamos nuestro controlador nombre de la carpeta y nombre del archivo.
const homeController = require('../controllers/homeController')

// Si la ruta es /homes, entonces ejecuta el controlador homeController.CreateHome
// y creamos nuestra ruta.
// cuando haga un get a este enpoint /homes lo que vas  a hacer es ejecutar homeController
// y de home controler quiero que hagas un create Home que es lo que hicimos en el controlador.
router.get('/homes', homeController.createHome)

// Exporto el router para despues ponerlo en mi servidor.
module.exports = router
