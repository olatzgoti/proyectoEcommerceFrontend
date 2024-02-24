import {  useNavigate } from 'react-router-dom'
import { React, useState } from 'react';
import { AndroidOutlined, AuditOutlined, LoginOutlined, LogoutOutlined, AppstoreOutlined, MailOutlined,ShoppingCartOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import './Header.style.scss'

const Header = () => {
  let navigate = useNavigate()
  const [current, setCurrent] = useState('home')
  const token = JSON.parse(localStorage.getItem('token'))

  const items = [
    {
      label: 'Home',
      key: 'home',
      icon: <MailOutlined />,
    },
    !token ? {
      label: 'Login',
      key: 'login',
      icon: <LoginOutlined />,
    } : 
    {
      label: 'Logout',
      key: 'logout',
      icon: <LogoutOutlined />,
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
    token ? {
      label: 'Perfil',
      key: 'perfil',
      icon: <AndroidOutlined />,
    } : {},
    token ? {
      label: 'Carrito',
      key:'carrito',
      icon: <ShoppingCartOutlined/>
    } : {}
  ]
  
  const onClick = (e) => {
    setCurrent(e.key)
    switch (e.key){ 
          case 'home': 
            navigate('/')
            break
          case 'login': 
            navigate('/login')
            break
          case 'logout':
            navigate('/logout')
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
          case 'carrito':
            navigate('/cart')
            break
    }
  }


  return (
    <Menu className='header' onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items}/>
  )

}

export default Header