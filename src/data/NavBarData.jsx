import React from 'react'
import * as FaIcons from 'react-icons/fa6'

const NavbarData = [
    {
        path: '/',
        title: 'Home',
        icon: <FaIcons.FaHouse className='fa-icon' />,
    },
    {
        path: '/about',
        title: 'About Me',
        icon: <FaIcons.FaUser className='fa-icon' />,
    },
    {
        path: '/projects',
        title: 'Projects',
        icon: <FaIcons.FaFolderOpen className='fa-icon' />,
    },
    {
        path: '/accounts',
        title: 'Accounts',
        icon: <FaIcons.FaUsers className='fa-icon' />
    }
]

export default NavbarData 