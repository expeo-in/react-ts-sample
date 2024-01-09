import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import AuthContext from "../authContext";

const ToDoList = () => {
  // const { user } = useContext(AuthContext);

  // if (!user) return <Navigate to="/" />;

  //const [name, setName] = useState("siva");
  let [todos, setToDos] = useState(["Learn React", "Do Shopping"]);

  const addToDo = () => {
    //todos.push("Watch Movie");
    ///let newTodos = ["Learn React", "Do Shopping", "Watch Movie"];
    // let newTodos = todos.slice();
    // newTodos.push("Watch Movie");
    // setToDos(newTodos);
    setToDos(["Watch Movie", ...todos]);

    // todos.push("Cleaning");
    // console.log(todos);
    // setToDos(todos);
  };

  const removeToDo = (selectedItem: string) => {
    //todos.pop();
    //console.log(todos);

    //splice

    // let newToDos = [...todos];
    // newToDos.pop();

    let newToDos = todos.filter((item) => item != selectedItem);
    setToDos(newToDos);

    // todos.pop();
    // setToDos(todos);
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
      {/* <Link to="/">App</Link> */}
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
