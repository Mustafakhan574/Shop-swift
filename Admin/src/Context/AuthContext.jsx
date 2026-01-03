import React from 'react'
import { createContext } from 'react'
export const authdatacontext = createContext();
const AuthContext = ({children}) => {
          let serverurl = "http://localhost:3000"
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