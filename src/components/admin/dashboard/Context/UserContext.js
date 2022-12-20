import { createContext, useContext, useEffect, useState } from "react";
// import { useNavigate } from 'react-router-dom';


const UserContext = createContext(null);

const UserProvider = ({ children }) => {
    const [user,setUser] = useState(true);
   
    return (
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    );
};

export const UserState = () => {
    return useContext(UserContext);
}
export default UserProvider;