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
    .returning(['hose_id', 'title', 'description', 'guests', 'address', 'rental_price', 'fk_user', 'active', 'created_at'])
}
// Crear una funcion para buscar para poder ver la lista de casas.
// Cuando mandamos pedir todos los datos de una api no se necesita mandar en la función ningun parametro

const findAll = () => {
  return knex
    .select('*')
    .from('homes')
    .where('active', true) // traemos solo los campos a los que no hayamos hecho soft delete.
}
const findOne = (hoseId) => {
  return knex
    .select(['hose_id', 'title', 'description', 'guests', 'address', 'rental_price', 'fk_user', 'active', 'created_at'])
    .from('homes')
    .where({ hose_id: hoseId })
    .where('active', true)
}
// Actualizar casas para esto es necesario saber 2 cosas cual es el houseId y el  body, la data
// Esto actualizara en el body la información que le mandes al hoseID
const update = (hoseId, body) => {
  return knex
    .update(body) // hacemos el update de body. hacer el update con la información que le pase.
    .from('homes') // traemos los datos de la tabla homes
    .where({ hose_id: hoseId }) // donde el hose_id sea igual a hoseId es decir el que le pase como parametro
    .returning(['hose_id', 'title', 'description', 'guests', 'address', 'rental_price', 'fk_user', 'active', 'created_at'])
}
// Elimina un registro REGISTRO real de la base de tados.documentación de knex
const destroy = (hoseId) => {
  return knex
    .del() // delete
    .from('homes')
    .whereWrapped({ hose_id: hoseId })
}
// Borrado logico solo cambio Active de true a false es decir no lo quita de la base de datos simplemente no lo muestro.
const sofDelete = (hoseId) => { // necesitamos cual es el id que bamos a borrar
  return knex
    .update({ active: false }) // cambiar un valor de true a homes
    .from('homes') // de que tabla
    .where({ hose_id: hoseId }) // donde el hoseId sea igual al que yo mande
}
module.exports = {
  create,
  findAll,
  findOne,
  update,
  destroy,
  sofDelete
}
