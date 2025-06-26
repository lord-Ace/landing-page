import React from 'react'
import Card from './Card.jsx'

const SectionIntro = ({introCaption, introTitle})=>{
  <>
  <span>{introCaption}</span>
  <h2>{introTitle}</h2>
  </>
}

const chooseUs = ['Expert team', 'Modern Equipment', 'Dedicated Care','Affordable Costs']
const chosen = chooseUs.map((choose)=><h3>{choose}</h3>)

function Body (){
  return(
    <main>
    // first section
    <section className='container'>
      <div>
        <SectionIntro introTitle='' introCaption=''/>
        <p></p>
      </div>
      <img></img>
    </section>
    
    // second Section
    <section>
      <SectionIntro introCaption='' introCaption=''/>
      <Card/>
      <button>All Services</button>
    </section>
    
    // Third section
    <section>
      <div>
       {chosen}
      </div>
      <video></video>
    </section>
    </main>
    )
}

export default Body