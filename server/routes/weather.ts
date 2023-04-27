import express from 'express'
import { getWeather, updateWeather } from '../db/db'

const router = express.Router()

router.get('/', (req, res) => {
  getWeather()
    .then((weather) => res.json(weather))
    .catch((err) => console.log(err.message))
})

router.patch('/', (req, res) => {
  updateWeather(req.body)
    .then((updatedWeather) => res.json(updatedWeather))
    .catch((err) => console.log(err.message))
})

export default router
