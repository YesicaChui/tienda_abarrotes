import { useEffect, useState } from "react"
import { pedirDatos } from "../helpers/services"

export const useProductos = ({id,type}) => {
  const [productos, setProductos] = useState(type=='getOne'?null:[])
  useEffect(() => {
    pedirDatos(id,type)
      .then((res) => {
        setProductos(res)
        
      })
      .catch((error) => {
        console.log(error)
      })
  }, [id])

  return {productos}
}
