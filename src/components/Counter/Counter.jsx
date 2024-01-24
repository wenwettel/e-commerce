import React from 'react';
import './counterStyled.css';
import { useCount } from '../../hooks/useCount';

function Counter() {
  const { add, subtraction, valor } = useCount(0, 0, 4);

  /*Ciclos del componente: mount- change - dismount*/
  /*useEffect(() => {
    console.log('montaje');
    console.log(`El componente se actualizo ${valor}`);
    return () => {
      console.log('se desmonto el componente');
    };
  }, [valor]);*/

  return (
    <div className="counter">
      <p>{valor}</p>
      <button onClick={subtraction}>-</button>
      <button onClick={add}>+</button>
    </div>
  );
}

export default Counter;
