import React from 'react';
import { useLocation } from 'react-router-dom';
import './index.scss';
import back from './../imagenes/arrow-back.svg';
import { Link } from 'react-router-dom';

export default function Nav() {
  const location = useLocation();

  let textoSpan;
  let targetRoute;

  switch (location.pathname) {
    case '/home':
      textoSpan = '¡Hola Test!';
      targetRoute = '/';
      break;
    case '/awards':
      textoSpan = '¿A quién querés premiar?';
      targetRoute = '/home';
      break;
    case '/verification':
      textoSpan = 'Nombre de la Acción';
      targetRoute = '/';
      break;
    case '/acredit':
      textoSpan = '¿Cuánto querés ingresar?';
      targetRoute = '/home';
      break;
      case '/products':
        textoSpan = '¡Elegí los premios!';
        targetRoute = '/home';
        break;
        case '/movimientos':
          textoSpan = 'Tus movimientos';
          targetRoute = '/home';
          break;
    default:
      textoSpan = '';
      targetRoute = '/';
  }

  return (
    <nav className="navbar">
      {(location.pathname !== "/" && location.pathname !== "/home") &&
        <Link to={targetRoute}>
          <img src={back} className='img-back' alt='arrow-back' />
        </Link>
      }
      <span className="navbar-text">{textoSpan}</span>
      {(location.pathname !== "/" && location.pathname !== "/home") &&
        <Link to={targetRoute}>
          <div  className='img-back' />
        </Link>
      }
    </nav>
  );
}