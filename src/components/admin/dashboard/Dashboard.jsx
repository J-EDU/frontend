import { Box, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import Announcement from './Announcement/Announcement';
import Feedback from './feedback/Feedback';
import Homedashboard from './home/Homedashboard.jsx';
import Profile from './Profile';
import SidebarWithHeader from './SidebarWithHeader.tsx';
import Userdashboard from './User/Userdashboard';


function Dashboard() {
  return (
    <>
      <SidebarWithHeader>
        <Box
          bg={useColorModeValue("white", "gray.900")}
          w={"100%"}
          h={"100%"}
          p={0}
          m={0}>
          {/* <Profile /> */}
          {/* <Announcement /> */}
          {/* <Homedashboard /> */}
          {/* <Userdashboard /> */}
          <Feedback />

        </Box>
      </SidebarWithHeader>
    </>
  );
}

export default Dashboard