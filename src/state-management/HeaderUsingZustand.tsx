import useCounterStore from "./counter-zustand-store";

const HeaderUsingZustand = () => {
  const { count } = useCounterStore();

  return (
    <>
      <h2>Header Using Zustand</h2>
      <p>Count: {count}</p>
    </>
  );
};

export default HeaderUsingZustand;
