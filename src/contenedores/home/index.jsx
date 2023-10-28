/** @format */

import React from "react";
import "./home.scss";
import setting from "./../../imagenes/gear-solid 2.svg";
import tranfer from "./../../imagenes/money-bill-transfer-solid 1.svg";
import clock from "./../../imagenes/clock-rotate-left-solid 1.svg";
import gift from "./../../imagenes/gift-solid 1.svg";
import flechaArriba from "./../../imagenes/arrow-up-solid 1.svg";
import flechaAbajo from "./../../imagenes/arrow-down-solid 1.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Select } from "antd";

export default function Home() {
  const monto = useSelector(state=> state.monto)
  const movimientos = useSelector(state=>state.movimientos)
  const accion = useSelector(state=>state.accion)
  return (
    <div className="contenedor-home">
      <div className="contenedor-datos">
        <div className="mi-saldo">
          <div className="texto-home">Mi Saldo:</div>
          <div className="valor-home">${monto},00</div>
        </div>

        <div className="mi-saldo">
      
          <div className="texto-home">Mi acción: </div>
          <Select
      defaultValue={accion}
      className="selectAcciones valor-home2"
      bordered={false}
      options={[
        
      ]}
    />
        </div>
      </div>

      <div className="contenedor-acciones">
        <div className="accion">Acciones</div>
        <div className="contenedor-iconos-acciones">
          <Link to="/acredit">
            <div className="caja-acciones">
              <img className="icono-caja" src={tranfer} alt="cargar-saldo" />
              <div className="contenedor-label">
                <div className="label-caja">Cargar Saldo</div>
              </div>
            </div>
          </Link>
          <Link to="/awards">
          <div className="caja-acciones">
            <img className="icono-caja" src={gift} alt="enviar-premio" />
            <div className="contenedor-label">
              <div className="label-caja">Enviar Premio</div>
            </div>
          </div>
          </Link>
          <Link to="/movimientos">
          <div className="caja-acciones">
            <img className="icono-caja" src={clock} alt="movimientos" />
            <div className="contenedor-label">
              <div className="label-caja">Movimientos</div>
            </div>
          </div>
          </Link>
          <Link to="/ajustes">
          <div className="caja-acciones">
            <img className="icono-caja" src={setting} alt="ajustes" />
            <div className="contenedor-label">
              <div className="label-caja">Ajustes</div>
            </div>
          </div>
          </Link>
        </div>
      </div>

      <div>
      <div className="contenedor-ultimos-mov">
        <div className="ultmov">Últimos movimientos</div>
        <div className="contenedor-cada-mov2">
          {movimientos.slice(0,5).map((movimiento, index) => (
            <div className="carta-mov" key={index}>
              <div className="contenedor-flecha-saldo">
                <div className="contenedor-flecha">
                  <img src={movimiento.flecha === "flechaAbajo" ? flechaAbajo : flechaArriba } alt={movimiento.tipo} />
                </div>
                <div>{movimiento.tipo}</div>
              </div>

              <div className="contenedor-importe-fecha">
                <div>{movimiento.flecha === "flechaArriba" ? '+' : '-'}${movimiento.importe},00</div>
                <div>{movimiento.fecha}</div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}
