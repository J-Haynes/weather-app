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
      topStyle: 295,
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
      topStyle: 600,
      leftStyle: 323,
      date: 1682543943,
    },
    {
      id: 3,
      name: 'Auckland',
      temp: 4,
      condition: 'Cloudy',
      windSpeed: 73,
      windDeg: 0,
      topStyle: 95,
      leftStyle: 330,
      date: 1682543943,
    },
    {
      id: 4,
      name: 'Hastings',
      temp: 73,
      condition: 'Sunny',
      windSpeed: 4,
      windDeg: 340,
      topStyle: 388,
      leftStyle: 514,
      date: 1682543943,
    },
    {
      id: 5,
      name: 'Kaitaia',
      temp: 27,
      condition: 'Windy',
      windSpeed: 23,
      windDeg: 45,
      topStyle: -98,
      leftStyle: 192,
      date: 1682543943,
    },
    {
      id: 6,
      name: 'Taupo',
      temp: 11,
      condition: 'Sunny',
      windSpeed: 8,
      windDeg: 123,
      topStyle: 296,
      leftStyle: 436,
      date: 1682543943,
    },
    {
      id: 7,
      name: 'Hamilton',
      temp: 6,
      condition: 'Raining',
      windSpeed: 23,
      windDeg: 211,
      topStyle: 190,
      leftStyle: 370,
      date: 1682543943,
    },
  ])
}
