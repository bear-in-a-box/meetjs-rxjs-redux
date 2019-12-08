import { injectLogger } from "../inject-logger";

const initialState = {
  login: "_anonymous_",
  email: "anony@mo.us",
  language: "en"
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_USER":
      return action.payload;
    case "CHANGE_USER_LANGUAGE":
      return {
        ...state,
        language: action.payload
      };
    default:
      return state;
  }
}

const injected = injectLogger("User", reducer);

export { injected as reducer };
