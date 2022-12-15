// import { Box, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
// import { Table } from 'antd';
import React, { useEffect, useState } from "react";
import { render } from "react-dom";

import { Table } from "react-chakra-pagination";

import {
  Flex,
  Avatar,
  Text,
  Box,
  Icon,
  Button,
  Heading,
  VStack,
  HStack,
  Alert,
  AlertIcon,
  useToast,
} from "@chakra-ui/react";

import { FiTrash2, FiUser } from "react-icons/fi";
import { FcFeedback } from "react-icons/fc";

import axios from "axios";

const tableColumns = [
  {
    Header: "Name",
    accessor: "user",
  },
  {
    Header: "Feedback",
    accessor: "Feedback",
  },
  {
    Header: "Rate",
    accessor: "Rate",
  },
  {
    Header: "Date",
    accessor: "Date",
  },
  {
    Header: "",
    accessor: "action",
  },
];

const Feedback = () => {
  const toast = useToast();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const callDelete = async (e) => {
    setLoading(true);
    console.log("delte", e);
  };

  const fetchData = async () => {
    let { data } = await axios.get(`${process.env.REACT_APP_LOCAL}/feedback/`, {
      headers: { Authorization: `Bearer ${process.env.REACT_APP_TOKEN}` },
    });
    var Localdata = data.feedback;
    setData(Localdata);
  };

  useEffect(() => {
    fetchData();
  });

  const tableData = data.map((user) => ({
    user: (
      <HStack marginTop={0} marginStart={0}>
        <Avatar
          name={user.user.fullName}
          src={`https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png`}
          size="sm"
          mr="1"
          mt={0}
        />
        <VStack alignItems={"start"}>
          <Text> {user.user.fullName} </Text>
          <Text color={"#82C3EC"}>
            {"@"}
            <a href={`mailto:${user.user.email}`}>{user.user.email}</a>{" "}
          </Text>
        </VStack>
      </HStack>
    ),

    Feedback: (
      <Text
        fontFamily={`'Raleway', sans-serif`}
        fontSize={"12px"}
        maxWidth={"222px"}
      >
        {user.text}
      </Text>
    ),
    Rate: (
      <div>
        <span
          className={"fa fa-star"}
          style={{ color: `${user.rating >= 1}? "yellow" : "black" ` }}
        ></span>
        <span
          className={"fa fa-star"}
          style={{ color: `${user.rating >= 2}? "yellow" : "black" ` }}
        ></span>
        <span
          className="fa fa-star "
          style={{ color: `${user.rating >= 3}? "yellow" : "black" ` }}
        ></span>
        <span
          className="fa fa-star"
          style={{ color: `${user.rating >= 4}? "yellow" : "black" ` }}
        ></span>
        <span
          className="fa fa-star"
          style={{ color: `${user.rating >= 5}? "yellow" : "black" ` }}
        ></span>
      </div>
    ),
    Date: user.createdAt.split("T")[0],

    action: (
      <Button
        colorScheme="gray"
        onClick={() => callDelete(user)}
        size="sm"
        isLoading={loading}
      >
        <Icon as={FiTrash2} fontSize="20" />
      </Button>
    ),
  }));

  return (
    <Box p="1">
      <Heading size="sm" as="h3">
        FeedBack
      </Heading>
      <Box mt="2">
        <Table
          colorScheme="blue"
          emptyData={{
            icon: FcFeedback,
            text: "No Feed Back Yet",
          }}
          totalRegisters={data.length}
          page={page}
          onPageChange={(page) => setPage(page)}
          columns={tableColumns}
          data={tableData}
        />
      </Box>
    </Box>
  );
};

export default Feedback;
