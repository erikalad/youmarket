const initialState = {
    monto: Number(localStorage.getItem('monto')) || 10000,
    productos:[],
    usuarioCanje: null,
    usuarios:[
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
    ],
    movimientos: JSON.parse(localStorage.getItem('movimientos')) || [
        {
          tipo: 'Carga de Saldo',
          importe: 10000,
          fecha: '21/01',
          flecha: "flechaArriba",
          email:''
        },
        {
          tipo: 'Envío de Premio',
          importe: 2500,
          fecha: '19/01',
          flecha: "flechaAbajo",
          email: 'cuenta2@test.com.ar'
        },
        {
            tipo: 'Envío de Premio',
            importe: 2500,
            fecha: '18/01',
            flecha: "flechaAbajo",
            email: 'cuenta1@test.com.ar'
          },
          {
            tipo: 'Envío de Premio',
            importe: 2500,
            fecha: '18/01',
            flecha: "flechaAbajo",
            email: 'cuenta3@test.com.ar'
          },
        {
            tipo: 'Carga de Saldo',
            importe: 7500,
            fecha: '17/01',
            flecha: "flechaArriba",
            email:''
          },
      ]
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
        case "ACTUALIZAR_MONTO":
          localStorage.setItem('monto', action.payload);
          return{
            ...state,
            monto: action.payload
          }

      case  "EMAIL_USUARIO_CANJE":
        return{
          ...state,
          usuarioCanje: action.payload
        }

        case "MOVIMIENTO":
          const nuevosMovimientos = [action.payload, ...state.movimientos];
          localStorage.setItem('movimientos', JSON.stringify(nuevosMovimientos));
          return {
            ...state,
            movimientos: nuevosMovimientos
          }
   
           default: return { ...state }
       }
   }
   
   export default rootReducer;