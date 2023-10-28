import { useState } from "react";
import produce from "immer";

const BugsList = () => {
  let [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", completed: false },
    { id: 2, title: "Bug 2", completed: false },
    { id: 3, title: "Bug 3", completed: false },
  ]);

  const addBug = () => {
    let newBug = { id: 4, title: "Bug 4", completed: false };
    setBugs([...bugs, newBug]);
  };

  const deleteBug = (id: number) => {
    setBugs(bugs.filter((item) => item.id !== id));
  };

  const updateBug = (bug: any) => {
    // const newBugs = bugs.map((item) =>
    //   item.id == bug.id ? { ...item, completed: true } : item
    // );
    // setBugs(newBugs);

    setBugs(
      produce((draft) => {
        let b = draft.find((item: any) => item.id === bug.id);
        if (b) b.completed = true;
      })
    );
  };

  return (
    <>
      <h2>Bugs List</h2>
      <button className="btn btn-primary" onClick={addBug}>
        Add
      </button>
      {bugs.length == 0 && <p>No Items</p>}
      <ul>
        {bugs.map((item) => (
          <li key={item.id}>
            <p>{item.id + "-" + item.title + " - " + item.completed}</p>
            <button className="btn btn-primary" onClick={() => updateBug(item)}>
              Completed
            </button>
            <button
              className="btn btn-primary"
              onClick={() => deleteBug(item.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BugsList;
