import { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
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
  const [state, dispatch] = useReducer(AppReducer, initialState)
 // const API_URL = 'http://localhost:3000'

  const getProducts = async () => {
    const res = await axios.get(`${API_URL}/Products/getAll`)
    dispatch({
      type: "GET_PRODUCTS",
      payload: res.data.products,
    })
    return res
  }

  const addCart = async(product) => {
    const res = await axios.get(`${API_URL}/orders/newOrder`)
    dispatch({
      type: "ADD_CART",
    payload: product,
  });
  }

const clearCart = async() =>{

dispatch({

  type: "CLEAR_CART",
  payload: {...state, cart:[]},
})

}

//

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