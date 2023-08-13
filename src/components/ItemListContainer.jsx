import { useParams } from "react-router-dom"
import { useProductos } from "../hooks/useProductos"
import { ItemList } from "./ItemList"


export const ItemListContainer = () => {
  const {id} = useParams()

  const {productos} = useProductos({id,type:"getAll"})
  return (
    <main className="main"> 
      <ItemList productos={productos}/>

    </main>
  )
}
