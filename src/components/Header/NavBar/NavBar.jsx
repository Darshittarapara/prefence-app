import React from 'react'
import { PATHS } from '../../../paths/paths'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
const NavBar = () => {
    const navLinks = [
        {
            title: "Home",
            path: PATHS.home
        },
        {
            title: "Add Prefrence",
            path: PATHS.addPreferance
        }
    ]
    return (
        <ul className='navbar'>
            {navLinks.map(({ title, path }, index) => {
                return <li key={index} className='nav-list'>
                    <NavLink to={path} className={({ isActive }) => {
                        return isActive ? "active" : 'nav-links'
                    }}>{title}</NavLink>
                </li>
            })}
        </ul>
    )
}

export default NavBar