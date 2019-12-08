import { injectLogger } from "../inject-logger";

// const exampleTodo = { text: "asdf" };

function reducer(state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "CLEAR_TODOS":
      return [];
    default:
      return state;
  }
}

const injected = injectLogger("Todos", reducer);

export { injected as reducer };
