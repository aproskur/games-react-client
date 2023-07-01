import React from 'react'
import { memo } from 'react'

const Label =  memo(function Label({children, ...props}) {
    return (
        <div style={props.style}>
            {props.text}
        </div>
    )
});

export default Label