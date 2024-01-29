import useCounterStore from "./counter-zustand-store";

const CounterUsingZustand = () => {
  const { count, increment, decrement, reset } = useCounterStore();

  return (
    <>
      <h2>Counter Using Zustand</h2>
      <p>Count: {count}</p>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
      <button onClick={() => reset()}>Reset</button>
    </>
  );
};

export default CounterUsingZustand;
