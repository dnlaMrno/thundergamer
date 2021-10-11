import { useState } from 'react'

import '../Counter/ItemCount.css'



export function ItemCount({ stock, initial }) {

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
  return (
    <>
      <div className='boton-carrito'>
        <div>
          <label className='agregar'>{count}</label>
          <button className='boton-count' onClick={handleOnClick}>+</button>
          <button className='boton-count' onClick={diminishOnClick}>-</button>
        </div>
      </div>
    </>
  );
}

