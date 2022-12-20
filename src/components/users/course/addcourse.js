import React, { useEffect, useState } from "react";
import axios from "axios";
import cookies from "react-cookies";
import addcourse2 from "../../assesst/addcourse2.png";

import {
  Flex,
  useToast,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Text,
  Center,
  Link,
  Image,
  VStack,
  WrapItem,
  Wrap,
  Heading,
} from "@chakra-ui/react";

const initialStateData = {
  fullName: "",
  description: "",
  category: "",
  language: "",
  Thumbnail: "",
  tag: [""],
};
function AddCourse() {
  const toast = useToast();

  const [data, setData] = useState(initialStateData);

  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  async function addCourse(e) {
    e.preventDefault();
    const token = cookies.load("token");
    const url = `${process.env.REACT_APP_SERVER}/root/course/addcourse`; //http://localhost:5000/root/course/addcourse
    const course = {
      fullName: data.fullName,
      description: data.description,
      category: data.category,
      language: data.language,
      Thumbnail: data.Thumbnail,
      tag: [data.tag],

    };
    const bearer = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const addedCourse = await axios.post(url, course, bearer).then((res) => {
      toast({
        title: "Signed successfully",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    });

    console.log(addedCourse.data);
  }
  return (
    <Flex w={"100%"}>
      <VStack align={"center"} w="100%" zIndex={1} >
      {/* <Image alt="Image Not Found"  w={"100%"} h="100vh" zIndex={0} /> */}

        <Box
        // position={"absolute"}
          top="20vh"
          bg="#805ad5"
          color="#0B0E3F"
          borderRadius="lg"
          objectFit={"cover"}
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
		
        >
          <Box p={4} >
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box >
                  <Stack mt='5'>
                  <Heading color={"white"} >Add Course</Heading>
                  </Stack>
                  <Text fontSize='xl'>
                    fill the information needed to add the course
                  </Text>
                  <Stack
                  mt='30'
                 >
                  <Image alt ="image not found" src ={addcourse2} width={'450px'} h="45vh" m={{sm: 4}}/>
                  </Stack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg" w={'400px'} >
                  <Box m={8} color="#805ad5" >
                    <VStack spacing={5}>
                      <FormControl isRequired>
                        <FormLabel>Full Name</FormLabel>
                        <Input
                          type="text"
                          name="fullName"
                          onChange={(e) => handleChange(e)}
						 
                        />
                      </FormControl>

                      <FormControl isRequired>
                        <FormLabel>Description</FormLabel>
                        <Input
                          type="text"
                          name="description"
                          id="description"
                          onChange={(e) => handleChange(e)}
						  
                        />
                      </FormControl>
                      <FormControl id="language" isRequired>
                        <FormLabel>Language</FormLabel>
                        <Input
                          type="text"
                          name="language"
                          onChange={(e) => handleChange(e)}
						  color={"#805ad5"}
                        />
                      </FormControl>
                      

                      <FormControl id="category" isRequired>
                        <FormLabel>Category</FormLabel>
                        <Input
                          type="text"
                          name="category"
                          onChange={(e) => handleChange(e)}
						  color={"#805ad5"}
                        />
                      </FormControl>
                      <FormControl id="tag" isRequired>
                        <FormLabel>Tag</FormLabel>
                        <Input
                          type="text"
                          name="tag"
                          onChange={(e) => handleChange(e)}
						  color={"#805ad5"}
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button
                          loadingText="Submitting"
                          size="lg"
                          bg={"#805ad5"}
                          color={"white"}
                          _hover={{
                            bg: "pink.600",
                          }}
                          onClick={addCourse}
                        >
                          Add Course
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
export default AddCourse; 