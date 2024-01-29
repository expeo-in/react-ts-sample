interface Task {
  id: number;
  title: string;
}

interface TaskAdd {
  type: "ADD";
  payload: Task;
}

interface TaskDelete {
  type: "DELETE";
  payload: number;
}

type TaskAction = TaskAdd | TaskDelete;

//action - type, payload

//add action {type: "ADD", payload: {id: 10, title: "Task 10"}}
//delete action {type: "DELETE", payload: 1}

const taskReducer = (state: Task[] = [], action: TaskAction) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "DELETE":
      return state.filter((t: any) => t.id != action.payload);
    default:
      return state;
  }
};

export default taskReducer;
