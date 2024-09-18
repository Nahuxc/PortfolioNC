import React from 'react'
import ContentProject from './ContentProject/ContentProject'


const Projects = () => {
  return (
    <div>
      <div>
        <h2>Proyectos</h2>
      </div>
      {/* filtrador por parametros all , websites React, Website Php */}
      <ContentProject/>
    </div>
  )
}

export default Projects