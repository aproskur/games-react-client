import React, { memo } from 'react'


const CardsContainer = function CardsContainer({children, ...props}) {
  return (
    <div className="cards-container" style = { props.style }>{children}</div>
  )
};


export default CardsContainer