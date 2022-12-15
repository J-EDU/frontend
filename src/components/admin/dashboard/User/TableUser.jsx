import React, { useState } from "react";
import { Table, Input } from "antd";
import axios from "axios";
import { userColumns } from "./columns";
import { useTableSearch } from "./useTableSearch";
import { Box, InputGroup, InputLeftAddon, VStack } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const { Search } = Input;

const fetchUsers = async () => {
  let { data } = await axios.get(`${process.env.REACT_APP_LOCAL}/user/`, {
    headers: { Authorization: `Bearer ${process.env.REACT_APP_TOKEN}` },
  });
  data = data.users;
  return { data };
};



export default function TableUser() {
  const [searchVal, setSearchVal] = useState(null);

  const viewbtn = (item) => {
    alert("hassan")
  }

  const { filteredData, loading } = useTableSearch({
    searchVal,
    retrieve: fetchUsers,
  });

  return (
    <VStack>
      <InputGroup
        style={{ position: "sticky", top: "0", left: "0", zIndex: "9" }}
      >
        <InputLeftAddon
          bgColor={"#1677FF"}
          children={<SearchIcon color="white" />}
        />
        <Input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchVal(e.target.value)}
        />
      </InputGroup>
      <Box p="2" width={"100%"}>
        <Box mt="4">
          <Table
            rowKey="name"
            width={"100%"}
            dataSource={filteredData}
            columns={userColumns}
            loading={loading}
            pagination={true}
          />
        </Box>
      </Box>
    </VStack>
  );
}
