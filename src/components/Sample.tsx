//named
// export const pi = 3.14;
// export const url = "";

import { Fragment, MouseEvent } from "react";

interface SampleProps {
  //input - data
  msg: string;
  count: number;

  //output - function, events
  onItemClick: () => void;
}

//default
function Sample({ msg, count, onItemClick }: SampleProps) {
  //   console.log(props.msg);
  //   console.log(props.count);
  //   console.log(props.onItemClick);
  //let countValue = props.count;

  let today = Date();

  let todos = ["todo 1", "todo 2", "todo 3"];

  let message;

  if (todos.length === 0) message = <p>No todos</p>;
  else message = <p>Todos Count: {todos.length}</p>;

  const getMessage = () => {
    if (todos.length === 0) return <p>No todos</p>;
    else return <p>Todos Count: {todos.length}</p>;
  };

  const handleClick = (e: MouseEvent) => {
    console.log("clicked");
  };

  const editItem = (item: string, index: number) => {
    console.log(item, index);
  };

  return (
    <>
      <h2>Sample</h2>
      <p>This is a sample component</p>
      <p>
        Today Date: {today} {Date()} {1 + 4}{" "}
      </p>

      <h3>only if condition</h3>
      {todos.length == 0 && <p>No todos</p>}

      <h3>using variable if else</h3>
      {message}

      <h3>using function for if else </h3>
      {getMessage()}

      <h3>Rendering List</h3>
      <ul>
        {todos.map((item, index) => (
          <li key={item}>
            {item}
            <button onClick={() => editItem(item, index)}>Edit</button>
          </li>
        ))}
      </ul>

      <h3>Event Handling</h3>
      <button onClick={() => console.log("button click")}>
        Button 1 - Inline
      </button>

      <button onClick={handleClick}>Button 2 - Function Ref</button>

      <button onClick={(e) => console.log(e)}>Button 3 - Event Object</button>

      <button onClick={onItemClick}>Call Prop Function</button>
    </>
  );
}

export default Sample;
