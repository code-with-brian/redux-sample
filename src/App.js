import logo from "./logo.svg";
import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const pizza = useSelector((state) => state.pizza);

  const dispatch = useDispatch();


  return (
    <>
      <h1>pizza</h1>

      {pizza.toppings.map((topping) => (
        <p key={topping}>{topping}</p>
      ))}

      <button onClick={() => dispatch(addTopping("mushrooms"))}>
        Add mushrooms
      </button>
      <button onClick={() => dispatch(removeTopping("pepperoni"))}>
        Remove pepperoni
      </button>
      <button onClick={() => dispatch(isGlutenFree())}>
        {pizza.gluten ? "Remove gluten" : "Add gluten"}
      </button>
    </>
  );
}

export default App;
