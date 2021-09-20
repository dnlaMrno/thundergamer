import { useState } from 'react';
import '../Counter/ItemCount.css'



export function ItemCount() {

  const [count, setCount] = useState(0);

  const handleOnClick = () => {
    setCount(count + 1)
  };

  const diminishOnClick = () => {
    setCount(count - 1)
  };


  return (
    <>
      <div>
        <p className='agregar'>agregar al carrito: {count}</p>
        <button className='boton-count' onClick={handleOnClick}>+</button>
        <button className='boton-count' onClick={diminishOnClick}>-</button>
      </div>
    </>
  );

}

