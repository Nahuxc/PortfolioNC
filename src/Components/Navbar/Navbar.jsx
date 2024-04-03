import React from 'react'

/* icons */
import { FaRegUser } from "react-icons/fa";
import { MdOutlineWorkOutline } from "react-icons/md";
import { RiNewspaperLine } from "react-icons/ri";
import { RiContactsBookLine } from "react-icons/ri";

/* import css */

import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className='navbar'>
        <ul className='navbar-content'>
          <li className='icon'><FaRegUser /> About</li>
          <li className='icon'><RiNewspaperLine /> Skills</li>
          <li className='icon'><MdOutlineWorkOutline /> Projects</li>
          <li className='icon'><RiContactsBookLine /> Contact</li>
        </ul>
    </nav>
  )
}

export default Navbar