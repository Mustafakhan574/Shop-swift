import React from 'react'
import { createContext } from 'react'
export const Authdatacontext = createContext();
const Authcontext = ({children}) => {
          let serverurl = "https://shop-swift-backend-ttde.onrender.com"
          let value={
            serverurl,
          }
  return (
    <div>
          <Authdatacontext.Provider value={value}>
          {children}
          </Authdatacontext.Provider>
    </div>
  )
}

export default Authcontext
