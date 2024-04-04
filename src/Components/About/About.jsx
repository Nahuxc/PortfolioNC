import React from 'react'

import { MdWeb } from "react-icons/md";
import { FaCode } from "react-icons/fa";

import "./About.css"

const About = () => {
  return (
    <div className='box-about'>
      <div className='box-about-me'>
        <h2 >Sobre Mi</h2>
        <p>Soy una persona apasionada por el mundo de la programacion, el desarrollo de aplicaciones, y páginas web. Con varios cursos realizados en distintos lenguajes de Front end y Backend. me encuentro en búsqueda de un nuevo desafío laboral que me permita aplicar todos los conocimientos adquiridos. Cuento con experiencia en trabajos en equipo, planificación y buena comunicación.</p>
      </div>
      <br />
        <hr />
        <br />
      <div className='box-about-work'>
        <h2>¿En que Trabajo? </h2>
        <br />
        <div className='box-about-workAreasF'>
        <p className='box-about-workAreas__icon'><MdWeb color='#ff9292'  /> Front-End</p>
          <p>Desarrollo del Diseño de Interfacez web Optimas y adaptables, teniendo en cuenta siempre que la experiencia del usuario sea la mas comoda e intuitiva.  </p>
        </div>
        <br />
        <br />
        <div className='box-about-workAreasC'>
          <p className='box-about-workAreas__icon'><FaCode color='#0077ff' /> Back-End</p>
          <p>Me encargo de la Creacion de servidores, manejos de CRUD, Consumo de API´s y entre otras variantes que se dispongan, dando funciones a las aplicaciones/webs de la manera mas eficiente. </p>
        </div>
      </div>
    </div>
  )
}

export default About