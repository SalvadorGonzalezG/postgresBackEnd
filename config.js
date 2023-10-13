// Dependiendo la variable de entorno del sistema se va a usar la configuración adecuada de base de datos.

// PASO 1. Tomar la configuracion del entorno de node, y si existe, usarla. Si no usar la configuración de desarrollo.
// Si process.env.NODE_ENV es falso por que no existe el valor por defecto de env va a a ser development.
const env = process.env.NODE_ENV || 'development'
// env = 'development'
// importamos el knexfile (cargando el archivo de configuración)
const knexfile = require('./knexfile')
// Y mandamos llamar a knex
const knex = require('knex')

// Mandar llamar la configuración correcta de knexfile
// voy a usar knex, knex usa el archivo de conf (knexfile y de ese archivo solamnete lee [env])
module.exports = knex(knexfile[env])
