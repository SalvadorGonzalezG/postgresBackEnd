//
const express = require('express')
const router = express.Router()
// Importamos nuestro controlador nombre de la carpeta y nombre del archivo.
const homeController = require('../controllers/homeController')

// Si la ruta es /homes, entonces ejecuta el controlador homeController.CreateHome
// y creamos nuestra ruta.
// cuando haga un get a este enpoint /homes lo que vas  a hacer es ejecutar homeController
// y de home controler quiero que hagas un create Home que es lo que hicimos en el controlador.
router.post('/homes', homeController.createHome)
router.get('/homes', homeController.findAllHome)
// cuando yo creo algo siempre hacemos un post
// Exporto el router para despues ponerlo en mi servidor.
module.exports = router
