import React, {useContext, createContext} from 'react'

const TemplateContext = createContext()

export const useTemplateContext = () => {
       return useContext(TemplateContext)
}

export const TemplateContextProvider = (props) => {

  const value={
      
  }

    return(
        <TemplateContext.Provider value={value}>
        <div>
            {props.children}
        </div>
        </TemplateContext.Provider>
    )
}

