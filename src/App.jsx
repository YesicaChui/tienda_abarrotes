import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom"
import { ItemListContainer } from "./components/ItemListContainer"
import { ItemDetailContainer } from "./components/ItemDetailContainer"
import { NavBar } from "./components/NavBar"
import { CartProvider } from "./context/CartContext"
import { CartView } from "./components/CartView"
import { Checkout } from "./components/Checkout"
import { Footer } from "./components/Footer"

function App() {


  return (
    <CartProvider>


      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartView />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartProvider>

  )
}

export default App
