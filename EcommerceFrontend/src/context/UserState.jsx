import React, { createContext, useReducer } from 'react'
import userReducer from './UserReducer'
import axios from 'axios'

const initialState = {
  users: [],
}

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState)

  const createUser = async (values) => {
    const API_URL = 'http://localhost:3000'
    try {
      const res = await axios.post(`${API_URL}/users/create`, values)
      dispatch({
        type: "CREATE_USER",
        payload: res.data.users,
      })
    } catch (error) {
      dispatch({
        type: "CREATE_USER",
        payload: error.response.data.err.message,
      })
    }
  }

  const resetUserState = () => {
    dispatch({ type: "RESET_USERSTATE" })
  }

  return (
    <UserDataContext.Provider value={{ users: state.users, createUser, resetUserState }}>
      {children}
    </UserDataContext.Provider>
  )
}

export const UserDataContext = createContext(initialState);