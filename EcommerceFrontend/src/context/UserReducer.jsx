const users = (state, action)=> {

    switch (action.type) {
        case 'REGISTER':
            return {
                ...state,
                user:action.payload,
            }
        case 'LOGIN':
            return {
                ...state,
                token: action.payload.token,
            }
        case 'LOGOUT':
            return {
                user:null,
                token:null,           
            }    
        default:
            return state
    }
}
export default users