import React, { useState } from 'react'
import { ItemCount } from './ItemCount'

export const ItemDetail = ({producto}) => {

  const [cantidad, setCantidad]= useState(1)

  const agregar = ()=>{
    console.log("producto Agregado")
  }
  return (
    <div className='detail'>
      <h2>{producto.nombre}</h2>
      <img src={producto.img} alt={producto.nombre} className='detail__img'/>
      <p>{producto.descripcion}</p>
      <p>S/.{producto.precio}</p>
      <ItemCount stock={producto.stock} cantidad={cantidad} setCantidad={setCantidad} agregar={agregar}/>
      {/* <button className='button'>Agregar</button> */}
    </div>
  )
}
