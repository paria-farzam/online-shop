const RegisteryReducer = (state, action) => {
  switch (action.type) {
    case "add-user":
      return addUser(state, action);
    default:
      return state;
  }
};

export default RegisteryReducer;

//functions
const addUser = (state, action) => {
  let uesr = action.payload;

  console.log('[reducer]: state.users: ', state.users)

  return {
    users: [...state.users, uesr]
  };
};
