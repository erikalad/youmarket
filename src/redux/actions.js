import axios from 'axios'
  
export const cargarSaldo = (monto) => {
  const montoNumerico = parseFloat(monto.replace('$', ''));
  return {
    type: 'CARGAR_SALDO',
    payload: montoNumerico
  };
};

export const cargarProductos = () => {
  return (dispatch) => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        console.log(response.data)
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