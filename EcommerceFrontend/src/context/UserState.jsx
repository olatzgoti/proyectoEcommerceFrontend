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
    const res = await axios.post(`${API_URL}/users/create`, values)
    dispatch({
      type: "CREATE_USER",
      payload: res.data.users,
    })
  }

  return (
    <UserDataContext.Provider value={{ users: state.users, createUser }}>
      {children}
    </UserDataContext.Provider>
  )
}

export const UserDataContext = createContext(initialState);