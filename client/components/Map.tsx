import React, { useEffect, useState } from 'react'
import { getWeather, getWeatherApi, updateWeatherApi } from '../apis/clientApi'

import { WeatherModel } from '../../models/WeatherModels'

import Weather from './Weather'

export default function Map() {
  const [weather, setWeather] = useState([] as WeatherModel[])

  const [fetchedWeather, setFetchedWeather] = useState(false)

  const cityArray = [
    {
      name: 'gisborne',
      topStyle: 310,
      leftStyle: 615,
    },
    {
      name: 'wellington',
      topStyle: 615,
      leftStyle: 323,
    },
    {
      name: 'auckland',
      topStyle: 110,
      leftStyle: 330,
    },
    {
      name: 'napier',
      topStyle: 403,
      leftStyle: 514,
    },
    {
      name: 'kaitaia',
      topStyle: -83,
      leftStyle: 192,
    },
    {
      name: 'taupo',
      topStyle: 311,
      leftStyle: 436,
    },
    {
      name: 'hamilton',
      topStyle: 205,
      leftStyle: 370,
    },
  ]

  const clickHandler1 = () => {
    Promise.all(
      weather.map((city) => {
        return getWeather(city.name)
      })
    )
      .then((results) => {
        console.log(results)
        updateWeatherApi(results)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  // const clickHandler = () => {
  //   Promise.all(
  //     cityArray.map((city) => {
  //       return getWeather(city.name)
  //     })
  //   )
  //     .then((results) => {
  //       setWeather(results)
  //       setFetchedWeather(true)
  //       console.log(weather)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // }

  useEffect(() => {
    if (weather.length == 0) {
      getWeatherApi()
        .then((res) => setWeather(res))
        .catch((err) => console.log(err.message))
    }
  }, [weather])

  return (
    <>
      <div className="button-div">
        <button onClick={clickHandler1}>Get the weather</button>
      </div>
      <div className="container">
        <div className="map-div">
          <img src="./images/nz.png" className="nz-img" alt="nz" />
        </div>
        <div className="pin-div">
          {cityArray.map((city, i) => {
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
