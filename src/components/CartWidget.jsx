import { useContext } from 'react'
import cartImage from '../assets/cart.png'
import { CartContext } from '../context/CartContext'

export const CartWidget = () => {
  const {cart} = useContext(CartContext)

  return (
    <div className='cart'>
      <img src={cartImage} alt="" className='cart__img' />
      <div className='cat__notificacion'>
        <p>{cart.reduce((acumulador,elemento)=>acumulador+elemento.cantidad,0)}</p>
      </div>
    </div>

  )
}
