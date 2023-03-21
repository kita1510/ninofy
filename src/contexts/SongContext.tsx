import React, { createContext, ReactNode } from 'react'

const SongContext = createContext<any>(null)
const a = "b"

const SongProvider = ({children} :  {children: ReactNode}) => {
  return (
    <SongContext.Provider value={{a}}>{children}</SongContext.Provider>
  )
}

export default SongProvider