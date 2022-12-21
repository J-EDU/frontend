import React, { useEffect, useState } from "react";
import axios from "axios";
import cookies from "react-cookies";

import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Flex,
  Divider,
  Stack,
  Text,
  AspectRatio,
  VStack,
} from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";

const initialStateData = {
  fullName: "",
  description: "",
  Thumbnail: "",
  URL: "",
};
export default function ViewVideo() {
  const [data, setState] = useState([]);
  useEffect(() => {
    const token = cookies.load("token");
    const url = `${process.env.REACT_APP_SERVER}/root/video`; //http://localhost:5000/root/wishList

    const viewcourse = {
      fullName: data.fullName,
      description: data.description,
      Thumbnail: data.Thumbnail,
      URL: data.URL,
    };
    const bearer = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios.get(url, bearer).then((res) => {
      setState(res.data.videos);
    });
  }, []);

  return (
    <Flex>
      <VStack align="center" w={"100%"} p="20px">
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {data.length >= 0 &&
            data.map((val, idx) => (
              <Card w="450px" bg='gray.50' key={idx}>
                <CardBody>
                  <Stack mt="6" spacing="3">
                    <Heading fontSize="2xl" color="blue.600" >Full Name: {val.fullName}</Heading>
                    <Text color="blue.600" fontSize="2xl">
                      Description: {val.description}
                    </Text>
                    <Text color="blue.600" fontSize="2xl">
                    Thumbnail: {val.Thumbnail}
                    </Text>
                    <AspectRatio ratio={0.5}>
                      <iframe src={val.URL} allowFullScreen />
                    </AspectRatio>
                  </Stack>
                </CardBody>
                <Divider />
              </Card>
            ))}
        </Grid>
      </VStack>
    </Flex>
  );
}
