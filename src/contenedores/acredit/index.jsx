/** @format */

import React, { useState } from "react";
import "./acredit.scss";
import { InputNumber } from "antd";
import { createContext } from "react";
import { Modal } from "antd";
import { message } from "antd";
import { useDispatch } from "react-redux";
import { cargarSaldo, movimientoNuevo } from "./../../redux/actions";
import { Link } from "react-router-dom";
const ReachableContext = createContext(null);

export default function Acredit() {
  const [monto, setMonto] = useState("");
  const [modal, contextHolder] = Modal.useModal();
  const [messageApi, contextHolderMessage] = message.useMessage();
  const dispatch = useDispatch();
  const info = () => {
    messageApi.info(
      "Es una aplicación de demostración por lo que el saldo es de prueba"
    );
  };

  const handleInputChange = (value) => {
    setMonto(`$${value}`);
  };

  const enviarSaldo = () => {
    dispatch(cargarSaldo(monto));
    const today = new Date();
    const formattedDate = `${today.getDate()}/${today.getMonth() + 1}`;
    const montoNumerico = parseFloat(monto.replace("$", ""));
    const mov = {
      tipo: "Carga de Saldo",
      importe: montoNumerico,
      fecha: formattedDate,
      flecha: "flechaArriba",
      email: "",
    };
    dispatch(movimientoNuevo(mov));
  };

  const handleClick = async () => {
    info();
    await modal.confirm(config);
  };

  const config = {
    title: "Revisá si está todo bien",
    content: (
      <>
        <ReachableContext.Consumer>
          {(name) => `Vas a ingresar ${monto}`}
        </ReachableContext.Consumer>
      </>
    ),
    okText: (
      <Link to="/home" className="link">
        Ingresar dinero
      </Link>
    ),
    cancelText: "Cancelar",
    onOk: () => enviarSaldo(),
  };

  return (
    <div className="contenedor-saldo">
      <div className="contenedor-saldo-valor">
        <div className="texto-saldo">Saldo</div>
        <InputNumber
          min={1}
          max={10000000}
          value={monto}
          bordered={false}
          className="valor"
          placeholder="$0"
          onChange={handleInputChange}
        />
      </div>
      <button
        className={monto !== "" ? "boton-primario" : "boton-primario-disabled"}
        onClick={handleClick}>
        CONTINUAR
      </button>

      {contextHolder}
      {contextHolderMessage}
    </div>
  );
}
