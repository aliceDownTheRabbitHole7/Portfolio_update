import React from 'react'
import './About.css'
import Contact from './contact/Contact'
import ProfessionalPicture from './picture/ProfessionalPicture'
import Profile from './profile/Profile'
import './About.css'
 
function About() {
  

  return (
    <section className='about-container'>
      <div className="contact-info">
        <ProfessionalPicture />
        <Contact />
      </div>
      <div className="profile">
        <Profile />
      </div>
    </section>
  )
}

export default About
