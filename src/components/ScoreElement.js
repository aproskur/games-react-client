import React from 'react'

export default function ScoreElement({children, ...props}) {
    return (
        <li className="score" style={props.style} key={props.id}>
            {props.text}
            {children}
        </li>
    )
}
