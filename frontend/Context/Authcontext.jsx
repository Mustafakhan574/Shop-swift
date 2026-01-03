import React from 'react'
import { createContext } from 'react'
export const Authdatacontext = createContext();
const Authcontext = ({children}) => {
          let serverurl = "http://localhost:3000"
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