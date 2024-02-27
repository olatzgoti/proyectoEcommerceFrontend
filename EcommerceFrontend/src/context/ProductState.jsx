import { createContext, useReducer } from 'react'
import axios from 'axios'
import ProductReducer from './ProductsReducer'

//const cart = JSON.parse(localStorage.getItem("cart") || null);
//console.log(cart)

const initialState = {
  products: [],
//  cart: cart ? cart : [],   
//cart:[],
}

const API_URL = 'http://localhost:3000'
export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, initialState)

  const getProducts = async () => {
    const res = await axios.get(`${API_URL}/products/getAll`)
    console.log(res)
    dispatch({
      type: "GET_PRODUCTS",
      payload: res.data.products,
    })
    return res
  }

//
const addCart = (product) => {
  //const res = await axios.get(`${API_URL}/orders/newOrder`)
  dispatch({
    type: "ADD_CART",
  payload: product,
});
}

  const clearCart = () => {

    dispatch({
    type: "CLEAR_CART",  
    });
    };



  return (
    <ProductContext.Provider value={{ 
      products: state.products, 
      cart: state.cart, 
    cart: [],  
    getProducts, 
      clearCart,
      addCart,
     }}>

      {children}
    </ProductContext.Provider>
  )
}

export const ProductContext = createContext(initialState);