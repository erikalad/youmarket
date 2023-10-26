import React, { useState } from 'react';
import './movimientos.scss';
import flechaArriba from "./../../imagenes/arrow-up-solid 1.svg";
import flechaAbajo from "./../../imagenes/arrow-down-solid 1.svg";
import { useSelector } from 'react-redux';
import { Select } from 'antd';

export default function Movimientos() {
    const movimientos = useSelector(state => state.movimientos);
    const [filtro, setFiltro] = useState('Todos los movimientos'); // Estado para el filtro
  
    const handleChange = (value) => {
      setFiltro(value); // Actualizar el estado del filtro al seleccionar una opción
    };
  
    const movimientosFiltrados = filtro === 'Todos los movimientos'
      ? movimientos
      : movimientos.filter(movimiento => movimiento.tipo === filtro);


  return (
    <div>
     
      <div className="contenedor-ultimos-mov">

        <div className="ultmov">Movimientos</div>

        <Select
        placeholder='Todos los movimientos'
        style={{
        width: '100%',
        marginTop: '1rem',
        marginBottom: '1rem'
      }}
      onChange={handleChange}
      options={[
        {
          value: 'Envío de Premio',
          label: 'Envío de Premio',
        },
        {
            value: 'Carga de Saldo',
            label: 'Carga de Saldo',
          },
          {
            value: 'Todos los movimientos',
            label: 'Todos los movimientos',
          }
      ]}
    />
        <div className="contenedor-cada-mov2">
          {movimientosFiltrados.map((movimiento, index) => (
            <div className="carta-mov" key={index}>
              <div className="contenedor-flecha-saldo">
                <div className="contenedor-flecha">
                  <img src={movimiento.flecha === "flechaAbajo" ? flechaAbajo : flechaArriba } alt={movimiento.tipo} />
                </div>
                <div>
                <div>{movimiento.tipo}</div>
                <div>{movimiento.email}</div>
                </div>
              </div>

              <div className="contenedor-importe-fecha">
                <div>{movimiento.flecha === "flechaArriba" ? '+' : '-'}${movimiento.importe},00</div>
                <div>{movimiento.fecha}</div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}