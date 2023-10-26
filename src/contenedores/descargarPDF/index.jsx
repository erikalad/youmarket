import React from 'react'
import './descargarPDF.scss'
import html2pdf from 'html2pdf.js';
import icono from './../../imagenes/icono.png'
import { useSelector } from 'react-redux';
import { format, parse } from 'date-fns';
import { es } from 'date-fns/locale';
import { Button, Divider, Steps } from 'antd';
import {GrDocumentDownload} from 'react-icons/gr'

export default function DescargarPDF() {
    const movimiento = useSelector(state=>state.movimiento)
    const codigoTransaccion = Math.floor(Math.random() * 1e15);

    const fechaObjeto = parse(`${movimiento.fecha}/2023`, 'dd/MM/yyyy', new Date());
    const fechaFormateada = format(fechaObjeto, 'EEEE, dd \'de\' MMMM \'del\' yyyy', { locale: es });



  const descargarPDF = () => {
    const contenedor = document.getElementById("contenedor");

    const opciones = {
      margin: [0, 0, 0, 0],
      filename: "Comprobante transacción Youmarket",
      image: { type: "jpeg", quality: 1.0 },
      html2canvas: { scale: 2 },
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "landscape",
        compressPDF: true
      },
    };

    html2pdf().set(opciones).from(contenedor).save();
  }


  return (
    <div className='contenedorDescarga'>
        <div className='contenedor-boton-descargar'>
        <Button type="primary" shape="circle" icon={<GrDocumentDownload style={{color:'white'}}/>} onClick={descargarPDF} className='botonDescargaPDF'/>
        </div>
    <div id="contenedor" className='contenedorPDF'>
     <img src={icono} alt='Youmarket' className='imagenIcono'/>
     <div>
        Comprobante de transacción
     </div>

      <Divider />
     {fechaFormateada}
      <Divider />
      
      <div className='numeroMovimiento'>${movimiento.importe},00</div>
       <Divider />

       <Steps
  progressDot
  current={2}
  items={[
    {
      title: 'De',
      description: 'Cuenta de la empresa',
    },
    {
        title: 'Para',
        description: movimiento.email === "" ? "Carga de saldo" : `Envío de Premio a ${movimiento.email}`,
      }
      
  ]}
/>
<Divider />
<div className='subtitulo-disabled'>Código de transacción</div>
{codigoTransaccion}

<Divider />
    
    </div>
    </div>
  );
}