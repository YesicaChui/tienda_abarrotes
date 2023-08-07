import { Link } from 'react-router-dom'
import logo from '../assets/logo_vilma.png'

import { CartWidget } from './CartWidget'
export const NavBar = () => {

  return (
    <header className='header'>
      <section className='header__container'>
        <Link to={"/"}> <img src={logo} alt="logo" className='header__logo' /></Link>


      </section>
      <nav className='navbar'>
        <Link to="/category/alimentos" className='navbar__link'>Alimentos</Link>
        <Link to="/category/bebidas" className='navbar__link'>Bebidas</Link>
        <Link to="/category/confiteria" className='navbar__link'>Confiteria</Link>
        <Link to="/category/limpieza" className='navbar__link'>Productos de Limpieza</Link>
      </nav>
      <Link to={"/cart"}>
      <CartWidget/>
      </Link>

    </header>
  )
}

