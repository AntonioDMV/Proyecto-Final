import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import LogIn from './pages/LogIn'
import Purchases from './pages/Purchases'
import AppNavbar from './components/AppNavbar'
import IsLoading from './components/IsLoading'
import { useSelector } from 'react-redux'
import { Container } from 'react-bootstrap'

function App() {
  const [count, setCount] = useState(0)

  const isLoading = useSelector(state => state.isLoading);

  return (
    <HashRouter>
      <AppNavbar />
      {isLoading && <IsLoading />}
      <Container className='my-5'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/productDetail/:id' element={<ProductDetail />} />
          <Route path='/purchases' element={<Purchases />} />
          <Route path='/login' element={<LogIn />} />
        </Routes>
      </Container>
    </HashRouter>
  )
}

export default App
