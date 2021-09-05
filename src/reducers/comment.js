import { initialState } from "./initialStates/comments";

const comment = (state = initialState, action) => {
  switch (action.type) {
    case "add-coment":
      return addComent(state, action);

    default:
  console.log('state',state)
      return state;
  }
};

export default comment;

//functions
const addComent = (state, action) => {
  let { comment } = action;
  return [...state, comment];
};
