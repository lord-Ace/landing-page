import React from 'react'
import '../Styles/top.css'
import Lang from './Lang.jsx'

// header section
const Header =({siteTitle})=>{
  const pages = ['Home', 'About us', 'Services', 'News']
  const pagee = pages.map((page)=><a>{page}</a>)
  return(
  <header className='container' id='header'>
    <section id='first'>
    <h1 id='siteTitle'>{siteTitle}</h1>
    </section>
    <section className='container head second'>
      {pagee}
      <button id='contact-us' className='button container'>
        Contact us
        <img src="public/arrow-right-circle.png" alt="" />
      </button>
      <Lang/>
    </section>
  </header>
  )
}

// Heroes section
const Heroes = ()=>{
  return(
    <section id='heroes' className='container'>
    <img id='woman' src='public/woman.png'></img>
    <div id='write'>
      <h2>Your <span id='health'>Health</span>, Our <span id='priority'>Priority</span></h2>
      <p>Experience personalized, reliable, and compassionate care from trusted medical professionals dedicated to your well-being</p>
      <button id='book' className='button container'>
        Book an Appointment
        </button>
    </div>
    </section>
    )
}

// milestone
const Milestones = ()=>{
  const values = ['10+', '90%', '2000+', '20+']
  const words = ['years of Experience', 'Patient satisfaction rating', 'Patients served annually', 'Healthcare providers on staff']
  const milestone = values.map((value)=><div className='milestone' >
    <h2 className='value' >{value}</h2>
    <p>{words[values.indexOf(value)]}</p>
  </div>)
  return(
    <section id='milestones' className='container'>
      {milestone}
    </section>
    )
}

function Top () {
 return (
   <>
    <Header siteTitle='CareNest'/>
    <Heroes/>
    <Milestones/>
  </>
  )
}

export default Top