import { useContext, useEffect, useState } from 'react'
import { ProductContext } from "../../context/ProductState"
import { OrdersContext } from '../../context/OrdersState'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'


const Cart = () => {
    
    const navigate = useNavigate()

    const { clearCart } = useContext(ProductContext)
    const { createOrder} = useContext(OrdersContext)
    //const {cartProduct, clearCart } useContext(Products)
    let resOrder = false

    const cart = JSON.parse(localStorage.getItem("cart") || null);
    console.log(cart)

    useEffect(() => {
localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);

    const cartItem = cart.map((cartItem, i) => {
    return (
        
        <div key={i}>
            <span>{cartItem.name}</span>
            <span>{cartItem.price.toFixed(2)} €</span>
        </div>
    )
});
return (
    <div>
        {cart && cart.length>0 ? (cartItem) : (
            <span>You dont have any products added</span>
            ) }
        <button onClick={() => clearCart()}>Clear cart</button>
        <button onClick={() => createNewOrder()}>Create Order</button>
    </div>

    );
};

export default Cart;