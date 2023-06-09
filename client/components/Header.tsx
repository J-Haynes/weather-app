import React from 'react'

export default function Header() {
  return (
    <div className="nav">
      <div className="title-div">
        <p>weather app</p>
      </div>
      <div className="nav-div">
        <ul>
          <a
            href="https://github.com/J-Haynes/weather-app"
            target="_blank"
            rel="noreferrer"
          >
            <li>source</li>
          </a>
        </ul>
      </div>
    </div>
  )
}
