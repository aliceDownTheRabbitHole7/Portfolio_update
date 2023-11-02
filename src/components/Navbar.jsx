import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { FaTimes, FaBars } from 'react-icons/fa'
import NavbarData from '../data/NavBarData'
import './Navbar.css'

function Navbar() {
    const navRef = useRef();

    const showNav = () => {
        navRef.current.classList.toggle('responsive-nav')
    }

    const linkMap = NavbarData.map((item, i) => {
        return (
            <Link to={item.path} key={i} className='nav-link' onClick={showNav}>
                {item.icon}
                <span>{item.title}</span>
            </Link>
        )
    })

  return (
    <header>
        <h3 className='logo'>AW</h3>
        <nav ref={navRef}>
            <div>
                {linkMap}
            </div>
            <button onClick={showNav} className='nav-btn nav-close-btn'>
                <FaTimes />
            </button>
        </nav>
        <button onClick={showNav} className='nav-btn'>
            <FaBars />
        </button>
    </header>
  )
}

export default Navbar
