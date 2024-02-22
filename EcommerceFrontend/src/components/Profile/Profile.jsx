import axios from 'axios'
import { useEffect, useState } from 'react'

const Profile = () => {
  const [orders, setOrders] = useState([])
  const [user, setUser] = useState([])
  
  useEffect(() => {
    const API_URL = 'http://localhost:3000'
    const foundToken = JSON.parse(localStorage.getItem('token'))

    const foundData = async () => {
      if(foundToken){
        const res = await axios.get(`${API_URL}/orders/getByUserId/${foundToken.userId}`)
        setOrders(res.data.orders)
      }
    }

    const foundUser = async () => {
      const res = await axios.get(`${API_URL}/users/getUser/${foundToken.user}`, {headers: {'Authorization': foundToken.token} })
      setUser(res.data.users)
    }

    foundData()
    foundUser()
  }, [])
  
  return(
    <>
      <div className='profile-container'>
        <p>Nombre: {user.name}</p>
        <p>Apellido: {user.last_name}</p>
        <p>Email: {user.email}</p>
      </div>
      <div className='orders-container'>
        {orders.length > 0 ? ( 
          orders.map((order) => (
            <div key={order.id} className='orders-container__item'>
              <p>Número de pedido: {order.id}</p>
              <p>Producto: {order.Products[0].name}</p>
              <p>Precio: {order.Products[0].price}€</p>
            </div>
          ))
        ):(
          <p>No hay pedidos realizados</p>
        )}
      </div>
    </>
  )
}

export default Profile