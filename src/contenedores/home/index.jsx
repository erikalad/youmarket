/** @format */

import React from "react";
import "./home.scss";
import flecha from "./../../imagenes/angle-left-solid 2.svg";
import setting from "./../../imagenes/gear-solid 2.svg";
import tranfer from "./../../imagenes/money-bill-transfer-solid 1.svg";
import clock from "./../../imagenes/clock-rotate-left-solid 1.svg";
import gift from "./../../imagenes/gift-solid 1.svg";
import flechaArriba from "./../../imagenes/arrow-up-solid 1.svg";
import flechaAbajo from "./../../imagenes/arrow-down-solid 1.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Home() {
  const monto = useSelector(state=> state.monto)
  return (
    <div className="contenedor-home">
      <div className="contenedor-datos">
        <div className="mi-saldo">
          <div className="texto-home">Mi Saldo</div>
          <div className="valor-home">${monto},00</div>
        </div>

        <div className="mi-saldo">
          <div className="texto-home">Mi acción: </div>
          <div className="valor-home2">Nombre de acción</div>
          <img src={flecha} className="valor-home2" alt="arrow" />
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
          <div className="caja-acciones">
            <img className="icono-caja" src={clock} alt="movimientos" />
            <div className="contenedor-label">
              <div className="label-caja">Movimientos</div>
            </div>
          </div>
          <div className="caja-acciones">
            <img className="icono-caja" src={setting} alt="ajustes" />
            <div className="contenedor-label">
              <div className="label-caja">Ajustes</div>
            </div>
          </div>
        </div>
      </div>

      <div className="contenedor-ultimos-mov">
        <div className="ultmov">Últimos movimientos</div>
        <div className="contenedor-cada-mov">
          <div className="carta-mov">
            <div className="contenedor-flecha-saldo">
              <div className="contenedor-flecha">
                <img src={flechaArriba} alt="up" />
              </div>
              <div>Carga de Saldo</div>
            </div>

            <div className="contenedor-importe-fecha">
              <div>+$10.000,00</div>
              <div>21/01</div>
            </div>
          </div>
          <div className="carta-mov">
            <div className="contenedor-flecha-saldo">
              <div className="contenedor-flecha">
                <img src={flechaAbajo} alt="down" />
              </div>
              <div>Envío de Premio</div>
            </div>

            <div className="contenedor-importe-fecha">
              <div>-$2.500,00</div>
              <div>19/01</div>
            </div>
          </div>

          <div className="carta-mov">
            <div className="contenedor-flecha-saldo">
              <div className="contenedor-flecha">
                <img src={flechaAbajo} alt="down" />
              </div>
              <div>Envío de Premio</div>
            </div>

            <div className="contenedor-importe-fecha">
              <div>-$2.500,00</div>
              <div>18/01</div>
            </div>
          </div>

          <div className="carta-mov">
            <div className="contenedor-flecha-saldo">
              <div className="contenedor-flecha">
                <img src={flechaAbajo} alt="down" />
              </div>
              <div>Envío de Premio</div>
            </div>

            <div className="contenedor-importe-fecha">
              <div>-$2.500,00</div>
              <div>18/01</div>
            </div>
          </div>

          <div className="carta-mov">
            <div className="contenedor-flecha-saldo">
              <div className="contenedor-flecha">
                <img src={flechaArriba} alt="up" />
              </div>
              <div>Carga de Saldo</div>
            </div>

            <div className="contenedor-importe-fecha">
              <div>+$7.500,00</div>
              <div>17/01</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
