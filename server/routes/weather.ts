import express from 'express'
import { getWeather } from '../db/db'

const router = express.Router()

router.get('/', (req, res) => {
  getWeather()
    .then((weather) => res.json(weather))
    .catch((err) => console.log(err.message))
})

export default router
