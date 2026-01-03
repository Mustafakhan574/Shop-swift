import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Routes,Route, Navigate} from "react-router-dom" 
import './App.css'
import Home from './Pages/Home'
import Add from './Pages/Add'
import Lists from './Pages/Lists'
import Orders from './Pages/Orders'
import Login from './Pages/Login'
import { useContext } from 'react'
import { admindatacontext } from './Context/Usercontext'


function App() {
  const {admindata} = useContext(admindatacontext)
  return (
    <>
       <Routes>
        <Route path='/login' element={admindata?<Navigate to="/"/>:<Login/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/lists' element={<Lists/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route
                  path="/"
                  element={admindata ? <Home /> : <Navigate to="/Login" />}
                />
                
          
       </Routes>
    </>
  )
}

export default App
