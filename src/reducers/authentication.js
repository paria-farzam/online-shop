import { initialState } from "./initialStates/authenticationInitialState";

const authentication = (state = initialState, action) => {
  switch (action.type) {
    case "add-user":
      return addUser(state, action);

    default:
      return state;
  }
};

export default authentication;

//function
const addUser = (state, action) => {
  let uesr = action.user;
  return [...state, uesr];
};
