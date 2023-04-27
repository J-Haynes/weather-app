import express from 'express'
import { getWeather } from '../db/db'
import { updateWeatherApi } from '../../client/apis/clientApi'

const router = express.Router()

router.get('/', (req, res) => {
  getWeather()
    .then((weather) => res.json(weather))
    .catch((err) => console.log(err.message))
})

router.post('/', (req, res) => {
  updateWeather()
    .then((updatedWeather) => res.json(updatedWeather))
    .catch((err) => console.log(err.message))
})

export default router
