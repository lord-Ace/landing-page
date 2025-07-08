import React from 'react'
import '../Styles/lang.css'

const Lang = ()=>{
  return(
    <div id='lang' className='container'>
      <img src='/icon.png'></img>
      <span id='en'>EN</span>
      <a href=''>&#9660;</a> 
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