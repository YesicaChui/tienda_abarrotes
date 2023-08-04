import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ItemListContainer } from "./components/ItemListContainer"
import {ItemDetailContainer} from "./components/ItemDetailContainer"
import { NavBar } from "./components/NavBar"
import { CartProvider } from "./context/CartContext"

function App() {


  return (
    <CartProvider>


    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={ <ItemListContainer  />}/>
        <Route path="/category/:id" element={ <ItemListContainer  />}/>
        <Route path="/item/:id" element={ <ItemDetailContainer />}/>

      </Routes>
     
    </BrowserRouter>
    </CartProvider>

  )
}

export default App
