import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const traerDatos = await fetch(
        "https://rickandmortyapi.com/api/character"
      );
      const jsonData = await traerDatos.json();
      setData(jsonData);
    } catch (error) {
      console.log(error);
    }
  }

  console.log(data);

  return (
    <>
      <div>
        <ul>
          {data && data.results.length > 0 ? (
            data.results.map((item) => (
              <li key={item.id}>
                <h4>{item.name}</h4>
                <h6>El personaje actualmente está {item.status}</h6>
              </li>
            ))
          ) : (
            <p>No hay resultados</p>
          )}
        </ul>
      </div>
    </>
  );
}

export default App;
