import React from "react";
import { useReducer } from "react";

const ACTION = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  RESET: "reset",
  SET: "set",
};

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    case "set":
      return { count: parseInt(action.payload, 10) };
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const handelIncrement = () => {
    dispatch({ type: ACTION.INCREMENT });
  };
   
  const handelDecrement = () => {
    dispatch({ type: ACTION.DECREMENT });
  };

  const handelReset = () => {
    dispatch({ type: ACTION.RESET });
  };

  const handelSet = () => {
    const setvalue = document.getElementById("counter").value;
    dispatch({ type: ACTION.SET, payload: setvalue });
  };


  return (
    <>
      <h1>Counter :{state.count}</h1>
      <button onClick={handelIncrement}>Inrement</button>
      <button onClick={handelDecrement}>Decrement</button>
      <button onClick={handelReset}>Reset</button>
      <input type="text" name="counter" id="counter" />
      <button onClick={handelSet}>Set</button>
    </>
  );
}
