import React from 'react'
import '../Styles/Footer.css'

const Section = ({title, contents})=>{
  return(
    <section className='item'>
      <h3 className='title'>{title}</h3>
      {contents.map((item)=>(<p>{item}</p>))}
    </section>
    )
}

const section1 = ['Abput us', 'Vision & Mission', 'Leadership', 'Careers', 'News & Articles']
const section2 = ['Help Center', 'FAQ', 'Contect Us', 'Ticket', 'Get an Appointment']
const section3 = ['support@domain.com', '1234 Parker Rd. Allertontpen, New Mexico 12345', '(012)0123-4567']

function Footer(){
  return(
    <footer id='footer' className='container'>
      <section className='item'>
        <h1 className='siteTitle'>CareNest </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et dolore magna aliqua
        </p>
        <div className='socials'>
          
        </div>
      </section>
      <Section title='Company' contents={section1}/>
      <Section title='Support' contents={section2}/>
      <Section title='Contact Info' contents={section3}/>
      <div id='line'>
        
      </div>
      <p>
        copyright &copy; 2024 Ebo Designs
      </p>
      <div className="end container">
      <p>Privacy Policy</p>
      <p>Terms and Service</p>
      </div>
    </footer>
    )
}

export default Footer