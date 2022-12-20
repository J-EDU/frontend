import { useState } from "react";
import React from "react";

import axios from "axios";
import cookies from "react-cookies";
import feedbackimage from "../../assesst/feedbackimage.png";
import {
  useToast,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  VStack,
  Image,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";

const initialStateData = {
  text: "",
};
function Feedbackcard() {
  const toast = useToast();

  const [data, setData] = useState(initialStateData);

  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  async function feedback(e) {
    e.preventDefault();

    const url = `${process.env.REACT_APP_SERVER}/root/feedback/addfeedback`;
    const user = {
      text: data.text,
    };

    const token = cookies.load("token");

    const bearer = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const axiosResponse = await axios.post(url, user, bearer).then((res) => {
        toast({
            title: 'Feedback Added.',
            status: 'success',
            duration: 5000,
            isClosable: true,
          })
    });
  }
  return (
    <Flex w={"100%"} >
        
      <VStack align={"center"} w="100%" zIndex={1}>
        {/* <Image alt="Image Not Found" src={Photo} w={"100%"} h="100vh" zIndex={0} /> */}
        <Box
          top="20vh"
          bg="#805ad5"
          color="#0B0E3F"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Feedback</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="#f3ebff">
                    Fill up the form below and till us <br/>about your experience in our website
                  </Text>
                  <Image alt ="image not found" src ={feedbackimage} width={'300px'} h="40vh"/>
                
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />}
                          />
                          <Input type="text" name="email" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="email">
                        <FormLabel>Feedback</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEmail color="gray.800" />}
                          />
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="text">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          name="text"
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: "gray.300",
                          }}
                          placeholder="message"
                          onChange={(e) => handleChange(e)}
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button
                          variant="solid"
                          bg="#805ad5"
                          color="white"
                          _hover={{}}
                          onClick={feedback}
                        >
                          Send Feedback
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </VStack>
      
    </Flex>
  );
}
export default Feedbackcard;