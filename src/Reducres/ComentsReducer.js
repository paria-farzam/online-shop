import React from "react";

const ComentsReducer = (state, action) => {
  switch (action.type) {
    case "add-coment":
      return addComent(state, action);

    default:
      return state;
  }
};

export default ComentsReducer;

//functions
const addComent = (state, action) => {
    let coment = action.payload;
    let coments = state.coments;
    return {
        coments : [...coments, coment]
    }
};
