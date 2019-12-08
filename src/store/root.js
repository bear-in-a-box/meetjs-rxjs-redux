import { createStore, combineReducers } from "redux";

// data domains
import { reducer as userReducer } from "./user";
import { reducer as todosReducer } from "./todos";

export const store = createStore(
  combineReducers({
    user: userReducer,
    todos: todosReducer
  })
);
