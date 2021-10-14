import { Link } from 'react-router-dom'
import { useState } from 'react'
import { MdShoppingCart } from "react-icons/md";
import { VscChromeClose, VscThreeBars, VscSymbolEvent } from "react-icons/vsc";
import { useCartContext } from '../Context/cartContext';
import '../Menu/NavBar.css'


export function NavBar() {

  const { cantidadCarrito } = useCartContext()


  const [toggle, SetToggle] = useState(false)

  const toggleHandler = () => {
    SetToggle(!toggle);
  }


  return (

    <div>

      <nav>
        <div >
          <Link className="logo" to='/'>thunder gamer <div className='fa-bolt'><VscSymbolEvent /></div></Link>
        </div>
        <ul className={toggle ? "active" : ""}>
          <li>
            <Link to='/home' className='nav-items' >Inicio</Link>
          </li>
          <li>
            <Link to='/Category/Equipos' className='nav-items' >Equipos</Link>
          </li>
          <li>
            <Link to='/Category/Accesorios' className='nav-items' >Accesorios</Link>
          </li>
        </ul>
        <div onClick={toggleHandler} className='toggle-button'>
          {toggle ? <VscChromeClose /> : <VscThreeBars />}
        </div>
        <Link to='/Cart'>
          <div className='acumulador'>
            {cantidadCarrito()}
          </div>
          <button className='boton'>
            <MdShoppingCart />
          </button>
        </Link>
      </nav>

    </div>
  )
}
