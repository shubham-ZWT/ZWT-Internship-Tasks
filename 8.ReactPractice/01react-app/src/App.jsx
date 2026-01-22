import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const increaseCounter = () => {
    setCounter(counter + 1);
  };
  const decreaseCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h2>Counter : {counter}</h2>
      <button onClick={increaseCounter}>Increase Counter</button>
      <button onClick={decreaseCounter}>Decrease Counter</button>
    </>
  );
}

export default App;
