import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { createOrder } from '../helpers/services'

export const Checkout = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [values, setValues] = useState({
    nombre: "",
    direccion: "",
    email: "",
    confirmarEmail: ""
  })
  const [orderId, setOrderId] = useState(null)

  const { cart, totalCompra, vaciarCarrito } = useContext(CartContext)

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validateForm(values);
    if (validationErrors != "") {
      alert(validationErrors)
      return;
    }
    setIsSubmitting(true);
    const orden = {
      cliente: {
        nombre: values.nombre,
        direccion: values.direccion,
        email: values.email,
      },
      items: cart,
      total: totalCompra(),
      fecha: new Date()
    }

    createOrder(orden)
      .then(res => {
        vaciarCarrito()
        setOrderId(res)
      })
      .catch(e => alert(e))
      .finally(()=>{
        setIsSubmitting(false);
      })
  }

  const validateForm = (values) => {
    let error = ""
    if (!values.nombre.trim()) {
      error = "El nombre es requerido"
    }
    else if (!values.direccion.trim()) {
      error = "La dirección es requerida"
    }
    else if (!values.email.trim()) {
      error = "El correo electrónico es requerido"
    }
    else if (!isValidEmail(values.email)) {
      error = "Ingresa un correo electrónico válido"
    }
    else if (values.email !== values.confirmarEmail) {
      error = "Los correos electrónicos no coinciden"
    }

    return error;
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  };

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
      <form onSubmit={handleSubmit} className='formulario' action="">
        <input
          className='formulario__input'
          type="text"
          placeholder='Nombre'
          value={values.nombre}
          onChange={handleInputChange}
          name='nombre'
        />
        <input
          className='formulario__input'
          type="text"
          placeholder='Direccion'
          value={values.direccion}
          onChange={handleInputChange}
          name='direccion'
        />
        <input
          className='formulario__input'
          type="text"
          placeholder='Tu email'
          value={values.email}
          onChange={handleInputChange}
          name='email'
        />
        <input
          className='formulario__input'
          type="text"
          placeholder='Repite tu email'
          value={values.confirmarEmail}
          onChange={handleInputChange}
          name='confirmarEmail'
        />
        <button className='button' disabled={isSubmitting}>Enviar</button>
      </form>
    </div>
  )
}
