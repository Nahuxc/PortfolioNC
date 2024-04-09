import React from 'react'

/* css */
import "./ContentProject.css"


import imgB from "../../../../img/bookstorecourseshome.jpg"
import imgA from "../../../../img/dvasistentesinmobiliarios.jpg"

/* icons */
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaPhp } from "react-icons/fa";
import { SiMysql } from "react-icons/si";



const ContentProject = () => {

  return (

    <div className='box-projects'>
      {/* card */}
      <div className='box-card'>
        <div className='box-card-content'>
          <div className='box-img'>
            <img src={imgB} alt="bookstorecourseshome" />
          </div>
          <div className='box-card-content_texts'>
            <div className='box-card-content_texts-icons'>
              <li className='card-icon'> <FaSass color='#ff06ac' /> </li>
              <li className='card-icon'> <SiJavascript color='#b5a900' /> </li>
              <li className='card-icon'> <FaCss3Alt color='#009dff' /> </li>
              <li className='card-icon'> <FaHtml5 color='#ff430a' /> </li>
            </div>
            <div>
              <h2>Book Store Cursos</h2>
              <span className='text-span-card'>Desarrollo Web</span>
              <p>Maquetado Desarrollado con el FrameWork SASS de CSS, Demuestra conocimientos en el desarrollo de diseño web y algunas funcionalidades con JS.</p>
            </div>
            <div className='box-card-content_texts-links'>
              <a href="https://github.com/Nahuxc/Book-Store-cursos" target='_blank' className='card-iconlink'><FaCode color='#009dff' /></a>
              <a href="https://nahuxc.github.io/Book-Store-cursos/" target='_blank' className='card-iconlink'><AiOutlineGlobal color='#009dff' /></a>
            </div>
          </div>
        </div>
      </div>
      {/* card */}
      <div className='box-card'>
        <div className='box-card-content'>
          <div className='box-img'>
            <img src={imgA} alt="bookstorecourseshome" />
          </div>
          <div className='box-card-content_texts'>
            <div className='box-card-content_texts-icons'>
              <li className='card-icon'> <FaHtml5 color='#ff430a' /> </li>
              <li className='card-icon'> <FaCss3Alt color='#009dff' /> </li>
              <li className='card-icon'> <SiJavascript color='#b5a900' /> </li>
              <li className='card-icon'> <FaPhp color='#0280ff' /> </li>
              <li className='card-icon'> <SiMysql color='#0285ff' /> </li>
            </div>
            <div>
              <h2>Asistentes Inmobiliarios</h2>
              <span className='text-span-card'>Desarrollo Web</span>
              <p>Trabajo Freelancer Registro de Usuarios y Contacto, se utilizo Php y MySql para almacenar los usuarios que se registren en la aplicacion.</p>
            </div>
            <div className='box-card-content_texts-links'>
              <a href="https://github.com/Nahuxc/Book-Store-cursos" target='_blank' className='card-iconlink'><FaCode color='#009dff' /></a>
              <a href="https://nahuxc.github.io/Book-Store-cursos/" target='_blank' className='card-iconlink'><AiOutlineGlobal color='#009dff' /></a>
            </div>
          </div>
        </div>
      </div>

    </div>
  )



}

export default ContentProject