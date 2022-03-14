import React, {useContext, createContext} from 'react'

const UserDataManagementContext = createContext()

export const useUserDataManagementContext = () => {
       return useContext(UserDataManagementContext)
}

export const UserDataManagementContextProvider = (props) => {

  const value={
      
  }

    return(
        <UserDataManagementContext.Provider value={value}>
        <div>
            {props.children}
        </div>
        </UserDataManagementContext.Provider>
    )
}

