import './App.css'
import { Routes,Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from "./component/Home"
import Cart from './component/pages/Cart'
import Discover from './component/pages/Discover'
import See_all from './component/pages/See_all'
import Checkout from './component/pages/Checkout'
import Payment from './component/pages/Payment'
import Transation from './component/pages/Transation'


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/Cart' element={<Cart/>}></Route>
        <Route path='/Discover' element={<Discover/>}></Route>
        <Route path='/See_all' element={<See_all/>}></Route>
        <Route path='/Checkout' element={<Checkout/>}></Route>
        <Route path='/Payment' element={<Payment/>}></Route>
        <Route path='/Transation' element={<Transation/>}></Route>
      </Routes>
    </>
  )
}

export default App
