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

    case "LOGIN":
      return{
        
        ...state,
        user: action.payload.token,

      }
      

    default:
      return state
  }
}
  
export default users