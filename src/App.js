import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addTopping, removeTopping, isGlutenFree } from "./pizzaSlice";

function App() {
  const pizza = useSelector((state) => state.pizza);

  const dispatch = useDispatch();


  return (
    <>
      <h1>Pizza</h1>

      {pizza.toppings.map((topping) => (
        <p key={topping}>{topping}</p>
      ))}


      <button onClick={() => dispatch(addTopping("pepperoni"))}>
        Add pepperoni
      </button>
      <button onClick={() => dispatch(removeTopping("pepperoni"))}>
        Remove pepperoni
      </button>
      <button onClick={() => dispatch(isGlutenFree())}>
        {pizza.gluten ? "Glueten" : "Non-Gluten"}
      </button>
    </>
  );
}

export default App;
