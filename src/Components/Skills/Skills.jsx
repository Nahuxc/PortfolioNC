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
      <h2>Experiencia / Habilidades</h2>
      {/* experiencia y educacion */}
      <div className='box-experience'>
        <h2><MdWork /> Experiencia Laboral </h2>
        <div className='box-experience__text'>
            <p className='box-experience__text-span'>Empresa : Asistentes Inmobiliarios</p>
            <span className='box-experience__text-span'>Desarrollo Web PHP Freelance | Enero - Febrero 2024</span>
            <li className='box-experience__text-li'>Se creo una Landing Page para que los usuarios puedan Visualizar Hogares o Terrenos disponibles de la inmobiliaria, conocer sobre los vendedores y facilitar el contacto directo del comprador con el vendedor.</li>
            <li className='box-experience__text-li'>Implementacion del maquetado web con html css y js para la creacion de la interfaz de usuario y secciones.</li>
            <li className='box-experience__text-li'> Se creo una Base de datos en MySQL y el manejo de datos con PHP.</li>
        </div>
      </div>
      <hr />
      <div className='box-technology'>
        <div className='box-technology-content'>
          <h2>Manejo Las Siguientes Tecnologias:</h2>
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
              <FaSass color='#fb7aff'/>
            </div>
            <div className='skills-icon'>
              <FaBootstrap color='#740078'/>
            </div>
            <div className='skills-icon'>
              <FaPhp color='#001a7f'/>
            </div>
            <div className='skills-icon'>
              <SiJavascript color='#c7c100' />
            </div>
            <div className='skills-icon'>
              <FaReact color='#00aaff' />
            </div>
           {/*  <div className='skills-icon'>
                <FaLaravel color='#ff6200'/>
            </div> */}
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