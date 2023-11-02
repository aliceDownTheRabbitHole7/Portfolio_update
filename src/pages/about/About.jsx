import React from 'react'
import './About.css'
import professionalPicture from '../../assets/professional_picture.jpg'
import ContactData from '../../data/ContactData'

function About() {
  const contactMap = ContactData.map((data, i) => {
    return (
      <div className={data.class} key={i}>
        {data.icon}<br></br>
        <span className='contact-text'>{data.text}</span>
      </div>
    )
  })

  return (
    <section className='about-container'>
      <div className="contact-info">
        <div className='img-container'>
          <img src={professionalPicture} />
        </div>
        <div className="contact-container">
          {contactMap}
        </div>
      </div>
    </section>
  )
}

export default About
