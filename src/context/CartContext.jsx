import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const borrarDelCarrito = (id) => {
    setCart(cart.filter(producto => producto.id !== id))
  }

  const vaciarCarrito = () => {
    setCart([])
  }

  const cantidadCompra = () => cart.reduce((acumulador, elemento) => acumulador + elemento.cantidad, 0)

  const agregar = (producto, cantidad) => {
    const indiceProducto = cart.findIndex((prod) => prod.id === producto.id)
    //si no lo encuentra insertarlo directamente sin preguntar
    if (indiceProducto === -1) {
      const nuevoProducto = { ...producto, cantidad }
      setCart([...cart, nuevoProducto])
    } else {
      const respuesta = confirm(`Hay ${cart[indiceProducto].cantidad} productos de este tipo en el Carrito ¿Desea Agregar ${cantidad} Más?`)
      if (!respuesta) return
      const copiaCarrito = [...cart]
      copiaCarrito[indiceProducto].cantidad += cantidad
      setCart(copiaCarrito)

    }
  }

  const updateCart=(id,cantidad)=>{
    const indiceProducto = cart.findIndex((prod) => prod.id === id)
    const copiaCarrito = [...cart]
    copiaCarrito[indiceProducto].cantidad = cantidad
    setCart(copiaCarrito)
  }

  const isInCart=(idProd)=>{
    return cart.some((prod) => prod.id === idProd)
  }

  const totalCompra = () => cart.reduce((acumulador, elemento) => acumulador + elemento.cantidad * elemento.precio, 0)
  return (
    <CartContext.Provider value={{ cart, borrarDelCarrito, vaciarCarrito, cantidadCompra, agregar, totalCompra, updateCart, isInCart }}>
      {children}
    </CartContext.Provider>
  )
}