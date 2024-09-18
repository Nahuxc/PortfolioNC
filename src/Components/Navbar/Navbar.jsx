import React, {useState, useEffect} from 'react'

/* router */
import { NavLink } from 'react-router-dom'

/* icons */
import { FaRegUser } from "react-icons/fa";
import { MdOutlineWorkOutline } from "react-icons/md";
import { RiNewspaperLine } from "react-icons/ri";
import { RiContactsBookLine } from "react-icons/ri";


/* import css */

import "./Navbar.css"
import Sidebar from './Sidebar/Sidebar';

const Navbar = () => {

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 1200px)").matches
  )

  useEffect(() => {
    window
    .matchMedia("(min-width: 1200px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);


  return (
    <nav className='navbar'>

        {
          !matches ? (
              <Sidebar/>
          ):
          (
            <ul className='navbar-content'>
              <NavLink to="/About" className='icon' ><FaRegUser /> Sobre Mi</NavLink>
              <NavLink to="/Skills" className='icon' ><RiNewspaperLine /> Experiencia</NavLink>
              <NavLink to="/Projects" className='icon' ><MdOutlineWorkOutline /> Proyectos</NavLink>
              {/* <NavLink to="/Contact" className='icon' ><RiContactsBookLine /> Contact</NavLink> */}
            </ul>
          )
        }


    </nav>
  )
}

export default Navbar