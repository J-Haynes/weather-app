import React, { useEffect, useState } from 'react'
import { getWeather, getWeatherApi, updateWeatherApi } from '../apis/clientApi'

import { WeatherModel } from '../../models/WeatherModels'

import { returnDate, formatDate } from './Helpers'

import Weather from './Weather'

export default function Map() {
  const [weather, setWeather] = useState([] as WeatherModel[])
  const [fetchDate, setFetchDate] = useState('')

  const clickHandler = () => {
    Promise.all(
      weather.map((city) => {
        return getWeather(city.name)
      })
    )
      .then((results) => {
        console.log(results)
        updateWeatherApi(results)
        setFetchDate(returnDate())
      })
      .then(() => {
        return getWeatherApi()
      })
      .then((res) => setWeather(res))
      .catch((err) => {
        console.log(err.message)
      })
  }

  useEffect(() => {
    if (weather.length == 0) {
      getWeatherApi()
        .then((res) => {
          setWeather(res)
          const theDate = String(new Date(res[0].date))
          setFetchDate(formatDate(theDate))
        })
        .catch((err) => console.log(err.message))
    }
  }, [weather])

  return (
    <>
      <div className="button-div">
        <button onClick={clickHandler}>Get the weather</button>
        {weather[0] && <p>last fetched: {fetchDate}</p>}
      </div>
      <div className="container">
        <div className="map-div">
          <img src="./images/nz.png" className="nz-img" alt="nz" />
        </div>
        <div className="pin-div">
          {weather.map((city, i) => {
            return weather[i] ? (
              <Weather
                city={city.name}
                key={city.name}
                leftStyle={city.leftStyle}
                topStyle={city.topStyle}
                condition={weather[i].condition}
                temp={weather[i].temp}
                windSpeed={weather[i].windSpeed}
                windDeg={weather[i].windDeg}
              />
            ) : null
          })}
        </div>
      </div>
    </>
  )
}
