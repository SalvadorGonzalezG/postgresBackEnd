// Dependiendo la variable de entorno del sistema se va a usar la configuración adecuada de base de datos.

// PASO 1. Tomar la configuracion del entorno de node, y si existe, usarla. Si no usar la configuración de desarrollo.

const env = process.env.NODE_ENV || 'development'
// env = 'development'
const knexfile = require('./knexfile')
const knex = require('knex')

// Mandar llamar la configuración correcta de knexfile
module.exports = knex(knexfile[env])
