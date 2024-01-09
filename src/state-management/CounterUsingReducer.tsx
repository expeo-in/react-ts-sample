import { useContext, useReducer, useState } from "react";
import counterReducer, { incrementCounter } from "./counter-reducer";
import CounterContext from "./counter-context";

const CounterUsingReducer = () => {
  //const [count, dispatch] = useReducer(counterReducer, 0);
  const { count, dispatchCount } = useContext<any>(CounterContext);
  const dispatch = dispatchCount;

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  return (
    <>
      <h2>Counter Using Reducer</h2>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </>
  );
};

export default CounterUsingReducer;
