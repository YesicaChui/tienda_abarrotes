import { ItemCard } from "./ItemCard"


export const ItemList = ({productos}) => {
  return (
    <div>
       <h2>Bienvenidos</h2>
      <hr />      
      <div className='main__cards'>
        {productos.length===0? <h2>CARGANDO......</h2>:productos.map((producto, indice) =>
         <ItemCard producto={producto} key={indice}/>
        )}

      </div>

    </div>
  )
}
