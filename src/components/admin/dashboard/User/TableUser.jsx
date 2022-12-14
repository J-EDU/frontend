import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTableSearch } from "./useTableSearch";
import { Table } from "react-chakra-pagination";
import { Input, InputGroup, InputLeftAddon, VStack } from "@chakra-ui/react";
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
import { ImProfile } from "react-icons/im";


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
  const [data, setData] = useState([]);

  const mineFilterData = () => {

    setData(tableData)

  };

  useEffect(() => {
    mineFilterData()
  }, [data])
  

  const tableData = users.map((user, idx) => ({
    Fullname: (
      <Flex align="center" key={idx}>
        <Avatar
          name={user.name}
          key={idx + 1}
          src={user.avatar_url}
          size="sm"
          mr="4"
        />
        <Text key={idx + 2}>{user.name}</Text>
      </Flex>
    ),
    email: user.email,
    phone: user.phone,
    role: "Teacher",
    status:
      1 === 0 ? (
        <>
          <span
            style={{
              backgroundColor: "Red",
              padding: "5px",

              color: "white",
              borderRadius: "5px",
            }}
          >
            Blocked !!
          </span>
        </>
      ) : (
        <>
          <span
            style={{
              backgroundColor: "green",
              padding: "5px",

              color: "white",
              borderRadius: "5px",
            }}
          >
            Not Blocked
          </span>
        </>
      ),
    action: (
      <Button
        key={idx + 3}
        colorScheme="gray"
        onClick={() => console.log("remove user!", user.email)}
        size="sm"
        p={3}
      >
        <Icon as={ImProfile} fontSize="20" key={idx + 4} />
        {" "}
        View
      </Button>
    ),
  }));

  const tableColumns = [
    {
      Header: "Fullname",
      accessor: "Fullname",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Phone",
      accessor: "phone",
    },
    {
      Header: "role",
      accessor: "role",
    },
    {
      Header: "status",
      accessor: "status",
    },
    {
      Header: "",
      accessor: "action",
    },
  ];


  const { filteredData, loading } = useTableSearch({
    searchVal,
    retrieve: fetchUsers,
  });

  return (
    <VStack>
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
      <Box p="2" width={"100%"}>
        <Box mt="6">
          <Table
            width={"100%"}
            colorScheme="blue"
            emptyData={{
              icon: FiUser,
              text: "Nobody is registered here.",
            }}
            totalRegisters={users.length}
            page={page}
            onPageChange={(page) => setPage(page)}
            loading={loading}
            columns={tableColumns}
            data={data}
          />
        </Box>
      </Box>
    </VStack>
  );
}
