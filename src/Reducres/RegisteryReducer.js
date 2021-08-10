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
    return {
      ...state,
      users: [...state.users, uesr],
    };
  };
  