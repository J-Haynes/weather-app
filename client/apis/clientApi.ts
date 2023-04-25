import request from 'superagent'

const kanyeUrl = 'https://api.kanye.rest/'

export function fetchKanyeApi() {
  return request.get(kanyeUrl).then((res) => res.body.quote)
}

export function getWeather(city: string) {
  return request
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4b7a145139db79b7509628f9c48b4b73`
    )
    .then((res) => {
      return {
        name: res.body.name,
        temp: res.body.main.temp - 273,
        condition: res.body.weather[0].main,
        windSpeed: res.body.wind.speed,
        windDirection: res.body.wind.deg,
      }
    })
    .catch((err) => {
      console.log(err.message)
      return err.message
    })
}
