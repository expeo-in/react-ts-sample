//import { configureStore, createStore } from "@reduxjs/toolkit";
import { createStore, combineReducers } from "redux";
import counterReducer from "./counter-reducer";
import taskReducer from "./task-reducer";

//import counterReducer from "./counter-reducer-using-redux";

// export default configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });

// const counterReducer = (state: any, action: any) => {
//   if (action.type == "INCREMENT") return state + 2;
//   else if (action.type == "DECREMENT") return state - 2;
//   else if (action.type == "RESET") return 0;
//   else return 0;
// };

const rootReducer = combineReducers({
  counter: counterReducer,
  tasks: taskReducer,
});

const reduxStore = createStore(rootReducer);
export default reduxStore;
