<<<<<<< HEAD
import { createContext, useState } from "react";

export const UserToken = createContext();


export default function UserTokenProvider(props){

   const [token,setToken]= useState(null)
   const [userName,setUserName]= useState(null)
    
    return <UserToken.Provider value={{token,setToken,userName,setUserName}}>
        {props.children}
    </UserToken.Provider>
=======
import { createContext, useState } from "react";

export const UserToken = createContext();


export default function UserTokenProvider(props){

   const [token,setToken]= useState(null)
   const [userName,setUserName]= useState(null)
    
    return <UserToken.Provider value={{token,setToken,userName,setUserName}}>
        {props.children}
    </UserToken.Provider>
>>>>>>> adc6bc5 (e-commerce)
}