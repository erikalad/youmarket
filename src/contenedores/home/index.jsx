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

export default function Home() {
  return (
    <div className="contenedor-home">
      <div className="contenedor-datos">
        <div className="mi-saldo">
          <div className="texto-home">Mi Saldo</div>
          <div className="valor-home">$10.000,00</div>
        </div>

        <div className="mi-saldo">
          <div className="texto-home">Mi acción: </div>
          <div className="valor-home2">Nombre de acción</div>
          <img src={flecha} className="valor-home2" />
        </div>
      </div>

      <div className="contenedor-acciones">
        <div className="accion">Acciones</div>
        <div className="contenedor-iconos-acciones">
          <div className="caja-acciones">
            <img className="icono-caja" src={tranfer} />
            <div className="contenedor-label">
              <div className="label-caja">Cargar Saldo</div>
            </div>
          </div>
          <div className="caja-acciones">
            <img className="icono-caja" src={gift} />
            <div className="contenedor-label">
              <div className="label-caja">Enviar Premio</div>
            </div>
          </div>
          <div className="caja-acciones">
            <img className="icono-caja" src={clock} />
            <div className="contenedor-label">
              <div className="label-caja">Movimientos</div>
            </div>
          </div>
          <div className="caja-acciones">
            <img className="icono-caja" src={setting} />
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
                <img src={flechaArriba} />
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
                <img src={flechaAbajo} />
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
                <img src={flechaAbajo} />
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
                <img src={flechaAbajo} />
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
                <img src={flechaArriba} />
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
