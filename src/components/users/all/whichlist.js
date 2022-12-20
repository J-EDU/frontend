import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Flex,
  Divider,
  Stack,
  Text,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";

const initialStateData = {
  fullName: "",
  description: "",
  category: "",
  language: "",
  Thumbnail: "",
};
export default function WhichList() {
  const [data, setState] = useState([]);
  useEffect(() => {
    const url = `${process.env.REACT_APP_SERVER}/root/wishList`; //http://localhost:5000/root/wishList

    const whichlist = {
      fullName: data.fullName,
      description: data.description,
      category: data.category,
      language: data.language,
      Thumbnail: data.Thumbnail,
    };
    axios.get(url).then((res) => {
      setState(res.data.result);
    });
  }, []);

  return (
    <Flex>{data.length > 0 && data.map((val, idx) => (
    <Card maxW="sm" key={idx}>
      <CardBody>
        <Stack mt="6" spacing="3">
          <Heading fontSize="2xl">{val.Thumbnail}</Heading>
          <Text color="blue.600" fontSize="2xl">{val.fullName}</Text>
          <Text color="blue.600" fontSize="2xl">{val.category}</Text>
          <Text color="blue.600" fontSize="2xl">{val.language}</Text>
          <Text color="blue.600" fontSize="2xl">{val.description}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter></CardFooter>
    </Card>))}
    </Flex>
  );
}
