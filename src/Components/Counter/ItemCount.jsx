import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Counter/ItemCount.css'



export function ItemCount({ stock, initial, onAdd }) {

  const [count, setCount] = useState(initial);

  const [handler, SetHandler] = useState(true)


  const handleOnClick = () => {
    if (count < stock) {
      setCount(count + 1)
    }
  }

  const diminishOnClick = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  const agregarCarro = () => {
    onAdd(count)
    SetHandler(false);
  }

  return (

    <div>
      <div className='boton-carrito'>
        <div>
          <label className='agregar'>{count}</label>
          <button className='boton-count' onClick={handleOnClick}>+</button>
          <button className='boton-count' onClick={diminishOnClick}>-</button>
        </div>
      </div>

      {
        handler
          ?
          <button onClick={agregarCarro} className='agregar-cart'>agregar al carrito</button>
          :
          <div>
            <Link to='/Cart'>
              <button className='agregar-cart'>ir al carrito</button>
            </Link>
            <Link to='/Home'>
              <button className='seguir-cart'>seguir comprando</button>
            </Link>
          </div>
      }
    </div>
  )
}

