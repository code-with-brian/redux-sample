import logo from "./logo.svg";
import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const pizza = useSelector((state) => state.pizza);

  return (
    <>
      <h1>pizza</h1>

      {pizza.toppings.map((topping) => (
        <p key={topping}>{topping}</p>
      ))}
    </>
  );
}

export default App;
