import React, { createContext, useReducer } from 'react'
import userReducer from './UserReducer'
import axios from 'axios'

const initialState = {
  users: [],
}

export const UserProvider = ({ children }) => {
  const API_URL = 'http://localhost:3000'
  const [state, dispatch] = useReducer(userReducer, initialState)

  const createUser = async (values) => {
<<<<<<< HEAD
    const API_URL = 'http://localhost:3000'
    try {
      const res = await axios.post(`${API_URL}/users/create`, values)
      console.log('exito: ',res);
      dispatch({
        type: "CREATE_USER",
        payload: res.data.users, status:res.status,
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
=======
    const res = await axios.post(`${API_URL}/users/create`, values)
    dispatch({
      type: "CREATE_USER",
      payload: res.data.users,
    })
>>>>>>> olatz
  }
  	const login = async (user) => {
		const res = await axios.post(`${API_URL}/users/login`, user)
		dispatch({
			type: 'LOGIN',
			payload: res.data,
		})
		if (res.data) {
			localStorage.setItem('token', JSON.stringify(res.data.token))
		}
	}


  return (
<<<<<<< HEAD
    <UserDataContext.Provider value={{ users: state.users, createUser, resetUserState }}>
=======
    <UserDataContext.Provider value={{ users: state.users, createUser, login }}>
>>>>>>> olatz
      {children}
    </UserDataContext.Provider>
  )
}

export const UserDataContext = createContext(initialState);