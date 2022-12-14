import React, { useState } from "react";
import axios from "axios";
import { userColumns } from "./columns";
import { useTableSearch } from "./useTableSearch";
import { Table } from "react-chakra-pagination";
import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Flex,
  Avatar,
  Text,
  Box,
  Icon,
  Button,
  Heading,
} from "@chakra-ui/react";
import { FiTrash2, FiUser } from "react-icons/fi";

const User = {
  id : null,
  name: null,
  email: null,
  phone: null,
  birthday: null,
  avatar_url: null,
};

const users = [
  {
    id: 1,
    name: "Hasan",
    email: "Hasan@hasan.com",
    phone: "(+962) 789058158",
    birthday: "04/30/2022",
    avatar_url: `https://media.licdn.com/dms/image/D4E35AQGcDBZVWgtTfg/profile-framedphoto-shrink_200_200/0/1670516792495?e=1671588000&v=beta&t=9AIZlpBYCW_O_9tKctK-hsz3AjfTswUPjrQxyXaUAqw`,
  },
  {
    id: 2,
    name: "Another Hasan",
    email: "Aother Hasan@hasan.com",
    phone: "(+962) 789058158",
    birthday: "04/30/2022",
    avatar_url: `https://media.licdn.com/dms/image/D4E35AQGcDBZVWgtTfg/profile-framedphoto-shrink_200_200/0/1670516792495?e=1671588000&v=beta&t=9AIZlpBYCW_O_9tKctK-hsz3AjfTswUPjrQxyXaUAqw`,
  },
  {
    id: 3,
    name: "not Hasan",
    email: "Not  Hasan@hasan.com",
    phone: "(+962) 789058158",
    birthday: "04/30/2022",
    avatar_url: `https://media.licdn.com/dms/image/D4E35AQGcDBZVWgtTfg/profile-framedphoto-shrink_200_200/0/1670516792495?e=1671588000&v=beta&t=9AIZlpBYCW_O_9tKctK-hsz3AjfTswUPjrQxyXaUAqw`,
  },
  {
    id: 4,
    name: " Hasan",
    email: "is   Hasan@hasan.com",
    phone: "(+962) 789058158",
    birthday: "04/30/2022",
    avatar_url: `https://media.licdn.com/dms/image/D4E35AQGcDBZVWgtTfg/profile-framedphoto-shrink_200_200/0/1670516792495?e=1671588000&v=beta&t=9AIZlpBYCW_O_9tKctK-hsz3AjfTswUPjrQxyXaUAqw`,
  },
];


const fetchUsers = () => {
  
  var data = users;
  return data;
};

export default function TableUser() {
  const [page, setPage] = useState(1);
  const [searchVal, setsearchVal] = useState(null);

  const tableData = users.map((user) => ({
    name: (
      <Flex align="center">
        <Avatar name={user.name} src={user.avatar_url} size="sm" mr="4" />
        <Text>{user.name}</Text>
      </Flex>
    ),
    email: user.email,
    phone: user.phone,
    birthday: user.birthday,
    action: (
      <Button
        colorScheme="gray"
        onClick={() => console.log("remove user!")}
        size="sm"
      >
        <Icon as={FiTrash2} fontSize="20" />
      </Button>
    ),
  }));

  const tableColumns = [
    {
      Header: "Name",
      accessor: "name" ,
    },
    {
      Header: "Email",
      accessor: "email" ,
    },
    {
      Header: "Phone",
      accessor: "phone" ,
    },
    {
      Header: "Birthday",
      accessor: "birthday" ,
    },
    {
      Header: "",
      accessor: "action" ,
    }
  ];


  const { filteredData, loading } = useTableSearch({
    searchVal,
    retrieve: fetchUsers,
  });

  return (
    <>
      <InputGroup>
        <InputLeftAddon
          bgColor={"#1677FF"}
          children={<SearchIcon color="white" />}
        />
        <Input
          type="text"
          placeholder="Search..."
          onChange={(e) => setsearchVal(e.target.value)}
        />
      </InputGroup>
      <Box p="2">
        <Box mt="6">
          <Table
            colorScheme="blue"
            // Fallback component when list is empty
            emptyData={{
              icon: FiUser,
              text: "Nobody is registered here.",
            }}
            totalRegisters={users.length}
            page={page}
            // Listen change page event and control the current page using state
            onPageChange={(page) => setPage(page)}
            loading={loading}
            columns={tableColumns}
            data={tableData}
          />
        </Box>
      </Box>
    </>
  );
}
