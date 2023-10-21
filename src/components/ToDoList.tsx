import { useState } from "react";

const ToDoList = () => {
  let [todos, setToDos] = useState(["Learn React", "Do Shopping"]);

  const addToDo = () => {
    //todos.push("Watch Movie");

    ///let newTodos = ["Learn React", "Do Shopping", "Watch Movie"];

    // let newTodos = todos.slice();
    // newTodos.push("Watch Movie");
    // setToDos(newTodos);

    setToDos(["Watch Movie", ...todos]);
  };

  const removeToDo = (selectedItem: string) => {
    //todos.pop();
    //console.log(todos);

    //splice

    // let newToDos = [...todos];
    // newToDos.pop();

    let newToDos = todos.filter((item) => item != selectedItem);
    setToDos(newToDos);
  };

  const updateToDo = () => {
    //todos[1] = "Learn React 18";

    let newToDos = todos.map((item) =>
      item == "Learn React" ? "Learn React 18" : item
    );
    setToDos(newToDos);
  };

  return (
    <>
      <ul>
        {todos.map((item) => (
          <li key={item}>
            {item}
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => removeToDo(item)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <button type="button" className="btn btn-primary" onClick={addToDo}>
        Add ToDo
      </button>

      <button type="button" className="btn btn-primary" onClick={updateToDo}>
        Update ToDo
      </button>
    </>
  );
};

export default ToDoList;
