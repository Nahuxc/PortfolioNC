import React from 'react'

/* css */
import "./ContentProject.css"


import imgA from "../../../../img/dvasistentesinmobiliarios.jpg"
import imgB from "../../../../img/bookstorecourseshome.jpg"
import imgC from "../../../../img/api-articles.png"
import imgD from "../../../../img/NewsLetterProyect.png"

/* icons */
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript} from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaPhp } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si";



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
      {/* card */}
      <div className='box-card'>
        <div className='box-card-content'>
          <div className='box-img'>
            <img src={imgC} alt="bookstorecourseshome" />
          </div>
          <div className='box-card-content_texts'>
            <div className='box-card-content_texts-icons'>
              <li className='card-icon'> <SiJavascript color='#b5a900' /> </li>
              <li className='card-icon'> <DiNodejs color='#00a42c' /> </li>
              <li className='card-icon'> <BiLogoMongodb color='#00a42c' /> </li>
            </div>
            <div>
              <h2>Api Rest Blog</h2>
              <span className='text-span-card'>Backend | Servidor</span>
              <p>Esta Api Rest Creada con Express JS y MongoDB como base de datos, Permite Buscar y obtener datos, crear nuevos datos, editar, subir imagenes y eliminar datos. Es utilizada para un MERN Stack. </p>
            </div>
            <div className='box-card-content_texts-links'>
              <a href="https://github.com/Nahuxc/Api-rest-blog" target='_blank' className='card-iconlink'><FaCode color='#009dff' /></a>
            </div>
          </div>
        </div>
      </div>
      {/* card */}
      <div className='box-card'>
        <div className='box-card-content'>
          <div className='box-img'>
            <img src={imgD} alt="bookstorecourseshome" />
          </div>
          <div className='box-card-content_texts'>
            <div className='box-card-content_texts-icons'>
              <li className='card-icon'> <FaReact color='#009dff' /> </li>
              <li className='card-icon'> <DiNodejs color='#00a42c' /> </li>
              <li className='card-icon'> <SiExpress color='#00a42c' /> </li>
              <li className='card-icon'> <BiLogoMongodb color='#00a42c' /> </li>
            </div>
            <div>
              <h2>NewsLetters Generator</h2>
              <span className='text-span-card'> MERN | Aplicacion web ( en desarrollo... )</span>
              <p>Este Proyecto es un MERN STACK fue creado con React Vite, Node JS, Express JS, MongoDB , Esta conectado a la "Api rest Blog". Genera noticias que el usuario cree, pudiendo tambien editarlas, eliminarlas.</p>
            </div>
            <div className='box-card-content_texts-links'>
              <a href="#" target='_blank' className='card-iconlink'><FaCode color='#009dff' /></a>
              <a href="#" target='_blank' className='card-iconlink'><AiOutlineGlobal color='#009dff' /></a>
            </div>
          </div>
        </div>
      </div>

    </div>
  )



}

export default ContentProject