import { createContext, useContext, useEffect, useState } from "react";
// import { useNavigate } from 'react-router-dom';
import { redirect } from "react-router-dom";
import cookies from "react-cookies";


const UserContext = createContext(null);

const UserProvider = ({ children }) => {
    const [user,setUser] = useState(true);
    const [isAdmin,setisAdmin] = useState(false);

    


    // useEffect(()=>{
    //     if(!cookies.load("token")){
    //         redirect("/signin");
    //     }else{

    //     }
    //     // console.log(cookies.load("token"))
    // })

   
    return (
        <UserContext.Provider value={{user,setUser,isAdmin , setisAdmin}}>
            {children}
        </UserContext.Provider>
    );
};

export const UserState = () => {
    return useContext(UserContext);
}
export default UserProvider;