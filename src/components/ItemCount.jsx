import React from 'react'

export const ItemCount = ({ stock, cantidad, setCantidad }) => {

  const aumentar = () => {
    cantidad < stock && setCantidad(cantidad + 1)
  }
  const disminuir = () => {
    cantidad > 1 && setCantidad(cantidad - 1)
  }

  return (
    <div>
      <div className='box-cantidad'>
        <button className='btnMasMenos' onClick={disminuir} >-</button>
        <span>{cantidad}</span>
        <button className='btnMasMenos' onClick={aumentar} >+</button>
      </div>
      
    </div>
  )
}
