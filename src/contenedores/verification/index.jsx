import React, { useState } from 'react';
import './verification.scss';
import { Link } from 'react-router-dom';

export default function Verification() {
  const [codes, setCodes] = useState(['', '', '', '', '', '']);
  const [showContinueButton, setShowContinueButton] = useState(false);
  const [error, setError] = useState(false);


  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newCodes = [...codes];
      newCodes[index] = value;
      setCodes(newCodes);
      if (index < 5 && value !== '') {
        document.getElementById(`codigo-${index + 1}`).focus();
      } else if (index === 5 && value !== '') {
        const enteredCode = newCodes.join('');
        if (enteredCode === '239865') {
          setShowContinueButton(true); // Mostrar el botón "Continuar"
          setError(false)
        } else {
          setShowContinueButton(false); // Ocultar el botón "Continuar"
          setError(true)
        }
      }
    }
  }

  return (
    <div className='contenedor-verification'>
      <div className='texto'>Te acabamos de enviar un correo a </div>
      <div className='mail'>test@test.com.ar</div>
      <div className='texto'>Ingresa el código de 6 dígitos recibido</div>
      <div className='contenedor-codigo'>
        {codes.map((code, index) => (
          <input
            key={index}
            id={`codigo-${index}`}
            className='codigo'
            type='text'
            maxLength='1'
            value={code}
            onChange={(e) => handleChange(e, index)}
          />
        ))}
      </div>
      {error && <div>Código incorrecto</div>}

      {showContinueButton && (
        <Link to='/home'><button className='boton-primario'>CONTINUAR</button></Link>
      )}
      
      <button className={error ? 'boton-primario' : 'boton-primario-disabled'}>REENVIAR CÓDIGO</button>
    </div>
  )
}