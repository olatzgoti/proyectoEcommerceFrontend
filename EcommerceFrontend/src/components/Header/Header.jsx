import {  useNavigate } from 'react-router-dom'
import { React, useState } from 'react';
import { AndroidOutlined, AuditOutlined, LoginOutlined, AppstoreOutlined, MailOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import './Header.style.scss'

const items = [
  {
    label: 'Home',
    key: 'home',
    icon: <MailOutlined />,
  },
  {
    label: 'Login',
    key: 'login',
    icon: <LoginOutlined />,
    // disabled: true,
  },
  {
    label: 'Registro',
    key: 'registro',
    icon: <AuditOutlined />,
  },
  {
    label: 'Productos',
    key: 'productos',
    icon: <AppstoreOutlined />,
  },
  {
    label: 'Perfil',
    key: 'perfil',
    icon: <AndroidOutlined />,
  },
  {
    label: 'Carrito',
    key:'carrito',
    icon: <ShoppingCartOutlined/>


  }
]

const Header = () => {
  let navigate = useNavigate()
  const [current, setCurrent] = useState('home')

  const onClick = (e) => {
    setCurrent(e.key)
    switch (e.key){ 
          case 'home': 
            navigate('/')
            break
          case 'login': 
            navigate('/login')
            break
          case 'registro': 
            navigate('/register')
            break
          case 'productos': 
            navigate('/products')
            break
          case 'perfil': 
            navigate('/profile')
            break
    }
  }

  return (
    <Menu className='header' onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items}/>
  )
}

export default Header