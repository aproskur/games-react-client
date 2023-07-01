import React from 'react'

export default function TopPanel ({children, ...props}) {
  return (
    <ul style={props.style}>{children}</ul>
  )
}
