import axios from 'axios'
  
export const cargarSaldo = (monto) => {
  const montoNumerico = parseFloat(monto.replace('$', ''));
  return {
    type: 'CARGAR_SALDO',
    payload: montoNumerico
  };
};

export const agregarUsuario = (usuario) => {
  return {
    type: 'AGREGAR_USUARIO',
    payload: usuario
  };
};

export const canjearProducto = (monto) => {
  return{
    type: "ACTUALIZAR_MONTO",
    payload: monto
  }
}

export const loadingAction = () => {
  return{
    type: "LOADING",
  }
}

export const comprobante = (movimiento) => {
  return{
    type: "COMPROBANTE",
    payload: movimiento
  }
}

export const usuarioSeleccionado = (email) => {
  return{
    type: "EMAIL_USUARIO_CANJE",
    payload: email
  }
}

export const movimientoNuevo = (movimiento) => {
  return{
    type: "MOVIMIENTO",
    payload: movimiento
  }
}

export const correoAuth = (email) => {
  return{
    type: "AUTH",
    payload: email
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