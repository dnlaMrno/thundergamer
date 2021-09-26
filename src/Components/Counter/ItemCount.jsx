import { useState } from 'react';

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
  console.log(count);
  return (
    <>
      <div className='boton-carrito'>
        <div>
          <p className='agregar'>{count}</p>
          <button className='boton-count' onClick={handleOnClick}>+</button>
          <button className='boton-count' onClick={diminishOnClick}>-</button>
        </div>
      </div>

      <button className='agregar-cart'>agregar al carrito</button>

    </>
  );
}

