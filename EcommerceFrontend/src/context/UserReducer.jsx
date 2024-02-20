const users = (state, action) => {
  switch (action.type) {
    case "CREATE_USER":
      return {
        ...state,
        users: action.payload,
      }
    
    case "RESET_USERSTATE":
      return {
        ...state,
        users: []
      }

    default:
      return state
  }
}
  
export default users