import { useContext, useReducer, useState } from "react";
import taskReducer from "./task-reducer";
import TaskContext from "./task-context";

const TaskUsingReducer = () => {
  //const [tasks, dispatch] = useReducer(taskReducer, []);
  const { tasks, dispatch } = useContext<any>(TaskContext);

  const handleAdd = () => {
    const newTask = { id: tasks.length, title: "Task " + tasks.length };
    dispatch({ type: "ADD", payload: newTask });
  };

  const handleDelete = (id: any) => {
    dispatch({ type: "DELETE", payload: id });
  };

  return (
    <>
      <h2>Tasks Using Reducer Context</h2>
      <button onClick={handleAdd}>Add Task</button>
      <ul>
        {tasks.map((t: any) => (
          <li key={t.id}>
            {t.title}{" "}
            <button onClick={() => handleDelete(t.id)}>Delete Task</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskUsingReducer;
