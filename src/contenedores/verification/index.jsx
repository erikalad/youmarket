import React from 'react'
import './verification.scss'

export default function Verification() {
  return (
    <div className='contenedor-verification'>
      <div className='texto'>Te acabamos de enviar un correo a </div>
      <div className='mail'>test@test.com.ar</div>
      <div className='texto'>Ingresa el código de 6 dígitos recibido</div>
      <div className='contenedor-codigo'>
          <input className='codigo'></input>
          <input className='codigo'></input>
          <input className='codigo'></input>
          <input className='codigo'></input>
          <input className='codigo'></input>
          <input className='codigo'></input>
      </div>
      <button className='boton-primario-disabled'>REENVIAR CÓDIGO</button>
    </div>
  )
}
