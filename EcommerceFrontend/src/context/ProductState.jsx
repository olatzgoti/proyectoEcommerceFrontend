import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
import axios from 'axios'

const initialState = {
  products: [],
  cart :[], 
}

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)
  const API_URL = 'http://localhost:3000'

  const getProducts = async () => {
    const res = await axios.get(`${API_URL}/Products/getAll`)
    dispatch({
      type: "GET_PRODUCTS",
      payload: res.data.products,
    })
  }

const addCart = async(product) => {
  const res = await axios.get(`${API_URL}/`)//FALTA URL
  dispatch({
    type: "ADD_CART",
  payload: product,
});
};

  return (
    <ProductContext.Provider value={{ products: state.products, cart: state.cart, getProducts, addCart }}>
      {children}
    </ProductContext.Provider>
  )
}

export const ProductContext = createContext(initialState);