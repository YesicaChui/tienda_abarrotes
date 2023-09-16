import { Link } from 'react-router-dom'
import logo from '../assets/logo_vilma.png'

import { CartWidget } from './CartWidget'
import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
export const NavBar = () => {
  const { cart } = useContext(CartContext)
  const [menuVisible, setMenuVisible] = useState(false);
  const handleCartClick = () => {
      alert("No hay productos en el carrito");
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const hideMenu = () => {
    setMenuVisible(false);
  };

  return (
    <header className='header'>
      <section className='header__container'>
        <Link to={"/"}> <img src={logo} alt="logo" className='header__logo' /></Link>
      </section>
      <nav className={`navbar ${menuVisible ? 'active' : ''}`}>
        <Link to="/category/alimentos" className='navbar__link'  onClick={hideMenu}>Alimentos</Link>
        <Link to="/category/bebidas" className='navbar__link'  onClick={hideMenu}>Bebidas</Link>
        <Link to="/category/confiteria" className='navbar__link'  onClick={hideMenu}>Confiteria</Link>
        <Link to="/category/limpieza" className='navbar__link'  onClick={hideMenu}>Productos de Limpieza</Link>
      </nav>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {cart.length !== 0
        ? (
          <Link to={"/cart"}>
            <CartWidget />
          </Link>
        )
        : (
          <div onClick={handleCartClick}>
            <CartWidget />
          </div>
        )}
    </header>
  )
}

