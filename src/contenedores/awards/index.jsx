/** @format */

import React, { useEffect, useState } from "react";
import user from './../../imagenes/user-plus-solid 2.svg'
import up from './../../imagenes/upload-solid 1.svg'
import lupa from './../../imagenes/magnifying-glass-solid 1.svg'
import {RiDeleteBin5Line} from 'react-icons/ri'
import { useDispatch } from 'react-redux';
import { cargarProductos } from './../../redux/actions';
import './awards.scss'
import { Radio,Modal } from "antd";
import { Link } from "react-router-dom";

export default function Awards() {

  const [modalVisible, setModalVisible] = useState(false);
  const [usuariosSeleccionado, setUsuariosSeleccionado] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cargarProductos());
  }, [dispatch]);

  const onChange = (e) => {
    setUsuariosSeleccionado(e.target.value);
  };
  const usuarios = [
    {
      icono: "C1",
      nombre: "Cuenta 1",
      email: "cuenta1@test.com.ar"
    },
    {
      icono: "C2",
      nombre: "Cuenta 2",
      email: "cuenta2@test.com.ar"
    },
    {
      icono: "C3",
      nombre: "Cuenta 3",
      email: "cuenta3@test.com.ar"
    },
    {
      icono: "C4",
      nombre: "Cuenta 4",
      email: "cuenta4@test.com.ar"
    },
    {
      icono: "C5",
      nombre: "Cuenta 5",
      email: "cuenta5@test.com.ar"
    },
    {
      icono: "C6",
      nombre: "Cuenta 6",
      email: "cuenta6@test.com.ar"
    },
    {
      icono: "C7",
      nombre: "Cuenta 7",
      email: "cuenta7@test.com.ar"
    },
    {
      icono: "C8",
      nombre: "Cuenta 8",
      email: "cuenta8@test.com.ar"
    }
  ];  

  

  return (
    <div className="contenedor-awards">
      <div className="contenedor-agregar">
        <div className="texto-awards">Nuevas cuentas</div>
        <div className="list-icons">
          <div className="caja-acciones">
            <img className="icono-caja" src={user} alt='user'/>
            <div className="contenedor-label">
              <div className="label-caja">Agregar cuenta</div>
            </div>
          </div>
          <div className="caja-acciones">
            <img className="icono-caja" src={up} alt='up'/>
            <div className="contenedor-label">
              <div className="label-caja">Subir archivo</div>
            </div>
          </div>
        </div>
      </div>
      <div className="contenedor-lista-buscador">
        <div className="contenedor-search">
          <img src={lupa}  alt='lupa'/>
          <input placeholder="Buscar por nombre o email." className="input-search"/>
        </div>

        <div className="contenedor-lista">
          <div className="titulo-cuentas">Tus cuentas</div>


          <div className="contenedor-listas-cartas">

          {/* <Radio.Group onChange={onChange} value={value}> */}
            {usuarios.map((usuario, index) => (
              <div className="cuenta" key={index}>
                <div className="icono-cuenta">{usuario.icono}</div>
                <div className="contenedor-email-nombre-cuenta">
                  <div className="nombre-cuenta">{usuario.nombre}</div>
                  <div className="email-cuenta">{usuario.email}</div>
                </div>
                <div className="contenedor-borrar-seleccionar">
                  <Radio value={usuario} onChange={onChange} className="seleccionar-cuenta" checked={usuariosSeleccionado.nombre === usuario.nombre} />
                </div>
              </div>
            ))}
          {/* </Radio.Group> */}
      </div>

        </div>
        <div className="contenedor-boton-cont">
        <button className={usuariosSeleccionado.length > 0 ? 'boton-primario' : 'boton-primario-disabled'} onClick={() => setModalVisible(true)} >CONTINUAR</button>
        </div>

        <Modal
        title="Confirmar selección"
        open={modalVisible}
        okText= {<Link to="/products" className='link'>Confirmar selección</Link>}
        onOk={() => {
          setModalVisible(false);
        }}
        cancelText= 'Cancelar'
        onCancel={() => setModalVisible(false)}
      >
       
          <div>
            <p>{usuariosSeleccionado.nombre} | {usuariosSeleccionado.email} </p>
          </div>
 
      </Modal>
      </div>
    </div>
  );
}
