import React, { useState } from 'react'
import '../styles/tooltip.css'

import { capitalise } from './Helpers'

export default function Tooltip({
  temp,
  condition,
  windSpeed,
  windDeg,
  children,
  topStyle,
  leftStyle,
  city,
}) {
  const [show, setShow] = useState(false)

  const styles = show
    ? {
        visibility: 'visible',
        top: Number(topStyle),
        left: Number(leftStyle),
      }
    : {
        top: Number(topStyle),
        left: Number(leftStyle),
      }

  return (
    <>
      {/* <div className="tooltip" style={show ? { visibility: 'visible' } : {}}> */}
      <div className="tooltip" style={styles}>
        <p>{capitalise(city)}</p>
        <p>Temperature: {temp}°C</p>
        <p>Condition: {condition}</p>
        <p>Wind: {windSpeed}km/h </p>
        <img
          className="wind-arrow"
          src="./images/arrow.png"
          alt="wind speed direction"
          style={{ transform: `rotate(${windDeg - 180}deg)` }}
        ></img>
        <span className="tooltip-arrow" />
      </div>
      <div
        className="mouseover-div"
        // {...rest}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {children}
      </div>
    </>
  )
}
