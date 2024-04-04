import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <div>
        <div className="box-form">
        <h1>Contactame</h1>
        <form className="form">
          <p>Nombre:</p>
          <input placeholder="Nombre" type="text" />
          <p>Apellido:</p>
          <input placeholder="Apellido" type="text" />
          <p>Email:</p>
          <input placeholder="Email" type="email" />
          <p>Mensaje:</p>
          <textarea className='textArea'></textarea>
          <input className="btnsubmit" type="submit" value="Enviar"/>
        </form>
      </div>
    </div>
  )
}

export default Contact