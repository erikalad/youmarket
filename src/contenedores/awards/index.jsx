/** @format */

import React from "react";
import user from './../../imagenes/user-plus-solid 2.svg'
import up from './../../imagenes/upload-solid 1.svg'
import lupa from './../../imagenes/magnifying-glass-solid 1.svg'
import {RiDeleteBin5Line} from 'react-icons/ri'
import './awards.scss'
import { Radio } from "antd";

export default function Awards() {
  return (
    <div className="contenedor-awards">
      <div className="contenedor-agregar">
        <div className="texto-awards">Nuevas cuentas</div>
        <div className="list-icons">
          <div className="caja-acciones">
            <img className="icono-caja" src={user} />
            <div className="contenedor-label">
              <div className="label-caja">Agregar cuenta</div>
            </div>
          </div>
          <div className="caja-acciones">
            <img className="icono-caja" src={up} />
            <div className="contenedor-label">
              <div className="label-caja">Subir archivo</div>
            </div>
          </div>
        </div>
      </div>
      <div className="contenedor-lista-buscador">
        <div className="contenedor-search">
          <img src={lupa}/>
          <input placeholder="Buscar por nombre o email." className="input-search"/>
        </div>

        <div className="contenedor-lista">
          <div className="titulo-cuentas">Tus cuentas</div>


          <div className="contenedor-listas-cartas">
            <div className="cuenta">
              <div className="icono-cuenta-email">
                <div className="icono-cuenta">C1</div>
                <div className="contenedor-email-nombre-cuenta">
                  <div className="nombre-cuenta">Cuenta 1</div>
                  <div className="email-cuenta">cuenta1@test.com.ar</div>
                </div>
              </div>

              <div className="contenedor-borrar-seleccionar">
                <div className="borrar-cuenta"><RiDeleteBin5Line/></div>
                <Radio className="seleccionar-cuenta"/>
              </div>
            </div>

            <div className="cuenta">
              <div className="icono-cuenta-email">
                <div className="icono-cuenta">C1</div>
                <div className="contenedor-email-nombre-cuenta">
                  <div className="nombre-cuenta">Cuenta 1</div>
                  <div className="email-cuenta">cuenta1@test.com.ar</div>
                </div>
              </div>

              <div className="contenedor-borrar-seleccionar">
                <div className="borrar-cuenta"><RiDeleteBin5Line/></div>
                <Radio className="seleccionar-cuenta"/>
              </div>
            </div>

            <div className="cuenta">
              <div className="icono-cuenta-email">
                <div className="icono-cuenta">C1</div>
                <div className="contenedor-email-nombre-cuenta">
                  <div className="nombre-cuenta">Cuenta 1</div>
                  <div className="email-cuenta">cuenta1@test.com.ar</div>
                </div>
              </div>

              <div className="contenedor-borrar-seleccionar">
                <div className="borrar-cuenta"><RiDeleteBin5Line/></div>
                <Radio className="seleccionar-cuenta"/>
              </div>
            </div>

            <div className="cuenta">
              <div className="icono-cuenta-email">
                <div className="icono-cuenta">C1</div>
                <div className="contenedor-email-nombre-cuenta">
                  <div className="nombre-cuenta">Cuenta 1</div>
                  <div className="email-cuenta">cuenta1@test.com.ar</div>
                </div>
              </div>

              <div className="contenedor-borrar-seleccionar">
                <div className="borrar-cuenta"><RiDeleteBin5Line/></div>
                <Radio className="seleccionar-cuenta"/>
              </div>
            </div>

            <div className="cuenta">
              <div className="icono-cuenta-email">
                <div className="icono-cuenta">C1</div>
                <div className="contenedor-email-nombre-cuenta">
                  <div className="nombre-cuenta">Cuenta 1</div>
                  <div className="email-cuenta">cuenta1@test.com.ar</div>
                </div>
              </div>

              <div className="contenedor-borrar-seleccionar">
                <div className="borrar-cuenta"><RiDeleteBin5Line/></div>
                <Radio className="seleccionar-cuenta"/>
              </div>
            </div>

            <div className="cuenta">
              <div className="icono-cuenta-email">
                <div className="icono-cuenta">C1</div>
                <div className="contenedor-email-nombre-cuenta">
                  <div className="nombre-cuenta">Cuenta 1</div>
                  <div className="email-cuenta">cuenta1@test.com.ar</div>
                </div>
              </div>

              <div className="contenedor-borrar-seleccionar">
                <div className="borrar-cuenta"><RiDeleteBin5Line/></div>
                <Radio className="seleccionar-cuenta"/>
              </div>
            </div>




          </div>


        </div>
        <div className="contenedor-boton-cont"></div>
      </div>
    </div>
  );
}
