const initialState = {
    monto: Number(localStorage.getItem('monto')) || 10000,
    productos:[]
   }
   
   const rootReducer = (state = initialState, action) => {
       switch (action.type) {
         case 'CARGAR_SALDO':
           const valor= state.monto + action.payload
           localStorage.setItem('monto', valor);
           
           return{
               ...state,
               monto: valor
           }
        case 'CARGAR_PRODUCTOS':
            return{
                ...state,
                productos:action.payload
            }
   
           default: return { ...state }
       }
   }
   
   export default rootReducer;