import { createContext, useEffect, useState } from "react";

export const AppContext = createContext()

export const AppProvider = ({ children }) => {

  const user = sessionStorage.getItem('user');
  const userInfo = JSON.parse(user) ;
  const [removeUser, setRemoveUser] = useState(userInfo);

 
  const handleLogout = () => {
    sessionStorage.removeItem('user');
    setRemoveUser(null)
  };

 
    return (
        <AppContext.Provider value={{userInfo,removeUser,setRemoveUser,handleLogout}}>
            {children}
        </AppContext.Provider>
    )
}