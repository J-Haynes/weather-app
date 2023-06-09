import request from 'superagent'
import { WeatherModel } from '../../models/WeatherModels'

const kanyeUrl = 'https://api.kanye.rest/'
const weatherUrl = '/weather'

export function fetchKanyeApi() {
  return request.get(kanyeUrl).then((res) => res.body.quote)
}

export function getWeather(city: string) {
  return request
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=86451f9c43ef7bea67d144c1f8f4a53f`
    )
    .then((res) => {
      return {
        name: res.body.name,
        temp: res.body.main.temp - 273,
        condition: res.body.weather[0].main,
        windSpeed: res.body.wind.speed,
        windDeg: res.body.wind.deg,
        date: Date.now(),
      }
    })
    .catch((err) => {
      console.log(err.message)
      return err.message
    })
}

export function getWeatherApi() {
  return request.get(weatherUrl).then((res) => res.body)
}

export function updateWeatherApi(updatedWeather) {
  return request
    .patch(weatherUrl)
    .send(updatedWeather)
    .then((res) => res.body)
}
