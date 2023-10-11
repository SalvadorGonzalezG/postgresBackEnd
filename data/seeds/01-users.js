/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      user_id: 1,
      name: 'klark',
      last_name: 'kent',
      phone: '55-75-18-11',
      email: 'clarkent@dc.com',
      description: 'superhero',
      password: 'kryptonite'
    },
    {
      user_id: 2,
      name: 'spiderman',
      last_name: 'pan',
      phone: '55-12-18-41',
      email: 'spider@marvel.com',
      description: 'superhuman',
      password: 'jein'
    }
  ])
}
