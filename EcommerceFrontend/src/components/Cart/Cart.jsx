import { useContext, useEffect, useState } from 'react'
import { ProductContext } from "../../context/ProductState"
import { OrdersContext } from '../../context/OrdersState'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { Card } from 'antd'

const Cart = () => {
    
    const navigate = useNavigate()

    const { clearCart } = useContext(ProductContext)
    const { createOrder} = useContext(OrdersContext)
    //const {cartProduct, clearCart } useContext(Products)
    let resOrder = false

    const cart = JSON.parse(localStorage.getItem("cart"));
   

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
        }, [cart]);


 const productIdOrder = cart.map((cartItem) => cartItem.id) 
    
    const createNewOrder = async() => {

    resOrder  = await createOrder(productIdOrder);
    console.log(resOrder, 'res 1')
    if(resOrder == true)
    {   console.log('entra en el if')
        
        Swal.fire({
            title: "Good job!",
            text: "Se ha realizado el pedido",
            icon: "success"
    });  
    setTimeout(() => {
    navigate('/profile')
        }, 1500);     
    }

    else
        { 
        setAlertMessage('Ha habido un error en la petición')
        setShowAlert(true)
        }
    }

    //clearCart();
//};

let i = 0

const cartItem = cart.map((cartItem) => {
    i++
    return (
        <div classname='orders-container'>

        <Card style={{ width: 300}} key={i}>
         <p>Número de pedido: {cartItem.id}</p>
            <p classname='orders-container-item'>{cartItem.name}</p>
            <p classname='orders-container-item'>{cartItem.price.toFixed(2)} €</p>
        </Card>    
        
        </div>
    )
});


return (
    <div>
        {cart && cart.length > 0 ? (cartItem) : (
            <span>You dont have any products added</span>
            ) }
        <button onClick={() => clearCart()}>Clear cart</button>
        <button onClick={() => createNewOrder()}>Create Order</button>
    </div>

    );
};

export default Cart;