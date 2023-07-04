import logo from '../assets/logo_vilma.png'

import { CartWidget } from './CartWidget'
export const NavBar = () => {

  return (
    <header className='header'>
      <section className='header__container'>
        <img src={logo} alt="logo" className='header__logo' />
        
      </section>
      <nav className='navbar'>
          <a href="#" className='navbar__link'>Alimentos</a>
          <a href="#" className='navbar__link'>Bebidas</a>
          <a href="#" className='navbar__link'>Confiteria</a>
          <a href="#" className='navbar__link'>Productos de Linpieza</a>
        </nav>
      <CartWidget />

    </header>
  )
}

