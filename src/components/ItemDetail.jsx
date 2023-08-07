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
      alert("El Producto ya se Encuentra en el carro")
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
      <ItemCount stock={producto.stock} cantidad={cantidad} setCantidad={setCantidad} agregar={agregar}/>
      {/* <button className='button'>Agregar</button> */}
    </div>
  )
}
