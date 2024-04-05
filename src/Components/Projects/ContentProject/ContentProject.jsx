import React, { useEffect, useLayoutEffect, useState } from 'react'

/* css */
import "./ContentProject.css"

/* icons */
import { FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaPhp } from "react-icons/fa";


/* simulador de Api */

const projectsAPI = [
    {
      "id": 1,
      "name": "Book Store Cursos",
      "description": "Maquetado Desarrollado con el FrameWork SASS de CSS, Demuestra conocimientos en el desarrollo de diseño web y algunas funcionalidades con JS.",
      "url": "https://nahuxc.github.io/Book-Store-cursos/",
      "img":"/assets/bookstorecourseshome.png",
      "technology" : ["HTML", "CSS", "JS", "SASS"],
      "categorias": "Desarrollo Web"
  },
  {
    "id": 2,
    "name": "Asistentes Inmobiliarios",
    "description": "Trabajo Freelancer Registro de Usuarios y Contacto, se utilizo Php y MySql para almacenar los usuarios que se registren en la aplicacion.",
    "url": "https://asistentesinmobiliarios.com/",
    "img":"/assets/dvasistentesinmobiliarios.png",
    "technology" : ["HTML", "CSS", "JS", "PHP", "MySql"],
    "categorias": "Desarrollo Web"
  }
]


const ContentProject = () => {

  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  const getData = async ()=>{
      const dataAPI = await JSON.parse(localStorage.getItem("projects"))
      setLoading(false)
      setProjects(dataAPI)
    } 

  /* Api con localStorage */

  if(!localStorage.getItem("projects")){
    useEffect(()=>{
      localStorage.setItem("projects", JSON.stringify(projectsAPI))
    }, [])
  }

  useEffect(()=>{
      getData()
  }, [])

    /* loader */
    if(loading == true){
      return (
        <div className='box-projects'>
           <h2>Loading...</h2>
        </div>
      )
    }

    return (

        <div className='box-projects'>
            {
              /* map de la api */
              projects.map((project)=>{
                return (
                  <div key={project.id} className='box-card'>
                    <div className='box-card-content'>
                      <div className='box-img'>
                        <img src={project.img} alt="imagen" />
                      </div>
                      <div className='box-card-content_texts'>
                        <div className='box-card-content_texts-icons'>
                          <li className='card-icon'> {project.technology[3] == "SASS" ? <FaSass color='#ff06ac' /> : ( project.technology[3] == "PHP" ? ( <FaPhp color='#0280ff' /> ) : <FaReact color='#0280ff' /> )   } </li>
                          <li className='card-icon'> {project.technology[2] == "JS" ? <SiJavascript color='#b5a900' /> : ""}</li>
                          <li className='card-icon'> {project.technology[1] == "CSS" ? <FaCss3Alt color='#009dff' /> : ""}</li>
                          <li className='card-icon'> {project.technology[0] == "HTML" ? <FaHtml5 color='#ff430a' /> : ""}</li>
                        </div>
                        <div>
                          <h2> {project.name} </h2>
                          <span className='text-span-card'>{project.categorias}</span>
                          <p>{project.description}</p>
                        </div>
                        <div className='box-card-content_texts-links'>
                          <a href='' target='_blank' className='card-iconlink'><FaCode color='#009dff' /></a>
                          <a href={project.url} target='_blank' className='card-iconlink'><AiOutlineGlobal color='#009dff' /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
        </div>
      )
    

  
}

export default ContentProject