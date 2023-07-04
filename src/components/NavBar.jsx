import logo from '../assets/logo_vilma.png'

import { CartWidget } from './CartWidget'
export const NavBar = () => {

  return (
    <header className='header_principal'>
      <section className='header_logo'>
        <img src={logo} alt="logo" className='header_logo' />
      </section>

      <section className='header_categorias_principal'>
        <ul className='header_categorias_principal' >
          <li>Alimentos</li>
          <li>Bebidas</li>
          <li>Cofiteria</li>
          <li>Productos de Limpieza</li>
        </ul>
      </section>
      <CartWidget />
    </header>
  )
}

