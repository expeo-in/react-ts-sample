interface CounterAction {
  type: "INCREMENT" | "DECREMENT" | "RESET";
}

const INCREMENT = "increment";

const counterReducer = (state: any = 0, action: any) => {
  if (action.type == "INCREMENT") return state + 1;
  else if (action.type == "DECREMENT") return state - 1;
  else if (action.type == "RESET") return 0;
  else return 0;
};

export const incrementCounter = () => {
  return { type: "INCREMENT" };
};

export default counterReducer;
