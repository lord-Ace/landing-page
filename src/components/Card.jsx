import React from 'react'

const Card = ({heading, image})=>{
  return(
  <div className='card container'>
    <h3 className='container'>
      <img src='public/crest.png' className='crest'></img>
      {heading}
    </h3>
    <img src={image} className='image'></img>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum accusantium veniam debitis consequatur eos in 
    </p>
  </div>
  )
}

export default Card