import { useContext } from "react";
import TaskContext from "./task-context";
import CounterContext from "./counter-context";

const HeaderUsingContext = () => {
  const { tasks } = useContext<any>(TaskContext);
  const { count } = useContext<any>(CounterContext);
  return (
    <>
      <h2>Header</h2>
      <p>Tasks Count: {tasks.length}</p>
      <p>Count value: {count}</p>
    </>
  );
};

export default HeaderUsingContext;
