import React, { useState } from 'react'
import { getWeather } from '../apis/clientApi'

import { WeatherModel, citys } from '../../models/WeatherModels'

import Weather from './Weather'

export default function Map() {
  const [weather, setWeather] = useState({} as WeatherModel[])
  const [fetchedWeather, setFetchedWeather] = useState(false)

  // const [gisborneWeather, setGisborneWeather] = useState({})
  // const [gotGisborneWeather, setGotGisborneWeather] = useState(false)

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

  // const clickHandler = () => {
  //   for (let i = 0; i < cityArray.length; i++) {
  //     getWeather(cityArray[i].name)
  //       .then((res) => {
  //         setWeather((weather[i] = res))
  //         console.log('weather array', weather)
  //       })
  //       .catch((err) => console.log(err.message))
  //   }
  //   setFetchedWeather(true)
  // }

  const clickHandler = () => {
    Promise.all(
      cityArray.map((city) => {
        return getWeather(city.name)
      })
    )
      .then((results) => {
        setWeather(results)
        setFetchedWeather(true)
        console.log(weather)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  // const weather = [
  //   {
  //     name: 'Gisborne',
  //     condition: 'Sunny',
  //     temp: 21,
  //     windDirection: 73,
  //     windSpeed: 2,
  //   },
  //   {
  //     name: 'Wellington',
  //     condition: 'Windy',
  //     temp: 17,
  //     windDirection: 73,
  //     windSpeed: 2,
  //   },
  // ]

  return (
    <>
      <div className="button-div">
        <button onClick={clickHandler}>click</button>
      </div>
      <div className="container">
        <div className="map-div">
          <img src="./images/nz.png" className="nz-img" alt="nz" />
        </div>
        <div className="pin-div">
          {cityArray.map((city, i) => {
            return weather.length === cityArray.length ? (
              <Weather
                city={city.name}
                key={city.name}
                leftStyle={city.leftStyle}
                topStyle={city.topStyle}
                condition={weather[i].condition}
                temp={weather[i].temp}
                windSpeed={weather[i].windSpeed}
                windDirection={weather[i].windDirection}
              />
            ) : null
          })}
        </div>
      </div>
    </>
  )
}
