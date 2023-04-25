import React, { useState } from 'react'
import '../styles/tooltip.css'

export default function Tooltip({ children, text, bottomStyle, leftStyle }) {
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
        {text}
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
