import { useEffect, useState } from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Announcement from './components/admin/dashboard/Announcement/Announcement';
import { UserState } from './components/admin/dashboard/Context/UserContext';
import Dashboard from './components/admin/dashboard/Dashboard';
import Feedback from './components/admin/dashboard/feedback/Feedback';
import Homedashboard from './components/admin/dashboard/home/Homedashboard';
import UsersHome from './components/users/UsersHome';
function App() {

  const [isLoggedin, setIsLoggedin] = useState(false);
  const { isAdmin } = UserState();


  useEffect(()=>{
  
},[isAdmin])

  return (
    <>
     {
(isAdmin) ?  <> 
<Dashboard />
</> : <>
<UsersHome />
</>
     }
        
        
      
       


    </>
  );
}

export default App;

