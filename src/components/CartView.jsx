import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { CartViewItem } from './CartViewItem'
import { Link } from 'react-router-dom'

export const CartView = () => {
  const { cart, borrarDelCarrito, vaciarCarrito, totalCompra } = useContext(CartContext)
  const pagar = () => {
    alert("Gracias Por Su Compra")
    vaciarCarrito()
  }



  if (cart.length === 0) {
    return (
      <div>
        <h2> Mi Carrito </h2>
        <p>Carrito vacio</p>
        <Link to={"/"} className='volver'>      <button className='button' >Ir a Comprar</button></Link>
      </div>
    )
  }
  return (
    <div>
      <h2> Mi Carrito </h2>
      <table>
        <thead>
          <tr className='fila__head'>
            <th>Nº</th>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>precio Ud.</th>
            <th>Precio Total</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((producto, index) => (
            <CartViewItem producto={producto} index={index} borrarDelCarrito={borrarDelCarrito} />
          ))}
          <tr className='fila' >
            <td></td>
            <td> </td>
            <td></td>
            <td></td>
            <td className='total__car'>TOTAL</td>
            <td className='total__car'>S/. {totalCompra().toFixed(2)}</td>
            <td>
            </td>
          </tr>
        </tbody>
      </table>
      <div className='box-buttons'>
        <button onClick={vaciarCarrito} className='button'>Vaciar Carrito</button>
        <button onClick={pagar} className='button'>Pagar</button>
      </div>
    </div>

  )
}
