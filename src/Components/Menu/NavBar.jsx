import { Link } from 'react-router-dom'
import { useState } from 'react'
import { CartWidget } from '../Cart/CartWidget'
import '../Menu/NavBar.css'



export function NavBar() {

  const [toggle, SetToggle] = useState(false)

  const toggleHandler = () => {
    SetToggle(!toggle);
  }


  return (
    <>
      <nav>
        <div >
          <Link className="logo" to='/Home'>thunder gamer<i className="fas fa-bolt" /></Link>
        </div>
        <ul className={toggle ? "active" : ""}>
          <li>
            <Link to='/Home' className='nav-items' >Inicio</Link>
          </li>
          <li>
            <Link to='/Category/Equipos' className='nav-items' >Equipos</Link>
          </li>
          <li>
            <Link to='/Category/Accesorios' className='nav-items' >Accesorios</Link>
          </li>

        </ul>
        <div onClick={toggleHandler} className='toggle-button'>
          <i className={toggle ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <CartWidget />
      </nav>

    </>
  )
}
