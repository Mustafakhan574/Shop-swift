import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import AuthContext from './Context/AuthContext.jsx'
import Usercontext from './Context/Usercontext.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AuthContext>
    <Usercontext>
<App />
    </Usercontext>
    </AuthContext>
  </BrowserRouter>
)
