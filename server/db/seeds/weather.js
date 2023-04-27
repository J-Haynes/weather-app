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
      windSpeed: 2,
      windDeg: 90,
      topStyle: 310,
      leftStyle: 615,
      date: 1682543943,
    },
    {
      id: 2,
      name: 'Wellington',
      temp: 21,
      condition: 'Windy',
      windSpeed: 13,
      windDeg: 270,
      topStyle: 615,
      leftStyle: 323,
      date: 1682543943,
    },
  ])
}
