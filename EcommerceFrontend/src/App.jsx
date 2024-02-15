import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
// import { GlobalProvider } from './context/GlobalState'

function App() {
  return (
    // <GlobalProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    // </GlobalProvider>
  )
}

export default App
