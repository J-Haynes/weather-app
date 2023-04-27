import Tooltip from './Tooltip'
import React from 'react'

export default function Weather({
  city,
  leftStyle,
  topStyle,
  temp,
  condition,
  windSpeed,
  windDeg,
}) {
  const divName = `${city}-div`
  const svgClass = `${city}-svg`

  const divStyle = {
    top: Number(topStyle),
    left: Number(leftStyle),
  }

  return (
    <>
      <div className={divName} style={divStyle}>
        <Tooltip
          city={city}
          temp={Math.round(temp * 10) / 10}
          condition={condition}
          windSpeed={windSpeed}
          windDeg={windDeg}
          leftStyle={-71}
          topStyle={-8}
        >
          <svg
            style={divStyle}
            className={svgClass}
            fill="red"
            stroke="black"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
          </svg>
        </Tooltip>
      </div>
    </>
  )
}
