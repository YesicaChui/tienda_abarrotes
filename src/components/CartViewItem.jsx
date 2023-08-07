import React from 'react'

export const CartViewItem = ({ producto }) => {

  return (
    <div className='card' >
      <h4>{producto.nombre}</h4>
      <img src={producto.img} alt={producto.nombre} className='img__card' />
      <p>{producto.descripcion}</p>
      <p>S/.{producto.precio}</p>
      <p>{producto.cantidad}</p>
    </div>

  )
}
