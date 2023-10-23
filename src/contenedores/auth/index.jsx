import React from 'react'
import './auth.scss'
import { Link } from 'react-router-dom'

export default function Auth() {
  return (
    <>
    <div className='contenedor-auth'>
      <div className='carta-auth'>
        <input placeholder='CUIT o Correo Electrónico' className='input'/>
        <Link to='/verification' className='link'><button className='boton-primario' >INICIAR SESIÓN</button></Link>
        <Link to='/'>Aún no tengo cuenta</Link>
      </div>
    </div>
    </>
  )
}
