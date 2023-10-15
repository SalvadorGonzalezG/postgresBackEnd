// Archivo encargado de las rutas de Home.
// Los controladores tienen la logica de negocio es decir lo que hace mi aplicacion.
const ModelHomes = require('../models/Homes')

const createHome = (req, res) => { // cuando hacemos una petición tiene un request y response (request es lo que contine mi petición y response es lo que regresa.)
  // Aqui yo deberia crear mi home.
  // res.send({ message: 'Home created (FAKE)' })
  ModelHomes.create(req.body)
    .then((result) => {
      res.status(201).send({ message: 'Home created', data: result })
    })
    .catch((error) => { // en caso de haber un error mandar un 400 y el msj de error
      res.status(400).send({ message: 'error Created home', error })
    })
}
// exportar en el backend queremos exportar la función createHome.responde que creo un home.
module.exports = {
  createHome
}
// todo lo anterior seria mi home Controller // simplmente va a responder que creo un home.
// ya que tengo listo mi controlador necesito una vista que sea capas de llamar a este controlador atravez de una ruta. ya que los archivos que
// esten en routes van a ser las vistas de este controlador,
