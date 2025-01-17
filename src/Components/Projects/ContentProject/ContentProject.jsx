import React from 'react'

/* css */
import "./ContentProject.css"


import imgA from "../../../../img/VIDEO-GAMES-WEB.png"
import imgB from "../../../../img/bookstorecourseshome.jpg"
import imgC from "../../../../img/api-articles.png"
import imgD from "../../../../img/NewsLettersGenerator.png"
import imgE from "../../../../img/panelUsuario.png"

/* icons */
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
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
            <img src={imgE} alt="Inmobiliaria" />
          </div>
          <div className='box-card-content_texts'>
            <div className='box-card-content_texts-icons'>
              <li className='card-icon'> <FaPhp color='#0280ff' /> </li>
              <li className='card-icon'> <SiMysql color='#0285ff' /> </li>
              <li className='card-icon'> <FaCss3Alt color='#009dff' /> </li>
              <li className='card-icon'> <SiJavascript color='#b5a900' /> </li>
            </div>
            <div className='box-card-content-data'>
              <h2>Inmobiliaria </h2>
              <span className='text-span-card'>Desarrollo Web PHP</span>
              <p>Esta web cuenta con vista para usuario y administrador, la idea de la web es que los usuarios puedan interactuar con el producto y que sea facil contactar con asesores.
              Cuenta con Diseño web Responsivo para celulares
              Se implemento el patron de diseño MVC para crear el proyecto y mantener un orden correcto con el manejo del codigo.
              Secciones de vista para el usuario: inicio, lotes, sobre nosotros, formulario de contacto.
              Seccion de vista de detalle de producto: Integra un slider de imagenes, Informacion del producto a vender, Boton de contacto.
              Seccion para el administrador para iniciar sesion.
              navegacion desplegable y adaptable a telefonos moviles.
              Filtro de busqueda para los lotes.
              modo oscuro y modo blanco para la web.
              Funciones para el administrador CRUD: Manejo de registro de los usuarios por la web, Modificacion/actualizacion de lotes, Eliminacion de lotes, Crear nuevas publicaciones.
              Base de datos creada con MySQL.
              Integracion de PDO para evitar inyecciones SQL ( seguridad con el manejo de datos ).</p>
            </div>
            <div className='box-card-content_texts-links'>
              <a href="https://github.com/Nahuxc/InmobiliariaWeb" target='_blank' className='card-iconlink'><FaCode color='#009dff' /></a>
              <a href="https://github.com/Nahuxc/InmobiliariaWeb" target='_blank' className='card-iconlink'><AiOutlineGlobal color='#009dff' /></a>
            </div>
          </div>
        </div>
      </div>
      {/* card */}
      <div className='box-card'>
        <div className='box-card-content'>
          <div className='box-img'>
            <img src={imgD} alt="NewsLetters-Generator" />
          </div>
          <div className='box-card-content_texts'>
            <div className='box-card-content_texts-icons'>
              <li className='card-icon'> <FaReact color='#009dff' /> </li>
              <li className='card-icon'> <DiNodejs color='#00a42c' /> </li>
              <li className='card-icon'> <SiExpress color='#00a42c' /> </li>
              <li className='card-icon'> <BiLogoMongodb color='#00a42c' /> </li>
            </div>
            <div className='box-card-content-data'>
              <h2>NewsLetters Generator</h2>
              <span className='text-span-card'> MERN | Aplicacion web </span>
              <p> MERN STACK creado con React Vite, Node JS, Express JS, MongoDB , Esta conectado a la "Api rest Blog". Un CRUD que Genera noticias que el usuario desee, pudiendo tambien editarlas, eliminarlas y publicarlas para el resto de personas.</p>
            </div>
            <div className='box-card-content_texts-links'>
              <a href="https://github.com/Nahuxc/NewsLetters-MERN" target='_blank' className='card-iconlink'><FaCode color='#009dff' /></a>
              <a href="https://newslettersgenerator.netlify.app/" target='_blank' className='card-iconlink'><AiOutlineGlobal color='#009dff' /></a>
            </div>
          </div>
        </div>
      </div>
      {/* card */}
      <div className='box-card'>
        <div className='box-card-content'>
          <div className='box-img'>
            <img src={imgC} alt="Api-Rest-Blog" />
          </div>
          <div className='box-card-content_texts'>
            <div className='box-card-content_texts-icons'>
              <li className='card-icon'> <SiJavascript color='#b5a900' /> </li>
              <li className='card-icon'> <DiNodejs color='#00a42c' /> </li>
              <li className='card-icon'> <SiExpress color='#00a42c' /> </li>
              <li className='card-icon'> <BiLogoMongodb color='#00a42c' /> </li>
            </div>
            <div className='box-card-content-data'>
              <h2>Api Rest Blog</h2>
              <span className='text-span-card'>Backend | Servidor</span>
              <p>Esta Api Rest Creada con Express JS y MongoDB como base de datos, Permite Buscar y obtener datos, crear nuevos datos, editar, subir imagenes y eliminar datos. Es utilizada para un MERN Stack. </p>
            </div>
            <div className='box-card-content_texts-links'>
              <a href="https://github.com/Nahuxc/Api-rest-blog" target='_blank' className='card-iconlink'><FaCode color='#009dff' /></a>
              <a href="https://api-rest-blog-wc32.onrender.com/api/articles" target='_blank' className='card-iconlink'><AiOutlineGlobal color='#009dff' /></a>
            </div>
          </div>
        </div>
      </div>
      {/* card */}
      <div className='box-card'>
        <div className='box-card-content'>
          <div className='box-img'>
            <img src={imgA} alt="video-games-web" />
          </div>
          <div className='box-card-content_texts'>
            <div className='box-card-content_texts-icons'>
              <li className='card-icon'> <FaPhp color='#0280ff' /> </li>
              <li className='card-icon'> <SiMysql color='#0285ff' /> </li>
              <li className='card-icon'> <FaCss3Alt color='#009dff' /> </li>
              <li className='card-icon'> <SiJavascript color='#b5a900' /> </li>
            </div>
            <div className='box-card-content-data'>
              <h2>Video Juegos Web </h2>
              <span className='text-span-card'>Desarrollo Web PHP</span>
              <p>WEB con PHP y MySQL creando un CRUD para registro y logueo de usuarios, basado en video juegos para que los usuarios puedan publicar sus posteos, editarlos o eliminarlos.</p>
            </div>
            <div className='box-card-content_texts-links'>
              <a href="https://github.com/Nahuxc/videogamesWeb" target='_blank' className='card-iconlink'><FaCode color='#009dff' /></a>
              <a href="https://github.com/Nahuxc/videogamesWeb" target='_blank' className='card-iconlink'><AiOutlineGlobal color='#009dff' /></a>
            </div>
          </div>
        </div>
      </div>
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
            <div className='box-card-content-data'>
              <h2>Book Store Cursos</h2>
              <span className='text-span-card'>Desarrollo Web</span>
              <p>Maquetado Desarrollado con el FrameWork SASS de CSS, Demuestra conocimientos en el desarrollo de diseño web y algunas funcionalidades con JS. (No tiene responsive mobile)</p>
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