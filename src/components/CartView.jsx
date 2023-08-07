import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { CartViewItem } from './CartViewItem'

export const CartView = () => {
  const {cart}= useContext(CartContext)
  return (
    <div>
     <h2> Mi Carrito </h2>
     <p>Aqui estaran tus Productos</p>
     {cart.map(elemento=><CartViewItem key={elemento.id} producto={elemento}/>)}
      
    </div>
    
  )
}
