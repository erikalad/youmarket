/** @format */

import React, { useEffect, useState } from "react";
import user from './../../imagenes/user-plus-solid 2.svg'
import up from './../../imagenes/upload-solid 1.svg'
import lupa from './../../imagenes/magnifying-glass-solid 1.svg'
import { useDispatch, useSelector } from 'react-redux';
import { cargarProductos, usuarioSeleccionado } from './../../redux/actions';
import './awards.scss'
import { Radio,Modal } from "antd";
import { Link } from "react-router-dom";

export default function Awards() {
  const usuarios = useSelector(state=>state.usuarios)
  const [modalVisible, setModalVisible] = useState(false);
  const [usuariosSeleccionado, setUsuariosSeleccionado] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cargarProductos());
  }, [dispatch]);

  const onChange = (e) => {
    setUsuariosSeleccionado(e.target.value);
  };

  

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
        <button className={usuariosSeleccionado ? 'boton-primario' : 'boton-primario-disabled'} onClick={() => setModalVisible(true)} >CONTINUAR</button>
        </div>

        <Modal
        title="Confirmar selección"
        open={modalVisible}
        okText= {<Link to="/products" className='link'>Confirmar selección</Link>}
        onOk={() => {
          setModalVisible(false);
          dispatch(usuarioSeleccionado(usuariosSeleccionado.email))
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
