
const users = (state, action) => {
  switch (action.type) {
    case "CREATE_USER":
      return {
        ...state,
        users: action.payload,
      }

    case 'LOGIN':
        return {
            ...state,
            token: action.payload.token,
        }

    default:
      return state
  }
}
  
export default users