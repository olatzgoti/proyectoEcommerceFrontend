const users = (state, action) => {
  switch (action.type) {
    case "CREATE_USER":
      return {
        ...state,
        users: action.payload,
      }

    default:
      return state
  }
}
  
export default users