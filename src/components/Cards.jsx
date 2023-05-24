import React from 'react'
import'./Cards.css'

export const Cards = ({src}) => {
  return (
    <div className='cards'>
              <img src={src} alt="" />

        <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
        <h4>$16,471 <span>| 2088 sqft</span></h4>
    </div>
  )
}
