import Pichart from './Pichart.tsx';
import Tablechart from './Tablechart.tsx';
import React, { useEffect, useState } from 'react';
import "./Homedashboard.css";
import { Box, Card, CardBody, Flex, HStack, Stack, Text } from '@chakra-ui/react';
import Linechart from './Linechart';
import axios from 'axios';

const Homedashboard = () => {

  const [data,setData] = useState({})

  // const [announcement, setAnnouncement] = useState([]);
  // const [feedback, setFeedback] = useState([]);
  // const [users, setUsers] = useState([]);
  // const [course, setCourse] = useState([]);
  // const [video, s
  //   localData.course = res.data.course;etVideo] = useState([]);
  // const [report, setReport] = useState([]);

  const fetchData = async () => {
    const localData = {}
   axios.get(`${process.env.REACT_APP_LOCAL}/report/`, {
      headers: { Authorization: `Bearer ${process.env.REACT_APP_TOKEN}` },
   }).then(res => { 
    localData.report = res.data.Reports;
    }).catch(err => {
      console.log(err);
    })
     axios
       .get(`${process.env.REACT_APP_LOCAL}/course/`, {
         headers: { Authorization: `Bearer ${process.env.REACT_APP_TOKEN}` },
       })
       .then((res) => {
        localData.course = res.data.courses;
       })
       .catch((err) => {
         console.log(err);
       });
     axios
       .get(`${process.env.REACT_APP_LOCAL}/comment/`, {
         headers: { Authorization: `Bearer ${process.env.REACT_APP_TOKEN}` },
       })
       .then((res) => {
        localData.comment = res.data.commentData;
         
       })
       .catch((err) => {
         console.log(err);
       });
     axios
       .get(`${process.env.REACT_APP_LOCAL}/feedback/`, {
         headers: { Authorization: `Bearer ${process.env.REACT_APP_TOKEN}` },
       })
       .then((res) => {
        localData.feedback = res.data.feedback;
       })
       .catch((err) => {
         console.log(err);
       });
     axios
       .get(`${process.env.REACT_APP_LOCAL}/user/`, {
         headers: { Authorization: `Bearer ${process.env.REACT_APP_TOKEN}` },
       })
       .then((res) => {
        localData.user = res.data.users;
       })
       .catch((err) => {
         console.log(err);
       });
     axios
       .get(`${process.env.REACT_APP_LOCAL}/video/`, {
         headers: { Authorization: `Bearer ${process.env.REACT_APP_TOKEN}` },
       })
       .then((res) => {
         localData.video = res.data.videos;
       })
       .catch((err) => {
         console.log(err);
       });
    console.log(localData)
  };

  useEffect(() => {
    fetchData();
  });
    return (
      <>
        
        <Stack direction={{ base: "row", sm: "column", md: "row" }} p={2}>
          <Box width={"50%"} margin={"auto"}>
            <Pichart />
          </Box>
          <Box width={"50%"} margin={"auto"}>
            <Tablechart />
          </Box>
        </Stack>

        <Box>
          {/* <Linechart /> */}
        </Box>
      </>
    );
}

export default Homedashboard