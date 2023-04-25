import React, { useEffect, useState } from 'react'
import Tooltip from './Tooltip'
import { getWeather } from '../apis/clientApi'

import { WeatherModel } from '../../models/WeatherModel'

export default function Map() {
  const gisborne = 'wellington'

  const [gisborneWeather, setGisborneWeather] = useState({} as WeatherModel)

  useEffect(() => {
    getWeather(gisborne)
      .then((res) => setGisborneWeather(res))
      .catch((err) => console.log(err.message))
  }, [])

  return (
    <>
      <div className="map-div">
        <p className="test">hover</p>

        <img src="./images/nz.png" className="nz-img" alt="nz" />
        <Tooltip
          text={Math.trunc(gisborneWeather.temp)}
          bottomStyle="553"
          leftStyle="543"
        >
          <svg
            className="Gisborne"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
          </svg>
        </Tooltip>
      </div>
    </>
  )
}
