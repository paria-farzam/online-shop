// coments actions
export const addNewComment = (comment) => {
  return {
    type: "add-coment",
    comment,
  };
};

//authentication actions
export const addNewUser = (user) => {
  return {
    type: "add-user",
    user,
  };
};

//goods actions
export const increaseCounter = (key) => {
  return {
    type: "plus-counter",
    key,
  };
};
export const decreaseCounter = (key) => {
  return {
    type: "mines-counter",
    key,
  };
};
export const removeItem = (key) => {
  return {
    type: "selected-false",
    key,
  };
};
