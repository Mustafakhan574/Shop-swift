import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Login from './pages/Login'
import Nav from './Components/Nav'
import { useContext } from 'react'
import { userdatacontext } from '../Context/User'
import Collections from './Pages/Collections'
import About from './Pages/About'
import Product from './Pages/Product'
import Contact from './Pages/Contact'
import Orders from './pages/Orders'
import Productdetail from './pages/Productdetail'
import Cartitems from './pages/Cartitems'
import Addtocart from './pages/Addtocart'
function App() {
  let {curuser} = useContext(userdatacontext);
  return (
    <>
    {curuser && <Nav/>}
      <Routes>
        <Route
          path="/signup"
          element={curuser ? <Navigate to="/" /> : <Signup />}
        />

        <Route
          path="/login"
          element={curuser ? <Navigate to="/" /> : <Login />}
        />

        <Route
          path="/"
          element={curuser ? <Home /> : <Navigate to="/signup" />}
        />
        <Route path='/collections' element={<Collections/>}/> 
         <Route path='/about' element={<About/>}/> 
         <Route path='/product' element={<Product/>}/> 
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/orders' element={<Orders/>}/>
         <Route path='/cartitems' element={<Addtocart/>}/>
         <Route path='/productdetail/:productid' element={<Productdetail/>}/>
      </Routes>
    </>
  )
}

export default App
