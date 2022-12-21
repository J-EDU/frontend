import Signup from "./auth/signup.js";
import Footer from "./main/Footer.js";
import { Flex } from "@chakra-ui/react";
import Signin from "./auth/signin.js";
import Navbar from "./main/navbar.js";
import Feed from "./all/feedback.js";
import ViewCourse from "./course/viewcourse.js";
import { Home } from "./main/home";
import AboutTeam from "./about/about.js";
import {  Route, Router, Routes } from 'react-router-dom';
import ViewVideo from "./video/addvideo.js";
import { Contact } from "./contactus/contact.js";
import AddedCourse from "./course/addcourse.js";
import Homedashboard from "../admin/dashboard/home/Homedashboard.jsx";
import Announcement from "../admin/dashboard/Announcement/Announcement.jsx";
import Feedback from "../admin/dashboard/feedback/Feedback.jsx";
import Reports from "../admin/dashboard/Reports/Reports.jsx";
import Profile from "../admin/dashboard/Profile.jsx";
import Userdashboard from "../admin/dashboard/User/Userdashboard.jsx";
import { useState } from "react";
import { UserState } from "../admin/dashboard/Context/UserContext.js";
import { useEffect } from "react";
function UsersHome() {

    const [profile, setProfile] = useState(false);
    const [profileuser, setprofileuser] = useState(null);
    const { user } = UserState();
  
     
    const fetchData = () => { 
      
      setprofileuser(user)
      }
  
    useEffect(() => {
      fetchData();
    })
    
  return (
    <>
   
    <Flex>
        <Flex w="100%" direction="column">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<AboutTeam />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
            <Route exact path="/signin" element={<Signin />}></Route>
            <Route exact path="/signup" element={<Signup />}></Route>
            <Route exact path="/feed" element={<Feed />}></Route>
            <Route exact path="/courses" element={<ViewCourse />}></Route>
            <Route exact path="/AddVedio" element={<ViewVideo />}></Route>
<Route
              exact
              path="/course/addcourse"
              element={<AddedCourse />}
              ></Route>
              
        
          </Routes>
         
          <Footer />
        </Flex>
    </Flex>
    </>
  );
}

export default UsersHome;
