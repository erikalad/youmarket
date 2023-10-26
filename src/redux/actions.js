import axios from 'axios'
  
export const cargarSaldo = (monto) => {
  const montoNumerico = parseFloat(monto.replace('$', ''));
  return {
    type: 'CARGAR_SALDO',
    payload: montoNumerico
  };
};

export const canjearProducto = (monto) => {
  return{
    type: "ACTUALIZAR_MONTO",
    payload: monto
  }
}

export const usuarioSeleccionado = (email) => {
  console.log(email)
  return{
    type: "EMAIL_USUARIO_CANJE",
    payload: email
  }
}

export const movimientoNuevo = (movimiento) => {
  console.log(movimiento)
  return{
    type: "MOVIMIENTO",
    payload: movimiento
  }
}


export const cargarProductos = () => {
  return (dispatch) => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        dispatch({
          type: 'CARGAR_PRODUCTOS',
          payload: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: 'ERROR_AL_CARGAR_PRODUCTOS',
          payload: error
        });
      });
  };
};