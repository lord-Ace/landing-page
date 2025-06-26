import React from 'react'

const Card = ({iconBadge, heading, image,  bodytext})=>{
  return(
  <div id='card'>
    <h3>
      <img src="{iconBadge}"></img>
      {heading}
    </h3>
    <img src='{imagw}'></img>
    <p>
      {bodytext}
    </p>
  </div>
  )
}

export default Card