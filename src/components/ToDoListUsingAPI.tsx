import { useEffect, useState } from "react";

interface ToDo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const ToDoListUsingAPI = (props: any) => {
  const [todos, setToDos] = useState<ToDo[]>([]);
  const [toggle, setToggle] = useState(false);

  console.log(props.status);

  useEffect(() => {
    let url = "https://jsonplaceholder.typicode.com/todos";
    if (props.status != "") {
      url += "?completed=" + props.status;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => setToDos(data))
      .catch(() => console.log("error"));
  }, [props.status, toggle]);

  /*
  // add
fetch(url, {
  method: 'POST',
  body: JSON.stringify({
    id: 0,
    title: 'newTo',
    completed: false
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})

fetch(url, {
  method: 'PUT',
  body: JSON.stringify({
    id: 0,
    title: 'newTo',
    completed: false
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})

    XMLHTTPRequest
  */

  return (
    <>
      <h2>ToDo List Using API</h2>
      <button onClick={() => setToggle(!toggle)}>Reload Data</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
};

export default ToDoListUsingAPI;
