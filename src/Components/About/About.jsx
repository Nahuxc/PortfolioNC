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
          <p>Apasionado por el diseño y la funcionalidad, me dedico a desarrollar interfaces web que combinan estética y usabilidad. Utilizo tecnologías como HTML, CSS y JavaScript, junto con frameworks modernos como React.js, para construir experiencias interactivas, responsivas y optimizadas para múltiples dispositivos. Cada proyecto refleja atención al detalle y un enfoque en ofrecer soluciones visualmente atractivas y altamente funcionales.</p>
        </div>
        <br />
        <br />
        <div className='box-about-workAreasC'>
          <p className='box-about-workAreas__icon'><FaCode color='#0077ff' /> Back-End</p>
          <p>Enfocado en la lógica y la funcionalidad del servidor, diseño y desarrollo sistemas robustos que garantizan el rendimiento y la seguridad de las aplicaciones web. Trabajo con lenguajes como PHP y JavaScript, utilizando Node.js y su framework Express para implementar APIs y arquitecturas escalables. Cuento con experiencia en bases de datos relacionales como SQL y no relacionales como MongoDB, asegurando una gestión eficiente y segura de la información. </p>
        </div>
      </div>
    </div>
  )
}

export default About