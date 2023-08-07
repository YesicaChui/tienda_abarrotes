import { useContext } from 'react'
import cartImage from '../assets/cart.png'
import { CartContext } from '../context/CartContext'

export const CartWidget = () => {
  const { cantidadCompra } = useContext(CartContext)

  return (
    <div className='cart'>
      <img src={cartImage} alt="" className='cart__img' />
      <div className='cat__notificacion'>
        <p>{cantidadCompra()}</p>
      </div>
    </div>
  )
}
