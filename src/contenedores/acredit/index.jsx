import React, { useState } from 'react'
import './acredit.scss'
import { InputNumber } from 'antd';
import  { createContext } from 'react';
import {Modal } from 'antd';
import { useDispatch } from 'react-redux'; // Importa useDispatch
import { cargarSaldo } from './../../redux/actions'; // Importa la acción cargarSaldo
import { Link } from 'react-router-dom';
const ReachableContext = createContext(null);


export default function Acredit() {
  const [monto, setMonto] = useState('');
  const [modal, contextHolder] = Modal.useModal();
  const dispatch = useDispatch(); // Crea una instancia de useDispatch

  const handleInputChange = (value) => {
    setMonto(`$${value}`);
  }
  const config = {
    title: 'Revisá si está todo bien',
    content: (
      <>
        <ReachableContext.Consumer>{(name) => `Vas a ingresar ${monto}`}</ReachableContext.Consumer>
      </>
    ),
    okText: <Link to="/home" className='link'>Ingresar dinero</Link>, // Texto del botón OK
    cancelText: 'Cancelar', // Texto del botón Cancelar
    onOk: () => dispatch(cargarSaldo(monto)) // Dispara la acción cargarSaldo al hacer clic en OK
  };

  return (
    <div className='contenedor-saldo'>
      <div className='contenedor-saldo-valor'>
        <div className='texto-saldo'>Saldo</div>
        <InputNumber
          min={1}
          max={10000000}
          value={monto}
          bordered={false}
          className='valor'
          placeholder='$0'
          onChange={handleInputChange}
        />
      </div>
      <button className={monto !== "" ? 'boton-primario' : "boton-primario-disabled"}       onClick={async () => {
             await modal.confirm(config);
          }}>CONTINUAR</button>
  
      {contextHolder}

    </div>
  )
}