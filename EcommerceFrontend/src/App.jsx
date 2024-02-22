import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Products from './components/Products/Products'
import Footer from './components/Footer/Footer'
import { ProductProvider } from './context/ProductState'
import { UserProvider } from './context/UserState'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'

function App() {
  return (
    <UserProvider>
      <ProductProvider>
        <BrowserRouter>
          <div className='main-container'>
            <Header />
            <div className='main-container__options'>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/products' element={<Products />}/>
                <Route path='/register' element={<Register />}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/profile' element={<Profile />}/>
              </Routes>
            </div>
          </div>
          <Footer />
        </BrowserRouter>
      </ProductProvider>
    </UserProvider>
  )
}

export default App
