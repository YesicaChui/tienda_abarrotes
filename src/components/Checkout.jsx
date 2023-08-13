import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

export const Checkout = () => {
  const [values, setValues] = useState({
    nombre: "",
    direccion: "",
    email: ""
  })
  const [orderId, setOrderId] = useState(null)

  const { cart, totalCompra, vaciarCarrito } = useContext(CartContext)

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const orden = {
      cliente: values,
      items: cart,
      total: totalCompra(),
      fecha: new Date()
    }
    console.log(orden)
  }
  if (orderId) {
    return (
      <div>
        <h2>Tu compra se registro exitosamente</h2>
        <hr />
        <p>Tu número de orden es: <strong>{orderId}</strong></p>
        <Link to="/">Volver</Link>
      </div>
    )
  }

  return (
    <div>
      <h2>Checkout</h2>
      <hr />
      <form onSubmit={handleSubmit} className='d-flex flex-column  align-items-center gap-1' action="">
        <input
          className='w-25'
          type="text"
          placeholder='Nombre'
          value={values.nombre}
          onChange={handleInputChange}
          name='nombre'
        />
        <input
          className='w-25'
          type="text"
          placeholder='Direccion'
          value={values.direccion}
          onChange={handleInputChange}
          name='direccion'
        />
        <input
          className='w-25'
          type="text"
          placeholder='Tu email'
          value={values.email}
          onChange={handleInputChange}
          name='email'
        />
        <button className='btn btn-primary w-25'>Enviar</button>
      </form>
    </div>
  )
}
