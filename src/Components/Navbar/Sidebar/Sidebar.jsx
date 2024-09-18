import React, { Fragment, useRef, useState } from 'react'
import "./Sidebar.css"

import { NavLink } from 'react-router-dom'

/* icons */
import { FaRegUser } from "react-icons/fa";
import { MdOutlineWorkOutline } from "react-icons/md";
import { RiNewspaperLine } from "react-icons/ri";
import { RiContactsBookLine } from "react-icons/ri";
import { FaArrowCircleLeft } from "react-icons/fa";

const Sidebar = () => {

  const [btn, setBtn] = useState(false)
    
  const sidebar = useRef()

  const activeSidebar = () =>{

    if(btn === false){
      sidebar.current.classList.add("active")
      setBtn(true)
    }else{
      sidebar.current.classList.remove("active")
      setBtn(false)
    }

  }

  return (
      <Fragment>
        <button onClick={activeSidebar} className='btn-sidebar'> <FaArrowCircleLeft /> </button>
        <ul ref={sidebar} className='navbar-content-sidebar'>
            <NavLink to="/About" className='icon' ><FaRegUser /> Sobre Mi</NavLink>
            <NavLink to="/Skills" className='icon' ><RiNewspaperLine /> Experiencia</NavLink>
            <NavLink to="/Projects" className='icon' ><MdOutlineWorkOutline /> Proyectos</NavLink>
        </ul>
      </Fragment>
  )
}

export default Sidebar