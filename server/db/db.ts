import { WeatherModel } from '../../models/WeatherModels'
import config from './knexfile'
import knex from 'knex'

type Environment = 'production' | 'test' | 'development'
const environment = (process.env.NODE_ENV as Environment) || 'development'
const connection = knex(config[environment])

export function getWeather(db = connection) {
  return db('weather').select('*')
}

export function updateWeather(updatedWeather, db = connection) {
  const queries = updatedWeather.map((data) => {
    const { name, ...updatedData } = data
    return db('weather').where('name', name).update(updatedData)
  })
  return Promise.all(queries)
}
