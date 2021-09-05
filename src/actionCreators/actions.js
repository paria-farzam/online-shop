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
