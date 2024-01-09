import { useReducer, useState } from "react";

const CounterWithoutReducer = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h2>Counter Without Reducer</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
};

export default CounterWithoutReducer;
