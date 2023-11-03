import React from 'react'
import './Profile.css'

function Profile() {
  return (
    <div className='profile-container'>
      <p className='profile-title'>Aleksander White</p>
      <br></br>
      <p className='profile-tagline'><i>"Sometimes, it's the very people who no one imagines anything of who do the things no one can imagine."</i></p>
      <div className='paragraph-container'>
        <br></br>
        <br></br>
        <p>
            Hey there, I'm Alek, a self-taught web developer on a mission to bring creative ideas to life through the power of code. From diving into HTML and CSS tutorials in my spare time to now crafting dynamic websites and web applications, my journey has been a thrilling adventure in the digital realm.
        </p>
        <br></br>
        <p>
            Armed with an insatiable curiosity and a love for problem-solving, I've mastered various programming languages and frameworks, building everything from responsive websites to interactive web apps that push the boundaries of user experience.
        </p>
        <br></br>
        <p>
            When I'm not engrossed in my coding projects, you can find me exploring the latest web development trends, enjoying a cup of coffee, or volunteering my skills to help non-profits and small businesses establish their online presence.
        </p>
        <br></br>
        <p>
        My goal is to continually learn and grow as a web developer, turning visions into reality and creating a more dynamic and connected digital world. 
        </p>
      </div>
    </div>
  )
}

export default Profile
