import React from 'react'
import { createContext } from 'react'
export const authdatacontext = createContext();
const AuthContext = ({children}) => {
          let serverurl = "https://shop-swift-backend-ttde.onrender.com"
         const value={
           serverurl
          }
  return (
          <div>
    < authdatacontext.Provider value={value}>
      {children}
    </authdatacontext.Provider>
    </div>
  )
}

export default AuthContext
