import React, { useState } from "react";

interface Person {
  name: string;
  age: number;
  profession: string;
  imageUrl: string;
}

interface Props {
  person: Person;
  showDetails: boolean;
}

const TypeScriptComponent: React.FC<Props> = ({ person, showDetails }) => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleIncrement = (cardNumber: number) => {
    if (cardNumber === 1) {
      setCount1(count1 + 1);
    } else if (cardNumber === 2) {
      setCount2(count2 + 1);
    }
  };

  const handleDecrement = (cardNumber: number) => {
    if (cardNumber === 1) {
      setCount1(count1 - 1);
    } else if (cardNumber === 2) {
      setCount2(count2 - 1);
    }
  };

  return (
    <div className="container mt-4">
      <h1>TypeScript + Bootstrap</h1>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={person.imageUrl}
              alt={person.name}
              className="card-img-top"
            />
            <div className="card-body">
              <h2 className="card-title">{person.name}</h2>
              {showDetails && (
                <div className="card-text">
                  <p>Edad: {person.age}</p>
                  <p>Profesión: {person.profession}</p>
                </div>
              )}
            </div>
            <div className="card-footer">
              <p>Contador: {count1}</p>
              <button
                className="btn btn-primary"
                onClick={() => handleIncrement(1)}
                style={{ marginInline: "1vh", padding: "1.5vh" }}
              >
                Incrementar
              </button>
              <button
                className="btn btn-success"
                onClick={() => handleDecrement(1)}
                style={{ padding: "1.5vh" }}
              >
                Decrementar
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={person.imageUrl}
              alt={person.name}
              className="card-img-top"
            />
            <div className="card-body">
              <h2 className="card-title">{person.name}</h2>
              {showDetails && (
                <div className="card-text">
                  <p>Edad: {person.age}</p>
                  <p>Profesión: {person.profession}</p>
                </div>
              )}
            </div>
            <div className="card-footer">
              <p>Contador: {count2}</p>
              <button
                className="btn btn-primary"
                onClick={() => handleIncrement(2)}
                style={{ marginInline: "1vh", padding: "1.5vh" }}
              >
                Incrementar
              </button>
              <button
                className="btn btn-success"
                onClick={() => handleDecrement(2)}
                style={{ padding: "1.5vh" }}
              >
                Decrementar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypeScriptComponent;
