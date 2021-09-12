import { useState } from 'react';



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
        <p>Cantidad en Stock: {count}</p>
        <button onClick={handleOnClick}>+</button>
        <button onClick={diminishOnClick}>-</button>
      </div>
    </>
  );

}

