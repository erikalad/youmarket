/** @format */

import React, { useEffect, useState } from "react";
import user from "./../../imagenes/user-plus-solid 2.svg";
import up from "./../../imagenes/upload-solid 1.svg";
import lupa from "./../../imagenes/magnifying-glass-solid 1.svg";
import { useDispatch, useSelector } from "react-redux";
import { agregarUsuarios, cargarProductos, loadingAction, usuarioSeleccionado } from "./../../redux/actions";
import "./awards.scss";
import { Radio, Modal, Empty } from "antd";
import { Link } from "react-router-dom";
import FormUsuario from "../../componentes/Formulario";
import * as XLSX from 'xlsx';
import { Button } from 'antd';


export default function Awards() {
  const usuarios = useSelector((state) => state.usuarios);
  const loading = useSelector(state=>state.loading)
  const [modalVisible, setModalVisible] = useState(false);
  const [usuariosSeleccionado, setUsuariosSeleccionado] = useState("");
  const [busqueda, setBusqueda] = useState("");
  const [usuariosFiltrados, setUsuariosFiltrados] = useState([]);
  const [modalAgregarVisible, setModalAgregarVisible] = useState(false);
  const [modalSubirArchivo, setmodalSubirArchivo] = useState(false);
  const [usuariosNuevos, setUsuariosNuevos] = useState([])

  const dispatch = useDispatch();

  const handleAgregarCuenta = () => {
    setModalAgregarVisible(true);
    dispatch(loadingAction())
  };

  const handleSubirArchivo = () => {
    setmodalSubirArchivo(true);
  };


  useEffect(() => {
    dispatch(cargarProductos());
  }, [dispatch]);

  const onChange = (e) => {
    setUsuariosSeleccionado(e.target.value);
  };

  useEffect(() => {
    const filtrados = usuarios.filter(
      (usuario) =>
        usuario.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        usuario.email.toLowerCase().includes(busqueda.toLowerCase())
    );
    setUsuariosFiltrados(filtrados);
  }, [busqueda, usuarios]);


  function downloadExcel() {
    var wb = XLSX.utils.book_new();
    var headers = [['Nombre Empleado', 'Email Empleado']];
    var ws = XLSX.utils.aoa_to_sheet(headers);
    XLSX.utils.book_append_sheet(wb, ws, "Empleados");
    XLSX.writeFile(wb, "empleados.xlsx");
  }

  function handleFileUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
  
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
  
      const usuarios = jsonData.slice(1).map((row) => {
        return {
          icono: row[0]?.substring(0, 2).toUpperCase() || '',
          nombre: row[0] || '',
          email: row[1] || '',
        };
      });
  
      console.log(usuarios);
      setUsuariosNuevos(usuarios);
    };
    reader.readAsArrayBuffer(file);
  }
  


  const cargarUsuariosNuevos = () => {
    dispatch(agregarUsuarios(usuariosNuevos))
    setmodalSubirArchivo(false)
  }


  return (
    <div className="contenedor-awards">
      <div className="contenedor-agregar">
        <div className="texto-awards">Nuevas cuentas</div>
        <div className="list-icons">
          <div className="caja-acciones">
            <img className="icono-caja" src={user} alt="user"  onClick={handleAgregarCuenta}/>
            <div className="contenedor-label">
              <div className="label-caja">Agregar cuenta</div>
            </div>
          </div>
          <div className="caja-acciones">
            <img className="icono-caja" src={up} alt="up" onClick={handleSubirArchivo}/>
            <div className="contenedor-label">
              <div className="label-caja">Subir archivo</div>
            </div>
          </div>
        </div>
      </div>
      <div className="contenedor-lista-buscador">
        <div className="contenedor-search">
          <img src={lupa} alt="lupa" />
          <input
            placeholder="Buscar por nombre o email."
            className="input-search"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>

        <div className="contenedor-lista">
          <div className="titulo-cuentas">Tus cuentas</div>

          <div className="contenedor-listas-cartas">
            {usuariosFiltrados.length > 0 ? (
              usuariosFiltrados.map((usuario, index) => (
                <div className="cuenta" key={index}>
                  <div className="icono-cuenta">{usuario.icono}</div>
                  <div className="contenedor-email-nombre-cuenta">
                    <div className="nombre-cuenta">{usuario.nombre}</div>
                    <div className="email-cuenta">{usuario.email}</div>
                  </div>
                  <div className="contenedor-borrar-seleccionar">
                    <Radio
                      value={usuario}
                      onChange={onChange}
                      className="seleccionar-cuenta"
                      checked={usuariosSeleccionado.nombre === usuario.nombre}
                    />
                  </div>
                </div>
              ))
            ) : (
              <div className="empty">
              <Empty description='No se encontraron cuentas' />
              </div>
            )}
          </div>
        </div>
        <div className="contenedor-boton-cont">
          <button
            className={
              usuariosSeleccionado
                ? "boton-primario"
                : "boton-primario-disabled"
            }
            onClick={() => setModalVisible(true)}>
            CONTINUAR
          </button>
        </div>

        <Modal
          title="Confirmar selección"
          open={modalVisible}
          okText={
            <Link to="/products" className="link">
              Confirmar selección
            </Link>
          }
          onOk={() => {
            setModalVisible(false);
            dispatch(usuarioSeleccionado(usuariosSeleccionado.email));
          }}
          cancelText="Cancelar"
          onCancel={() => setModalVisible(false)}>
          <div>
            <p>
              {usuariosSeleccionado.nombre} | {usuariosSeleccionado.email}{" "}
            </p>
          </div>
        </Modal>

        <Modal
          title="Agregar Cuenta"
          open={modalAgregarVisible}
          okButtonProps={{ disabled: loading }}
          okText="OK"
          cancelText="Cancelar"
          onOk={() => setModalAgregarVisible(false)}
          onCancel={() => setModalAgregarVisible(false)}
        >
      <FormUsuario/>
      </Modal>

      <Modal
          title="Subir Archivo"
          open={modalSubirArchivo}
          okText="Subir"
          cancelText="Cancelar"
           onOk={() => cargarUsuariosNuevos()}
          onCancel={() => setmodalSubirArchivo(false)}
        >
          <div className="contenedorModalSubirArchivo">
          <div>El excel tiene que tener dos columas, la primera es Nombre de Empleado y la segunda es Correo Electrónico del Empleado</div>
          <Button  onClick={downloadExcel}>Descargar ejemplo de Excel</Button>
          <input type="file" onChange={handleFileUpload} className="inputCargarArchivo"/>
          </div>
      </Modal>

      </div>
    </div>
  );
}
