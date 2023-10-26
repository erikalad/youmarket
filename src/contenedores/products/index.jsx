import React from 'react'
import { useSelector } from 'react-redux'
import { Button, Card } from 'antd';
import {FaGift} from 'react-icons/fa'
import './products.scss'
const { Meta } = Card;

export default function Products() {
    const products = useSelector(state=>state.productos)
  return (
    <div className='contenedor-productos'>
    {products.map((product) => (
      <div key={product.id}>
         <Card
    style={{
      width: 300,
      marginBottom:10
    }}
    cover={
      <img
      alt={product.title}
        src={product.image}
      />
    }
    actions={[
        <button className='boton-primario'>CANJEAR</button>,
    ]}
  >
     <Meta
              title={product.title}
              description={`$${product.price * 100}`} 
            />
  </Card>
  </div>
    ))}
  </div>
  )
}
