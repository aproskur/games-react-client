import React from 'react'

export default function GameScreen({children, ...props}) {
    return (
        <div style={props.style} className = "game-screen">
            {children}
        </div>
    )
}
