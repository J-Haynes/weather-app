/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('weather').del()
  await knex('weather').insert([
    {
      id: 1,
      name: 'Gisborne',
      temp: 21,
      condition: 'Sunny',
      wind_speed: 2,
      wind_deg: 90,
      date: 1682543943,
    },
    {
      id: 2,
      name: 'Wellington',
      temp: 21,
      condition: 'Windy',
      wind_speed: 13,
      wind_deg: 270,
      date: 1682543943,
    },
  ])
}
