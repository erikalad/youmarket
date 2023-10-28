/** @format */

import { Avatar } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import "./ajustes.scss";
import visa from "./../../imagenes/visa.png";
import master from "./../../imagenes/master.png";

export default function Ajustes() {
  const accion = useSelector((state) => state.accion);
  const email = useSelector((state) => state.email);
  const tarjetas = useSelector((state) => state.tarjetas);

  return (
    <div className="contenedor-home">
      <div className="contenedor-datos">
        <div className="mi-saldo">
          <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
          <div className="texto-home">Nombre de la acción:</div>
          <div className="valoresAjustes">{accion}</div>
        </div>

        <div className="mi-saldo">
          <div className="texto-home">Correo electrónico:</div>
          <div className="valoresAjustes">{email}</div>
        </div>
      </div>

      <div className="accion">Tarjetas</div>
      <div className="contenedorTarjetas">
        {tarjetas.map((tarjeta, index) => (
          <div className="carta-mov" key={index}>
            <div className="contenedor-flecha-saldo">
              <div className="contenedor-flecha">
                <img
                  src={tarjeta.marca === "Visa" ? visa : master}
                  alt={tarjeta.marca}
                  width={"100%"}
                />
              </div>
              <div>
                <div>Terminada en {tarjeta.terminacion}</div>
                <div>{tarjeta.tipo}</div>
              </div>
            </div>

            <div className="contenedor-importe-fecha">
              <div>{tarjeta.marca}</div>
              <div>Vencimiento:{tarjeta.vencimiento}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
