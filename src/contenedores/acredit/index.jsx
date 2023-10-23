import React from 'react'
import './acredit.scss'

export default function Acredit() {
  return (
    <div className='contenedor-saldo'>

      <div className='contenedor-saldo-valor'>
      <div className='texto-saldo'>Saldo</div>
      <input className='valor' placeholder='$0'/>
      </div>

      <button className='boton-primario-disabled'>CONTINUAR</button>
    </div>
  )
}
