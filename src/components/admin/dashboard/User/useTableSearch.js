import { Flex, Text } from "@chakra-ui/react";
import { Avatar } from "antd";
import { useState, useEffect } from "react";

export const useTableSearch = ({ searchVal, retrieve }) => {
  
  const [filteredData, setFilteredData] = useState([]);
  const [origData, setOrigData] = useState([]);
  const [searchIndex, setSearchIndex] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const crawl = (user, allValues) => {
      if (!allValues) allValues = [];
      for (var key in user) {
        if (typeof user[key] === "object") crawl(user[key], allValues);
        else {
          allValues.push( user[key] + " ");}
      }
      return allValues;
    };
    
    const fetchData = async () => {
      let { data: users } = await retrieve();
      const searchInd = users.map(user => {
        const allValues = crawl(user);
        return { allValues: allValues.toString()  };
      });
      setOrigData(users);
      setFilteredData(users);
      setSearchIndex(searchInd);
      if (users) setLoading(false);
    };

    fetchData();
  }, [retrieve]);

  useEffect(() => {
    if (searchVal) {
      const reqData = searchIndex.map((user, index) => {
        if (user.allValues.toLowerCase().indexOf(searchVal.toLowerCase()) >= 0)
          return ( origData[index]);
        return null;
      });
      setFilteredData(
        reqData.filter(user => {
          if (user) return true;
          return false;
        })
      );
    } else setFilteredData(origData);
  }, [searchVal, origData, searchIndex]);

  return { filteredData, loading };
};
