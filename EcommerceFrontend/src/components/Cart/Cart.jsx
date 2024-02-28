import { useContext, useEffect } from 'react'
import { ProductContext } from "../../context/ProductState"
import { OrdersContext } from '../../context/OrdersState'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { Card } from 'antd'

const Cart = () => {
    
    const navigate = useNavigate()
    const { clearCart } = useContext(ProductContext)
    const { createOrder} = useContext(OrdersContext)
    let resOrder = false
    const cart = JSON.parse(localStorage.getItem("cart"));
    let cartItem = <span>You dont have any products added</span>
   
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart, cartItem]);

    if (cart){
      const productIdOrder = cart.map((cartItem) => cartItem.id) 
    }
    
    const createNewOrder = async() => {
      resOrder  = await createOrder(productIdOrder);
      if(resOrder == true){
        Swal.fire({
            title: "Good job!",
            text: "Se ha realizado el pedido",
            icon: "success"
      });  
      setTimeout(() => {
      navigate('/profile')
          }, 1500);     
      } else { 
          setAlertMessage('Ha habido un error en la petición')
          setShowAlert(true)
      }
    }

    let i = 0
    if (cart) {
    cartItem = cart.map((cartItem) => {
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
    } else {
      return cartItem
    }

    return (
        <div>
            { cartItem }
            <button onClick={() => {
              clearCart()
              localStorage.removeItem('cart')
              navigate('/cart')
              }}>Clear cart</button>
            <button onClick={() => createNewOrder()}>Create Order</button>
        </div>
    );
};

export default Cart;