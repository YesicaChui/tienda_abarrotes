import React, { useContext, useState } from 'react'
import { ItemCount } from './ItemCount'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

export const ItemDetail = ({ producto }) => {
  const [cantidad, setCantidad] = useState(1)
  const { isInCart, agregar } = useContext(CartContext)

  return (
    <div className='detail'>
      <h2>{producto.nombre}</h2>
      <img src={producto.img} alt={producto.nombre} className='detail__img' />
      <p>{producto.descripcion}</p>
      <p>S/.{producto.precio}</p>
      <ItemCount stock={producto.stock} cantidad={cantidad} setCantidad={setCantidad} />
      <br />
      <button className='button' onClick={() => agregar(producto, cantidad)} >Agregar</button>
      {isInCart(producto.id)&&<Link to="/cart" className='button btnCarrito'>Ir al Carrito</Link>}
      {/* <button className='button'>Agregar</button> */}
    </div>
  )
}
