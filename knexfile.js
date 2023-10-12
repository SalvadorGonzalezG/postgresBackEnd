// para que cargue mis variables de entorno, una vez configuradas mis variables de entorno
// comenzamos a modificarlas en development
require('dotenv').config()
// Update with your config settings.
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host: process.env.DB_HOST_DEV, // ip de mi propio equipo ->BUSCALO EN MI COMPUTADORA.
      database: process.env.DB_NAME_DEV, // NOMBRE DE LA BASE DE DATOS DONDE NOS VAMOS A CONECTAR.
      user: process.env.DB_USER_DEV, // *** usuario de postgres por defecto el usuario es postgres
      password: process.env.DB_PASS_DEV // *** contraseña que se coloco en postgres
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }, // primer paso configuracion del directorio de seeds.
    seeds: { // aqui se van a guardar mis semillas
      directory: './data/seeds'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

}
