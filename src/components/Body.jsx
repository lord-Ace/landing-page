import React from 'react'
import Card from './Card.jsx'

const SectionIntro = ({introCaption, introTitle})=>{
  return(
  <>
  <span>{introCaption}</span>
  <h2>{introTitle}</h2>
  </>
  )
}

const chooseUs = ['Expert team', 'Modern Equipment', 'Dedicated Care','Affordable Costs']
const chosen = chooseUs.map((choose)=><h3>{choose}</h3>)

function Body (){
  return(
    <>
    // first section
    <section className='container'>
      <div>
        <SectionIntro introTitle='Professional Doctor With Years of Experience' introCaption='Who We are'/>
        <p>we are a team of dedicated medical practitioners commited to delivering personalised care and improving lives with compassion and expertise.</p>
        <button>Learn more</button>
      </div>
      <img className='featured'></img>
    </section>
    
    // second Section
    <section>
      <SectionIntro introTitle='Comprehensive Medical Services' introCaption='services'/>
      <Card/>
      <button>All Services</button>
    </section>
    
  // Third section
    <section>
      <SectionIntro introCaption='why choose us' introTitle='Redefining Care, One Patient at a Time'/>
      <div>
       {chosen}
      </div>
      <video></video>
    </section>
    </>
    )
}

export default Body