import React, { useContext, useState } from 'react'
import { ItemCount } from './ItemCount'
import { CartContext } from '../context/CartContext'

export const ItemDetail = ({producto}) => {

  const [cantidad, setCantidad]= useState(1)
  const {cart, setCart} = useContext(CartContext)
  console.log(cart)


  const agregar = ()=>{
    console.log("producto Agregado")
    //bucar el productgo en el carrito
    const indiceProducto = cart.findIndex((prod)=>prod.id===producto.id)
     //si no lo encuentra insertarlo directamente sin preguntar
    if(indiceProducto===-1){
      const nuevoProducto = {...producto,cantidad}
      setCart([...cart,nuevoProducto])
    }else{
      const respuesta = confirm(`Hay ${cart[indiceProducto].cantidad} productos de este tipo en el Carrito ¿Desea Agregar ${cantidad} Más?`)
      if(!respuesta) return
      const copiaCarrito = [...cart]
      copiaCarrito[indiceProducto].cantidad+=cantidad
      setCart(copiaCarrito)

    }
    //si lo encuentro preguntar con un alert si desea añadir más
    //si desea añadir actualizar el producto según el id
   


  }
  
  return (
    <div className='detail'>
      <h2>{producto.nombre}</h2>
      <img src={producto.img} alt={producto.nombre} className='detail__img'/>
      <p>{producto.descripcion}</p>
      <p>S/.{producto.precio}</p>
      <ItemCount stock={producto.stock} cantidad={cantidad} setCantidad={setCantidad}/>
      <br />
      <button className='button' onClick={agregar} >Agregar</button>
      {/* <button className='button'>Agregar</button> */}
    </div>
  )
}
