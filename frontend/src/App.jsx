
import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom'
import Signup from './pages/Signup.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Nav from './Components/Nav.jsx'
import { useContext } from 'react'
import { userdatacontext } from '../Context/User'
import Collections from './pages/Collections.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Orders from './pages/Orders.jsx'
import Productdetail from './pages/Productdetail.jsx'
import Addtocart from './pages/Addtocart.jsx'
import Product from './pages/Product.jsx'
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
