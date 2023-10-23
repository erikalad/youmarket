import React from 'react';
import { useLocation } from 'react-router-dom';
import './index.scss';
import back from './../imagenes/arrow-back.svg'

export default function Nav() {
  const location = useLocation();

  let textoSpan;

  switch (location.pathname) {
    case '/home':
      textoSpan = '¡Hola Test!';
      break;
    case '/awards':
      textoSpan = '¿A quién querés premiar?';
      break;
    case '/verification':
      textoSpan = 'Nombre de la Acción';
      break;
    case '/acredit':
      textoSpan = '¿Cuánto querés ingresar?';
      break;
    default:
      textoSpan = '';
  }

  return (
    <nav className="navbar">
      {location.pathname !== "/auth" ? 
      <img src={back} className='img-back' alt='arrow-back'/>
    : null}
      <span className="navbar-text">{textoSpan}</span>
    </nav>
  );
}