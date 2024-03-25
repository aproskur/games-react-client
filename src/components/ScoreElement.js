import React from 'react'

export default function ScoreElement({children, ...props}) {
    console.log(typeof(props.id))

    return (
        <li key={props.id} className="score" style={props.style}>
            {props.text}
            {children}
        </li>
    )
}
