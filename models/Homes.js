// El modelo trae los datos de la base de datos
// No se encarga de validar dstos, ni resolver promesas.
// PASO 1. Nesecito traer la fconfirguración del entorno de knex y los detalles de la conexión a la base de datos.
const knex = require('../config')

// PASO 2. Crear una función que me permita insertar un registro en la tabla homes.
// necesito que me mande la información por el body es decir cuando yo mande mi petición a mi api
// para crear un nuevo Home necesito que me pase la información de ese home normalmente eso viene en el body de mi petición.
const create = (body) => {
  return knex
    //
    .insert(body) // ¿Que datos voy a insertar? y mete esos datos en...
    .into('homes') // ...¿En que tabla? - homes
    // Que quiero que me regrese y en que orden
    .returning(['house_id', 'title', 'description', 'guest', 'address', 'rental_price', 'fk_user', 'active', 'created_at'])
}
module.exports = {
  create
}
