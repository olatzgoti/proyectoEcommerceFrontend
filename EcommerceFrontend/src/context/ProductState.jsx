import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
import axios from 'axios'

const initialState = {
  products: [],
}

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  const getProducts = async () => {
    const API_URL = 'http://localhost:3000'
    const res = await axios.get(`${API_URL}/Products/getAll`)
    dispatch({
      type: "GET_PRODUCTS",
      payload: res.data.products,
    })
  }

  return (
    <ProductContext.Provider value={{ products: state.products, getProducts }}>
      {children}
    </ProductContext.Provider>
  )
}

export const ProductContext = createContext(initialState);