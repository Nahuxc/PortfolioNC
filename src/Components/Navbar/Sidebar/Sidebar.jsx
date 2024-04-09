import React from 'react'
import "./Sidebar.css"

import { NavLink } from 'react-router-dom'

/* icons */
import { FaRegUser } from "react-icons/fa";
import { MdOutlineWorkOutline } from "react-icons/md";
import { RiNewspaperLine } from "react-icons/ri";
import { RiContactsBookLine } from "react-icons/ri";

const Sidebar = () => {
  return (
    <ul className='navbar-content-sidebar'>
        <NavLink to="/About" className='icon' ><FaRegUser /> About</NavLink>
        <NavLink to="/Skills" className='icon' ><RiNewspaperLine /> Skills</NavLink>
        <NavLink to="/Projects" className='icon' ><MdOutlineWorkOutline /> Projects</NavLink>
        <NavLink to="/Contact" className='icon' ><RiContactsBookLine /> Contact</NavLink>
    </ul>
  )
}

export default Sidebar