import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Products from './components/Products/Products'
import { ProductProvider } from './context/ProductState'

function App() {
  return (
    <ProductProvider>
      <BrowserRouter>
        <div className='main-container'>
          <Header />
          <div className='main-container__options'>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/products' element={<Products />}/>
            </Routes>
          </div>
          {/* <Footer/> */}
        </div>
      </BrowserRouter>
    </ProductProvider>
  )
}

export default App
