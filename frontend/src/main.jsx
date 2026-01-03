import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Authcontext from '../Context/authcontext.jsx'
import User from '../Context/User.jsx'
import Shopdata from '../Context/Shopcontext.jsx'
import Shopcontext from '../Context/Shopcontext.jsx'
import { Store } from '../Redux/Store.jsx'
import { Provider } from "react-redux";
import Cartcontext from '../Context/Cartcontext.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider store={Store}>
  <Authcontext>
    <User>
      <Shopcontext>
        <Cartcontext>
        
<App/>
        
        </Cartcontext>
</Shopcontext>
    </User>
  </Authcontext>
  </Provider> 
  </BrowserRouter>
   

)
