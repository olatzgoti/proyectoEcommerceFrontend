import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
  const tokenData = JSON.parse(localStorage.getItem('token'))
  if (tokenData) {
    const navigate = useNavigate()
    const API_URL = 'http://localhost:3000/'

    axios.delete(`${API_URL}users/logout`, { headers: { 'Authorization': tokenData.token }})
    .then(() => {
      localStorage.removeItem('token')
      setTimeout(() => {
        navigate('/login')
      }, 2000);
    })
    .catch((error) => console.log(error))

    return (
      <></>
    )
  }
}

export default Logout