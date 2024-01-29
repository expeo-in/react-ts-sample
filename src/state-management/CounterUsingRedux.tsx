import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./counter-reducer-using-redux";

const CounterUsingRedux = () => {
  const count = useSelector((state: any) => state.counter);
  const dispatch = useDispatch();

  //action creator
  const increment = () => {
    return { type: "INCREMENT" };
  };

  return (
    <>
      <h2>Counter Using Redux</h2>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </>
  );
};

export default CounterUsingRedux;
