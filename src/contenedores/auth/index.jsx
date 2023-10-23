import React from 'react'
import './auth.scss'

export default function Auth() {
  return (
    <>
    <div className='message'>
        <div className='logo'></div>
      </div>
    <div className='contenedor-auth'>
      <div className='carta-auth'>
        <input placeholder='CUIT o Correo Electrónico' className='input'/>
        <button className='boton-primario'>INICIAR SESIÓN</button>
        <a href='/'>Aún no tengo cuenta</a>
      </div>
    </div>
    </>
  )
}
