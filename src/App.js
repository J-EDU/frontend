import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Announcement from './components/admin/dashboard/Announcement/Announcement';
import Dashboard from './components/admin/dashboard/Dashboard';
import Feedback from './components/admin/dashboard/feedback/Feedback';
import Homedashboard from './components/admin/dashboard/home/Homedashboard';

function App() {
  return (
    <>
     
        {/* <div className="App"> */}
        {/* <ul className="App-header">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul> */}
        
      
      <Dashboard />
    </>
  );
}

export default App;
