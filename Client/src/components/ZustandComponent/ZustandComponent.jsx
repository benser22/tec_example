import React from "react";
import useStore from "../ZustandStore/useStore";
import "./ZustandComponent.css";

function ZustandComponent() {
  const { count, increment, decrement } = useStore();

  // Función para restablecer el almacenamiento local
  const resetLocalStorage = () => {
    localStorage.removeItem("zustandCount"); // Elimina la clave "zustandCount" del localStorage
    window.location.reload(); // Recarga la página para reflejar el cambio
  };

  return (
    <div className="zustand-container">
      <h1 className="zustand-title">Zustand + Local Storage</h1>
      <p className="count-text">Count: {count}</p>
      <div className="button-container">
        <button className="increment-button" onClick={increment}>
          Increment
        </button>
        <button className="decrement-button" onClick={decrement}>
          Decrement
        </button>
        <button className="reset-button" onClick={resetLocalStorage}>
          Reset Local Storage
        </button>
      </div>
    </div>
  );
}

export default ZustandComponent;
