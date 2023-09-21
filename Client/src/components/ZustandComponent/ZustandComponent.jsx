import React from 'react';
import useStore from '../ZustandStore/useStore';
import './ZustandComponent.css';



function ZustandComponent() {
  const { count, increment, decrement } = useStore();

  return (
    <div className="zustand-container"> {/* Aplica una clase CSS al contenedor */}
      <h1>Zustand</h1>
      <p className="count-text">Count: {count}</p> {/* Aplica una clase CSS al texto */}
      <div className="button-container"> {/* Aplica una clase CSS al contenedor de botones */}
        <button className="increment-button" onClick={increment}>Increment</button> {/* Aplica una clase CSS al botón de incremento */}
        <button className="decrement-button" onClick={decrement}>Decrement</button> {/* Aplica una clase CSS al botón de decremento */}
      </div>
    </div>
  );
}

export default ZustandComponent;
