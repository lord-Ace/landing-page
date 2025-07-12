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
const Testemonial = ()=>{
  return(
    <div className='two'>
      <img src='/two.png'/>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget justo
      </p>
    </div>
    )
}

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
      <img className='featured' src='/care.png'></img>
    </section>
    
    {/* // second Section */}
    <section className='container sec'>
      <div className='centetred'>
            <SectionIntro introTitle='Comprehensive Medical Services' introCaption='services'/>
    </div>
      <div className="container second">
      <Card heading='General Check-Ups' image='/card1.png'/>
      <Card heading='Specialized Services' image='/card2.png'/>
      <Card heading='Laboratory Services' image='/card3.png'/>
      {/* <Card heading='General Check-Ups'/> */}
      </div>
      
      <button className='button'>All Services</button>
    </section>
    
  {/* // Third section */}
    <section className='container third'>
      <div className='centetred'>
       <SectionIntro introCaption='why choose us' introTitle='Redefining Care, One Patient at a Time'/>
      </div>
      <div className='chose container'>
       {chosen}
      </div>
      <img src='public/care.png' className='featured'/>
    </section>

    {/* fourth section */}
    <section className="fourth">
    <div className='centetred'>
          <SectionIntro introCaption='why choose us' introTitle='Our Expert Team'/>
    </div>
    <div className="teams container">
      <img src="/img1.png" alt="" className="team" />
      <img src="/img2.png" alt="" className="team" />
      <img src="/img3.png" alt="" className="team" />
      <img src="/img4.png" alt="" className="team" />
    </div>
    </section>
    
    {/* fifth section */}
    <section>
      <div className='centetred'>
         <SectionIntro introCaption='Testimonials' introTitle='Customer Feedback'/>
      </div>
      <div className='container'>
        <div className='testemonial'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget justo incidunt faucibus. Nullam auctor, nisl vel pharetra consequat, nunc orci 
           </div>
        <div className='testemonial'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget justo incidunt faucibus. Nullam auctor, nisl vel pharetra consequat, nunc orci 
        </div>
      </div>
    </section>
    <section className='container form'>
      <img src="/first.png"/>
      <form className='container'>
        <input className='input' type='text' placeholder='Your Name'/>
        <input className='input' type='email' placeholder='Your Email'/>
        <input className='input' type='number' placeholder='Phone Number'/>
        <input className='input' type='email' placeholder='Your Email'/>
        <textarea placeholder='Messages'></textarea>
        <button className='button'>
          Send Message
        </button>
      </form>
    </section>
    <section className='container seventh'>
     <div className='head'>
     <SectionIntro introCaption='Testimonials' introTitle='Customer Feedback'/>
     </div>
     <button className='button'>View All</button>
   <div className='container lead'>
       <Testemonial/>
       <Testemonial/>
       <Testemonial/>
       <Testemonial/>
     </div>
    </section>
    </main>
    )
}

export default Body