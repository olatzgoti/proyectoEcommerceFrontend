import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Products from './components/Products/Products'

// import { GlobalProvider } from './context/GlobalState'

function App() {
  return (
    // <GlobalProvider>
      <BrowserRouter>
        <div className='main-container'>
          <Header />
          <div className='main-container-options'>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/products' element={<Products/>}/>
            </Routes>
          </div>
          {/* <Footer/> */}
        </div>
      </BrowserRouter>
    // </GlobalProvider>
  )
}

export default App
