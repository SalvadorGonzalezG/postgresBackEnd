/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable('homes').then(function (exists) {
    if (exists) {
      return knex.schema.table('homes', function (table) {
        table.integer('fk_user') // crea un nuevo campo que se va a llamar fk_user.
          .unsigned() // que no sea un valor negativo poraue es un id autoincremetal.
          .references('users.user_id') // llave foranea ya que hace referencia al user_id de la tabla user.
      })
    }
  })
}
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.hasTable('homes').then(function (exists) {
    if (exists) { // si la tabla existe
      return knex.schema.table('homes', function (table) { // regresa la tabla homs
        table.dropColumn('fk_user') // borro la columna fc_user
      })
    }
  })
}
