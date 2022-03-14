import React, {useContext, createContext} from 'react'

const SnackSystemContext = createContext()

export const useSnackSystemContext = () => {
       return useContext(SnackSystemContext)
}

export const SnackSystemContextProvider = (props) => {

  const value={
      
  }

    return(
        <SnackSystemContext.Provider value={value}>
        <div>
            {props.children}
        </div>
        </SnackSystemContext.Provider>
    )
}

