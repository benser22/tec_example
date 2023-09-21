import React, { useState } from "react";

interface Person {
  name: string;
  age: number;
  profession: string;
  imageUrl: string;
}

interface Props {
  people: Person[];
  showDetails: boolean;
}

const TypeScriptComponent: React.FC<Props> = ({ people, showDetails }) => {
  const [counts, setCounts] = useState<{ [index: number]: number }>({});

  const handleIncrement = (index: number) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [index]: (prevCounts[index] || 0) + 1,
    }));
  };

  const handleDecrement = (index: number) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [index]: (prevCounts[index] || 0) - 1,
    }));
  };

  return (
    <div className="container mt-4">
      <h1 className="display-8 font-weight-bold text-center text-success mt-3 mb-3 custom-font">
        TypeScript + Bootstrap
      </h1>
      <div className="row justify-content-center">
        {people.map((person, index) => (
          <div className="col-md-4" key={index}>
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={person.imageUrl}
                alt={person.name}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
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
                <p>Contador: {counts[index] || 0}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleIncrement(index)}
                  style={{ marginInline: "1vh", padding: "1.5vh" }}
                >
                  Incrementar
                </button>
                <button
                  className="btn btn-success"
                  onClick={() => handleDecrement(index)}
                  style={{ padding: "1.5vh" }}
                >
                  Decrementar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TypeScriptComponent;
