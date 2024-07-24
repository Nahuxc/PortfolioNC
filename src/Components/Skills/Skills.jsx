import React from 'react'

/* icons */
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { FaSymfony } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { FaGit } from "react-icons/fa";
import { SiVisualstudio } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { MdWork } from "react-icons/md";

import "./Skills.css"





const Skills = () => {
  return (
    <div>

      {/* titulo Skills */}
      <h2>Skills</h2>
      {/* experiencia y educacion */}
      <div className='box-experience'>
        <h2><MdWork /> Experiencia Laboral </h2>
        <div className='box-experience__text'>
            <span className='box-experience__text-span'>Freelance Desarrollo Web PHP | Enero - Febrero 2024</span>
            <li className='box-experience__text-li'>Creacion de estructura con HTML, diseño web y responsivo mobile con CSS.</li>
            <li className='box-experience__text-li'>Uso de JavaScript para implementar funcionalidades al cliente y uso del DOM.</li>
            <li className='box-experience__text-li'>Uso de PHP para configurar la conexion a la base de datos MySql y poder obtener los datos enviados por el cliente a traves del formulario, y almacenarlos en la base de datos.</li>
        </div>
      </div>
      <hr />
      <div className='box-technology'>
        <div className='box-technology-content'>
          <h2>technologies</h2>
          <div className='box-technology-content__icon'>
            <div className='skills-icon'>
              <FaHtml5 color='#ff6200' />
            </div>
            <div className='skills-icon'>
              <FaCss3Alt color='#00aaff' />
            </div>
            <div className='skills-icon'>
              <SiTailwindcss color='#00aaff' />
            </div>
            <div className='skills-icon'>
              <SiJavascript color='#c7c100' />
            </div>
            <div className='skills-icon'>
              <FaReact color='#00aaff' />
            </div>
            <div className='skills-icon'>
              <DiNodejs color='#00a42c' />
            </div>
            <div className='skills-icon'>
              <SiExpress color='#00a42c' />
            </div>
            <div className='skills-icon'>
              <BiLogoMongodb color='#00a42c' />
            </div>
            <div className='skills-icon'>
              <FaSass color='#fb7aff'/>
            </div>
            <div className='skills-icon'>
              <FaBootstrap color='#740078'/>
            </div>
            <div className='skills-icon'>
              <FaPhp color='#001a7f'/>
            </div>
            <div className='skills-icon'>
              <SiMysql />
            </div>
            <div className='skills-icon'>
              <FaGit color='#ff6200'/>
            </div>
            <div className='skills-icon'>
              <SiVisualstudio color='#00aaff' />
            </div>
          </div>
        </div>
      </div>
      {/* lenguajes que domino o utilizo */}

    </div>
  )
}

export default Skills