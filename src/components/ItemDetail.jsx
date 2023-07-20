import React from 'react'

export const ItemDetail = ({producto}) => {
  return (
    <div className='detail'>
      <h2>{producto.nombre}</h2>
      <img src={producto.img} alt={producto.nombre} className='detail__img'/>
      <p>{producto.descripcion}</p>
      <p>S/.{producto.precio}</p>
      <button className='button'>Agregar</button>
    </div>
  )
}
