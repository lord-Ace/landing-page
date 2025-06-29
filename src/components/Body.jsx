import React from 'react'
import Card from './Card.jsx'
import '../Styles/main.css'

const SectionIntro = ({introCaption, introTitle})=>{
  return(
  <>
  <span className='introcaption'>{introCaption}</span>
  <h2 className='introtitle'>{introTitle}</h2>
  </>
  )
}

const chooseUs = ['Expert team', 'Modern Equipment', 'Dedicated Care','Affordable Costs']
const chosen = chooseUs.map((choose)=><div className='container us'>
<img src="public/crest.png" className='crest' />
<div>
<h3>{choose}</h3>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, doloremque. Praesentium officia minus recusandae inventore </p>
</div>
</div>)

function Body (){
  return(
    <main>
    {/* // first section */}
    <section className='container first pad'>
      <div>
        <SectionIntro introTitle='Professional Doctor With Years of Experience' introCaption='Who We are'/>
        <p>we are a team of dedicated medical practitioners commited to delivering personalised care and improving lives with compassion and expertise.</p>
        <button className='button'>Learn more</button>
      </div>
      <img className='featured' src='public/care.png'></img>
    </section>
    
    {/* // second Section */}
    <section className='container'>
      <SectionIntro introTitle='Comprehensive Medical Services' introCaption='services'/>
      <div className="container second">
      <Card heading='General Check-Ups' image='public/card1.png'/>
      <Card heading='Specialized Services' image='public/card2.png'/>
      <Card heading='Laboratory Services' image='public/card3.png'/>
      {/* <Card heading='General Check-Ups'/> */}
      </div>
      
      <button className='button'>All Services</button>
    </section>
    
  {/* // Third section */}
    <SectionIntro introCaption='why choose us' introTitle='Redefining Care, One Patient at a Time'/>
    <section className='container third'>
      <div className='chose container'>
       {chosen}
      </div>
      <img src='public/care.png' className='featured'/>
    </section>

    {/* fourth section */}
    <section className="fourth">
    <SectionIntro introCaption='why choose us' introTitle='Our Expert Team'/>
    <div className="teams container">
      <img src="public/img1.png" alt="" className="team" />
      <img src="public/img2.png" alt="" className="team" />
      <img src="public/img3.png" alt="" className="team" />
      <img src="public/img4.png" alt="" className="team" />
    </div>
    </section>
    </main>
    )
}

export default Body