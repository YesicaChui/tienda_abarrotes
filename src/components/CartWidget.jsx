import cart from '../assets/cart.png'

export const CartWidget = () => {
  return (
    <div className='cart'>
      <img src={cart} alt="" className='cart__img' />
      <div className='cat__notificacion'>
        <p>0</p>
      </div>
    </div>

  )
}
