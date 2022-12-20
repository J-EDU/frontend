import { Box, useColorModeValue } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Link, Route, Router, Routes } from 'react-router-dom';
import Announcement from './Announcement/Announcement';
import { UserState } from './Context/UserContext';
import Feedback from './feedback/Feedback';
import Homedashboard from './home/Homedashboard.jsx';
import { Button, Flex, Text } from "@chakra-ui/react";
import { Avatar } from "antd";
import Profile from './Profile';
import Reports from './Reports/Reports';
import SidebarWithHeader from './SidebarWithHeader.tsx';
import Userdashboard from './User/Userdashboard';


function Dashboard() {

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
      <SidebarWithHeader>
        <Box
          bg={useColorModeValue("white", "gray.900")}
          w={"100%"}
          h={"100%"}
          p={0}
          m={0}
        >
          <Routes>
            <Route exact path="/dashboard" element={<Homedashboard />}></Route>
            <Route exact path="/dashboard/Home" element={<Homedashboard />}></Route>
            <Route
              exact
              path="/dashboard/Announcements"
              element={<Announcement />}
            ></Route>
            <Route exact path="/dashboard/feedback" element={<Feedback />}></Route>
            <Route exact path="/dashboard/Reports" element={<Reports />}></Route>
            <Route
              exact
              path="/Profile"
              element={<Profile user={user} />}
            ></Route>
            <Route exact path="/dashboard/Users" element={<Userdashboard />}></Route>
          </Routes>
        </Box>
      </SidebarWithHeader>
    </>
  );
}

export default Dashboard

