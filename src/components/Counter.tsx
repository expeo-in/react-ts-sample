import { useState } from "react";

interface Props {
  initialvalue: number;
  onIncremented: (value: number) => void;
}

function Counter({ initialvalue, onIncremented }: Props) {
  const [count, setCount] = useState(initialvalue);

  const handleClick = () => {
    setCount(count + 1);
    onIncremented(count + 1);
  };

  return (
    <>
      <h1>Counter Component</h1>
      <p>Value: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </>
  );
}

export default Counter;
