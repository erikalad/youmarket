/** @format */

import React from "react";
import { useLocation } from "react-router-dom";
import "./index.scss";
import back from "./../imagenes/arrow-back.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Nav() {
  const location = useLocation();
  const email = useSelector((state) => state.email);
  const accion = useSelector((state) => state.accion);

  let textoSpan;
  let targetRoute;

  switch (location.pathname) {
    case "/home":
      textoSpan = `¡Hola ${email}!`;
      targetRoute = "/";
      break;
    case "/awards":
      textoSpan = "¿A quién querés premiar?";
      targetRoute = "/home";
      break;
    case "/verification":
      textoSpan = <div>{accion.nombre}</div>;
      targetRoute = "/";
      break;
    case "/acredit":
      textoSpan = "¿Cuánto querés ingresar?";
      targetRoute = "/home";
      break;
    case "/products":
      textoSpan = "¡Elegí los premios!";
      targetRoute = "/home";
      break;
    case "/movimientos":
      textoSpan = "Tus movimientos";
      targetRoute = "/home";
      break;
    case "/comprobante":
      textoSpan = "Tu comprobante";
      targetRoute = "/movimientos";
      break;
    case "/ajustes":
      textoSpan = "";
      targetRoute = "/home";
      break;
    default:
      textoSpan = "";
      targetRoute = "/";
  }

  return (
    <nav className="navbar">
      {location.pathname !== "/" && location.pathname !== "/home" && (
        <Link to={targetRoute}>
          <img src={back} className="img-back" alt="arrow-back" />
        </Link>
      )}
      <span className="navbar-text">{textoSpan}</span>
      {location.pathname !== "/" && location.pathname !== "/home" && (
        <Link to={targetRoute}>
          <div className="img-back" />
        </Link>
      )}
    </nav>
  );
}
