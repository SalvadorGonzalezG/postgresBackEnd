// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host: '127.0.0.1', // ip de mi propio equipo ->BUSCALO EN MI COMPUTADORA.
      database: 'knexapi', // NOMBRE DE LA BASE DE DATOS DONDE NOS VAMOS A CONECTAR.
      user: 'postgres', // *** usuario de postgres por defecto el usuario es postgres
      password: '587Cirsa' // *** contraseña que se coloco en postgres
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
