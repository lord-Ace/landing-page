import React from 'react'
import '../Styles/lang.css'

const Lang = ()=>{
  return(
    <div id='lang' className='container'>
      <img src='public/icon.png'></img>
      <span id='en'>EN</span>
      <a href='#fr'>&#9660;</a> 
      <div className='child'>
        <p className="lang">EN</p>
        <p className="lang">FR</p>
        <p className="lang">NG</p>
        <p className="lang">LI</p>
      </div>
    </div>
    )
}

export default Lang