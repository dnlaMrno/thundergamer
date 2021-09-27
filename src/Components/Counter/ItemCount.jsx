import { useState } from 'react';
import { Link } from 'react-router-dom'
import '../Counter/ItemCount.css'



export function ItemCount({ stock, initial }) {

  const [handlerClick, SetHandlerClick] = useState(true)

  const toggleHandler = () => {
    SetHandlerClick(false);
  }


  const [count, setCount] = useState(initial);

  const handleOnClick = () => {
    if (count < stock) {
      setCount(count + 1)
    }
  };

  const diminishOnClick = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  };
  console.log(count);
  return (
    <>
      <div className='boton-carrito'>
        <div>
          <label className='agregar'>{count}</label>
          <button className='boton-count' onClick={handleOnClick}>+</button>
          <button className='boton-count' onClick={diminishOnClick}>-</button>
        </div>
      </div>


      {
        handlerClick
          ?
          <button onClick={toggleHandler} className='agregar-cart'>agregar al carrito</button>
          :
          <Link to='/Cart'>
            <button className='agregar-cart'>terminar compra</button>
          </Link>
      }



    </>
  );
}

