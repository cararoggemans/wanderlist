import React from 'react'
import ImgGlobe from "../assets/img/globe-start.jpg"
function Card() {
  return (
    <div className='card__fullimg '>
    <img className='h-screen rounded-2xl' src={ImgGlobe} alt='Globe start'/>
    </div>
  )
}

export default Card
