import React from 'react'

export const CartViewItem = ({ producto,index, borrarDelCarrito }) => {

  return (
    <tr className='fila' key={producto.id} >
    <td>{index + 1}</td>
    <td> <img src={producto.img} alt={producto.nombre} className='fila__img' /></td>
    <td>{producto.nombre}</td>
    <td>{producto.cantidad}</td>
    <td>S/. {producto.precio}</td>
    <td>S/. {(producto.cantidad * producto.precio).toFixed(2)}</td>
    <td>
      <button onClick={()=>borrarDelCarrito(producto.id)}>🗑️</button>
    </td>
  </tr>
  )
}
