import React from 'react'
import { useProductos } from '../hooks/useProductos'
import { useParams } from 'react-router-dom'
import { ItemDetail } from './ItemDetail'

export const ItemDetailContainer = () => {
  const {id} =useParams()
  console.log(`mi id es ${id}`)
  const {productos} =useProductos({idDetail:id})
  return (
    <main className="main"> 
      {productos.length===0? <h2>CARGANDO......</h2>:<ItemDetail producto={productos} />}
    </main>

  )
}
