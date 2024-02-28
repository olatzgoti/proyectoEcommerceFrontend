import { createContext } from "react";
import axios from "axios";


const API_URL = "http://localhost:3000";
export const OrdersContext = createContext();

export const OrdersProvider = ({ children }) => {

    const createOrder = async (order) => {
    const token = JSON.parse(localStorage.getItem("token"));
    try {
        console.log(order)
        
        await axios.post(`${API_URL}/orders/neworder`,
            { 
                ProductId: Number(order), 
                UserId: Number(token.userId) },
            {
                headers: { authorization: token.token, },
            },

        );
        return true
    }

    catch (error) {
        console.error(error);
        return false
    }
}

return (
    <OrdersContext.Provider value={{ createOrder }}>    
        {children}
    </OrdersContext.Provider>
);

}