import React, { useState } from 'react'
import '../styles/tooltip.css'

export default function Tooltip({
  temp,
  condition,
  windSpeed,
  windDirection,
  children,
  bottomStyle,
  leftStyle,
}) {
  const [show, setShow] = useState(true)

  const styles = show
    ? {
        visibility: 'visible',
        bottom: Number(bottomStyle),
        left: Number(leftStyle),
      }
    : {
        bottom: bottomStyle,
        left: leftStyle,
      }

  return (
    <>
      {/* <div className="tooltip" style={show ? { visibility: 'visible' } : {}}> */}
      <div className="tooltip" style={styles}>
        <p>Temperature: {temp}°C</p>
        <p>Condition: {condition}</p>
        <p>Wind: {windSpeed}km/h </p>
        <img
          className="wind-arrow"
          src="./images/arrow.png"
          alt="wind speed direction"
          style={{ transform: `rotate(${windDirection - 180}deg)` }}
        ></img>
        <span className="tooltip-arrow" />
      </div>
      <div
        // {...rest}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {children}
      </div>
    </>
  )
}
