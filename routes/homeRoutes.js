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
router.get('/homes', homeController.findAllHome) // hacemos el cambio a get para mandar llamar y mandamos llamar al findAllHomes
router.get('/homes/:hoseId', homeController.findOneHome)
router.patch('/homes/:hoseId', homeController.updateOneHome) // metodo patch
router.delete('/homes/:hoseId', homeController.softDeleteOneHome)
router.delete('/homes/destroy/:hoseId', homeController.destroyOneHome) // para borrarla de la base de datos ocupamos /destroy/

// cuando yo creo algo siempre hacemos un post
// Exporto el router para despues ponerlo en mi servidor.
module.exports = router
