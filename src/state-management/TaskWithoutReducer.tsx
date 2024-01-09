import { useState } from "react";

const TaskWithoutReducer = () => {
  const [tasks, setTasks] = useState<any[]>([]);

  const handleAdd = () => {
    const newTask = { id: tasks.length, title: "Task " + tasks.length };
    setTasks([...tasks, newTask]);
  };

  const handleDelete = (id: any) => {
    setTasks(tasks.filter((t) => t.id != id));
  };

  return (
    <>
      <h2>Tasks Without Reducer</h2>
      <button onClick={handleAdd}>Add Task</button>
      <ul>
        {tasks.map((t) => (
          <li key={t.id}>
            {t.title}{" "}
            <button onClick={() => handleDelete(t.id)}>Delete Task</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskWithoutReducer;
