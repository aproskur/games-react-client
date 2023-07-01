import React from 'react'

export default function Footer({children, ...props}) {
    return (
        <div style={props.style}>
            {children}
        </div>
    )
}
