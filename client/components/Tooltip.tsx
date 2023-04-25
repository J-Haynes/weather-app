import React, { useState } from 'react'
import '../styles/tooltip.css'

export default function Tooltip({ children, text, ...rest }) {
  const [show, setShow] = useState(false)

  return (
    <div>
      <div className="tooltip" style={show ? { visibility: 'visible' } : {}}>
        {text}
        <span className="tooltip-arrow" />
      </div>
      <div
        {...rest}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {children}
      </div>
    </div>
  )
}
