interface CounterAction {
  type: "INCREMENT" | "DECREMENT" | "RESET";
}

const counterReducer = (state: number, action: CounterAction) => {
  if (action.type == "INCREMENT") return state + 2;
  else if (action.type == "DECREMENT") return state - 2;
  else if (action.type == "RESET") return 0;
  else return state;
};

export const incrementCounter = () => {
  return { type: "INCREMENT" };
};

export default counterReducer;
