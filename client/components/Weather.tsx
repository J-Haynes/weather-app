import Tooltip from './Tooltip'
import React from 'react'

export default function Weather({
  city,
  leftStyle,
  bottomStyle,
  temp,
  condition,
  windSpeed,
  windDirection,
}) {
  const divName = `${city}-div`
  const svgClass = `${city}-svg`

  const divStyle = {
    bottom: Number(bottomStyle),
    left: Number(leftStyle),
  }

  return (
    <div className={divName} style={divStyle}>
      <Tooltip
        temp={Math.trunc(temp)}
        condition={condition}
        windSpeed={windSpeed}
        windDirection={windDirection}
        bottomStyle={bottomStyle}
        leftStyle={leftStyle}
      >
        <svg
          className={svgClass}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
        </svg>
      </Tooltip>
    </div>
  )
}
