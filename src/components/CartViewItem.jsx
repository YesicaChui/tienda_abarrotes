import React, { useContext } from 'react'
import { ItemCount } from './ItemCount'
import { CartContext } from '../context/CartContext'

export const CartViewItem = ({ producto,index, borrarDelCarrito }) => {

  const {updateCart} = useContext(CartContext)

  const setCantidad = (cantidad)=>{
    updateCart(producto.id, cantidad)
  }

  return (
    <tr className='fila' key={producto.id} >
    <td>{index + 1}</td>
    <td> <img src={producto.img} alt={producto.nombre} className='fila__img' /></td>
    <td>{producto.nombre}</td>
    <td> <ItemCount cantidad={producto.cantidad} stock={producto.stock} setCantidad={setCantidad}/></td>
    <td>S/. {producto.precio}</td>
    <td>S/. {(producto.cantidad * producto.precio).toFixed(2)}</td>
    <td>
      <button className='btnDelete' onClick={()=>borrarDelCarrito(producto.id)}>🗑️</button>
    </td>
  </tr>
  )
}
