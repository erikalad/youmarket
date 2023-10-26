import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./products.scss";
import { Tooltip, Modal, Select } from "antd";
import { canjearProducto, movimientoNuevo } from "../../redux/actions";

export default function Products() {
  const products = useSelector((state) => state.productos);
  const usuarioSeleccionado = useSelector(state=>state.usuarioCanje)
  const monto = useSelector((state) => state.monto);
  const dispatch = useDispatch();
  const [modal, contextHolder] = Modal.useModal();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [orden, setOrden] = useState("");

  const handleChangeOrden = (value) => {
    setOrden(value);
  };



  const handleCanjear = (product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  const handleConfirmCanje = () => {
    if (selectedProduct) {
      const newMonto = monto - selectedProduct.price * 100;
      dispatch(canjearProducto(newMonto));
    }
    setModalVisible(false);
    const today = new Date();
    const formattedDate = `${today.getDate()}/${today.getMonth() + 1}`;

    const mov =  {
      tipo: 'Envío de Premio',
      importe: (selectedProduct.price * 100),
      fecha: formattedDate,
      flecha: "flechaAbajo",
      email:usuarioSeleccionado
    }
    dispatch(movimientoNuevo(mov))
    countDown()
    
  };

  const handleCancelCanje = () => {
    setModalVisible(false);
  }

  const countDown = () => {
    let secondsToGo = 5;
    const instance = modal.success({
      title: 'Éxito',
      content: (
      <div>
       <div>Tu transacción se realizó con éxito y se envió a: {usuarioSeleccionado}</div>
       <div>Esta ventana se va a cerrar en {secondsToGo} segundos</div>
      </div>)
    });
    const timer = setInterval(() => {
      secondsToGo -= 1;
      instance.update({
        content: (
          <div>
           <div>Tu transacción se realizó con éxito y se envió a: {usuarioSeleccionado}</div>
          <div>Esta ventana se va a cerrar en {secondsToGo} segundos</div>
          </div>)
      });
    }, 1000);
    setTimeout(() => {
      clearInterval(timer);
      instance.destroy();
    }, secondsToGo * 1000);
  };


  let productosFiltrados = [...products]; 

  if (orden === "menorMayor") {
    productosFiltrados.sort((a, b) => a.price - b.price); 
  } else if (orden === "mayorMenor") {
    productosFiltrados.sort((a, b) => b.price - a.price); 
  }

  return (
    <div>
       <div className="produtos-titulo">Productos</div>
  
    <Select
        placeholder="Ordenar por precio"
        style={{
          width: "90%",
          margin: "1rem",
        }}
        onChange={handleChangeOrden}
        options={[
          {
            value: "menorMayor",
            label: "Menor a Mayor",
          },
          {
            value: "mayorMenor",
            label: "Mayor a Menor",
          },
        ]}
      />
       <div className="product-container">
      {productosFiltrados.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.title} />
          <div className="card-details">
            <h5>{product.title}</h5>
            <p>{`$${product.price * 100}`}</p>
            {monto < product.price * 100 ? (
              <Tooltip title="Tu saldo es insuficiente">
                <button
                  className="boton-primario-disabled boton-canjear"
                >
                  CANJEAR
                </button>
              </Tooltip>
            ) : (
              <button
                className="boton-primario boton-canjear"
                onClick={() => handleCanjear(product)}
              >
                CANJEAR
              </button>
            )}
          </div>
        </div>
      ))}
      <Modal
        title="Confirmar Canje"
        open={modalVisible}
        okText="Confirmar"
        onOk={handleConfirmCanje}
        onCancel={handleCancelCanje}
      >
        <p>¿Estás seguro que deseas canjear este producto?</p>
      </Modal>

      <>
      {contextHolder}
    </>

  
    
    </div>
    </div>
  );
}