/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
// Aqui colocaremos toda la logica de creación de tablas, columnas, cambios de nombre ETC.
exports.up = function (knex) { // PARTE 1 EXPORTS.UP
  return knex.schema.hasTable('homes').then(function (exists) { // revisa la base de datos de homes
    if (!exists) { // y si no existe la crea.Con un create table.
      return knex.schema.createTable('homes', function (table) {
        table.increments('hose_id').primary() // En knex usamos increments en lugar de serial como tipo de dato.
        table.string('title').notNullable() // No puede quedar nulo (not null)
        table.text('description')
        table.integer('guests')
        table.text('address')
        table.decimal('rental_price', 12, 2) // cuantos caracteres de precición pero al final dame 2.
        table.boolean('active').defaultTo(true) // campo de tipo boolean para realizar borrado logico
        table.timestamp('created_at').defaultTo(knex.fn.now()) // defaulTo especifico un valor por defecto, knex.fn.now()me devuelve la fecha/hora actual.
      })
    }
  })
}
// GUIA PARA EL USO DE KNEX.

/* ** CREAR UNA MIGRACIÓN **.

    knex.migrate:make nombre_de_la_migración

        ** EJECUTAR LAS MIGRACIONES SOBRE EXPORTS.UP() **
-> 1.-Al ejecutar una migracion sobre exports.up () estamos creando o modificando la tabla de la base de datos
-> 2.-Ejecutar la ultima migración (up): knex migrate:latest
-> 3.-Ejecutar todas las migraciones (up): knex migrate:up
-> 4.-Ejecutar una migracion especifica (up): knex migrate:up nombre_de_la_migracion.js

        ** EJECUTAR LAS MIGRACIONES SOBRE EXPORTS.DOWN() **

-> 1.-Al ejecutar una migracion sobre export down estamos eliminando modificando la tabla de la base de datos al que le hicimos cambios en exports.up
-> 2.-Deshacer la ultima migracion (down) knex migrate:rollback latest
-> 3.-Deshacer todas las migraciones (down): knex migrate:rollback
-> 4.-Deshacer una migracion especifica (down): knex migrate:down nombre de la migracion.js
*/
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) { // PARTE 2 EXPORTS.DOWN como hacer rollback de la parte 1.
  return knex.schema.hasTable('homes').then(function (exists) { // preguntamos si existe la tabla de datos
    if (exists) { // aqui si extiste la tabla.
      return knex.schema.dropTable('homes') // dropTable Borra la tabla -> 'homes'
    }
  })
}
