import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

import FruitList from "./components/FruitList";

function App() {
  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ]);

  const totalPrice = fruits.reduce((acc, itemAtual) => {
    acc += itemAtual.price;
    return acc;
  }, 0);

  function filterRedFruits() {
    setFruits(fruits.filter((item) => item.color === "red"));
  }

  return (
    <div className="App">
      <span>Preço total: {totalPrice}</span>
      {/* <ul>
        {fruits.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul> */}
      <FruitList parameter={fruits} />

      <button onClick={filterRedFruits}>Mostrar frutas vermelhas</button>
    </div>
  );
}

export default App;
