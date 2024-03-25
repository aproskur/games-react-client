'use client'
import React from 'react'


const GameCardsContainer = function GameCardsContainer({children, ...props}) {
  return (
    <div className="cards-container" style = { props.style }>{children}</div>
  )
};


export default GameCardsContainer

//copied from pinguins. TODO Revise