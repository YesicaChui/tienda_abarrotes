
import React from 'react'
import { Link } from 'react-router-dom'

export const ItemCard = ({ producto }) => {
  return (

    <div className='card' >
      <h4>{producto.nombre}</h4>
      <img src={producto.img} alt={producto.nombre} className='img__card' />
      <p>{producto.descripcion}</p>
      <p>{producto.stock==0?"Producto no Disponible":`Disponibles: ${producto.stock}`}</p>
      <p>S/.{producto.precio}</p>
      {producto.stock==0?<div className='button'>Ver mas</div>: <Link to={`/item/${producto.id}`} className='button'>Ver mas </Link>}
     
    </div>

  )
}
