import React from 'react'

/* import Router DOM */
import {Routes, Route, BrowserRouter} from "react-router-dom"

/* Components */
import Profile from "../Components/Profile/Profile"
import About from "../Components/About/About"
import Skills from "../Components/Skills/Skills"
import Projects from "../Components/Projects/Projects"
import Contact from "../Components/Contact/Contact"
import Navbar from "../Components/Navbar/Navbar"


const Router = () => {
  return (
    <BrowserRouter>
        <Profile/>
          <section className='box'>
            <Routes>
                <Route path='/' element={<About/>} />
                <Route path='/About' element={<About/>} />
                <Route path='/Skills' element={<Skills/>} />
                <Route path='/Projects' element={<Projects/>} />
                <Route path='/Contact' element={<Contact/>} />
            </Routes>
          </section>
        <Navbar/>
    </BrowserRouter>
  )
}

export default Router