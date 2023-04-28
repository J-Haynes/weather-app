/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('weather', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.integer('temp')
    table.string('condition')
    table.integer('windSpeed')
    table.integer('windDeg')
    table.integer('topStyle')
    table.integer('leftStyle')
    table.date('date')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('weather')
}
