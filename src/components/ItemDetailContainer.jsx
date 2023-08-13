import React from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from './ItemDetail'
import { useProductos } from '../hooks/useProductos'

export const ItemDetailContainer = () => {
  const {id} =useParams()
  const {productos} =useProductos({id,type:"getOne"})
  return (
    <main className="main"> 
      {!productos? <h2>CARGANDO......</h2>:<ItemDetail producto={productos} />}
    </main>

  )
}
