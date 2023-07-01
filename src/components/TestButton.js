import React from 'react'



export default function TestButton({children, ...props}) {


    return (
          <button  style={props.style}>{children}</button>
   
    )
}
