import React, { useEffect, useState } from 'react'
import Tooltip from './Tooltip'
import { getWeather } from '../apis/clientApi'

import { WeatherModel, citys } from '../../models/WeatherModels'
import Weather from './Weather'

export default function Map() {
  // const [weather, setWeather] = useState({})

  const [fetchedCount, setFetchedCount] = useState(0)
  // const [gisborneWeather, setGisborneWeather] = useState({})
  // const [gotGisborneWeather, setGotGisborneWeather] = useState(false)

  const citys = [
    {
      name: 'gisborne',
      leftStyle: 500,
      bottomStyle: 500,
    },
    {
      name: 'wellington',
      leftStyle: 100,
      bottomStyle: 100,
    },
    // {
    //   name: 'auckland',
    //   leftStyle: 100,
    //   bottomStyle: 100,
    // },
    // {
    //   name: 'napier',
    //   leftStyle: 100,
    //   bottomStyle: 100,
    // },
    // {
    //   name: 'kaitaia',
    //   leftStyle: 100,
    //   bottomStyle: 100,
    // },
    // {
    //   name: 'taranaki',
    //   leftStyle: 100,
    //   bottomStyle: 100,
    // },
    // {
    //   name: 'taupo',
    //   leftStyle: 100,
    //   bottomStyle: 100,
    // },
    // {
    //   name: 'hamilton',
    //   leftStyle: 100,
    //   bottomStyle: 100,
    // },
  ]

  // const clickHandler = () => {
  //   for (let i = 0; i < citys.length; i++) {
  //     getWeather(citys[i].name)
  //       .then((res) => {
  //         setWeather((weather[citys[i].name] = res))
  //         console.log(weather)
  //       })
  //       .catch((err) => console.log(err.message))
  //   }
  // }

  const weather = [
    {
      name: 'Gisborne',
      condition: 'Sunny',
      temp: 21,
      windDirection: 73,
      windSpeed: 2,
    },
    {
      name: 'Wellington',
      condition: 'Windy',
      temp: 17,
      windDirection: 73,
      windSpeed: 2,
    },
  ]

  return (
    <>
      <div className="map-div">
        <img src="./images/nz.png" className="nz-img" alt="nz" />
        {citys.map((city, i) => {
          return (
            <Weather
              key={city.name}
              city={city.name}
              leftStyle={city.leftStyle}
              bottomStyle={city.bottomStyle}
              temp={weather[i].temp}
              condition={weather[i].condition}
              windSpeed={weather[i].windSpeed}
              windDirection={weather[i].windDirection}
            />
          )
        })}
      </div>
      {/* <button onClick={clickHandler}>click</button> */}
    </>
  )
}

// ;<Tooltip
//   temp={Math.trunc(weather.temp)}
//   condition={weather.condition}
//   windSpeed={weather.windSpeed}
//   windDirection={weather.windDirection}
//   bottomStyle="553"
//   leftStyle="543"
// >
//   <svg
//     className="Gisborne"
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//   >
//     <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
//   </svg>
// </Tooltip>
