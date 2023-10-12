// Archivo encargado de las rutas de Home.
// Los controladores tienen la logica de negocio es decir lo que hace mi aplicacion.

const createHome = (req, res) => { // cuando hacemos una petición tiene un request y response (request es lo que contine mi petición y response es lo que regresa.)
  // Aqui yo deberia crear mi home.
  res.send({ message: 'Home created (FAKE)' })
}
// exportar en el backend queremos exportar la función createHome.responde que creo un home.
module.exports = {
  createHome
}
// todo lo anterior seria mi home Controller // simplmente va a responder que creo un home.
// ya que tengo listo mi controlador necesito una vista que sea capas de llamar a este controlador atravez de una ruta. ya que los archivos que
// esten en routes van a ser las vistas de este controlador,
