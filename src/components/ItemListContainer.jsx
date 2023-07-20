import { useParams } from "react-router-dom"
import { useProductos } from "../hooks/useProductos"
import { ItemList } from "./ItemList"


export const ItemListContainer = () => {
  const {id} = useParams()
  console.log(id)
  const {productos} = useProductos({id})
  return (
    <main className="main"> 
      <ItemList productos={productos}/>

    </main>
  )
}
