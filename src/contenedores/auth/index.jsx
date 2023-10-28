/** @format */

import React, { useState } from "react";
import "./auth.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { correoAuth } from "../../redux/actions";

export default function Auth() {
  const [correoElectronico, setCorreoElectronico] = useState("");
  const [error, setError] = useState("");
  const dispatch= useDispatch()

  const sendFeedback = (serviceID, templateId, variables) => {
    window.emailjs
      .send(serviceID, templateId, variables)
      .then((res) => {
        console.log("Email successfully sent!");
      })
      .catch((err) =>
        console.error(
          "Ocurrió un error:",
          err
        )
      );
  };

  const iniciarSesion = () => {
    const templateId = "template_tyraw1h";
    const serviceID = "service_7evxm4j";

    sendFeedback(serviceID, templateId, {
      reply_to: correoElectronico,
    });
    dispatch(correoAuth(correoElectronico))
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;

    if (/^\d+$/.test(inputValue) || /-/.test(inputValue)) {
      setError(
        "Esta es una versión de demostración y solo se aceptan correos electrónicos"
      );
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue)) {
      setError("Esto parece no ser un correo electrónico válido");
    } else {
      setError("");
    }

    setCorreoElectronico(inputValue);

    if (inputValue === "") {
      setError("");
    }
  };
  return (
    <>
      <div className="contenedor-auth">
        <div className="carta-auth">
          <input
            placeholder="CUIT o Correo Electrónico"
            className="input"
            value={correoElectronico}
            onChange={handleInputChange}
          />
          {error && <div className="error-message">{error}</div>}
          {correoElectronico === "" ||
          (correoElectronico !== "" && error !== "") ||
          error !== "" ? (
            <button className="boton-primario-disabled">INICIAR SESIÓN</button>
          ) : (
            <Link to="/verification" className="link">
              <button
                className="boton-primario"
                onClick={iniciarSesion}
                disabled={!!error}>
                INICIAR SESIÓN
              </button>
            </Link>
          )}
          <Link to="/">Aún no tengo cuenta</Link>
        </div>
      </div>
    </>
  );
}
