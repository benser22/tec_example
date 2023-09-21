import React from 'react';
import { create } from 'zustand';

import './ZustandComponent.css';

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

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
