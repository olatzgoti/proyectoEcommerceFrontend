import { useContext } from 'react'
import { ProductContext } from "../../context/ProductState"


const Cart = () => {
    const { cart } = useContext(ProductContext);
    if (cart.length <= 0) {
    return <span>No tienes ningún producto en el carrito</span>;
    }
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
        {cartItem}
        <button onClick={() => clearCart()}>Clear cart</button>
    </div>
    );
    };

export default Cart;