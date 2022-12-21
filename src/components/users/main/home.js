import React from "react";
import brain from "../../../assesst/new.png";
import CaptionCarousel from "./announ.js";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
  HStack
  } from "@chakra-ui/react";
  import { Card, ButtonGroup,Stack,Divider, CardBody, CardFooter } from '@chakra-ui/react'
import './home.css'
export const Home = () => {

  return (
    <Flex w='100%' direction='column' gap='40px'>
      <Box bg={'#FEFCF3'} 
>
        <Flex direction='row' justifyContent={"space-between"} px='100px' alignContent={"center"}>
          

          <VStack w='100%' >
            <Flex  gap='20px' pt='20px' direction='column' mt={9} >
              <Heading >
                Start Your <br />
                Future Education
              </Heading>
            
              <Text fontSize={"20"} >
                Education is a key to bright future. <br />
                Education is a powerful weapon as <br />
                it can transform our lives by enabling <br />
                us to live our dreams.
              </Text>
            </Flex>
            <Flex >
              <Button mr={220} bg="rgb(8, 58, 169)"
              _hover={{
                bg: "blue.600",
              }}
                          color="#FFE7CC">
                Get Started
              </Button>
            </Flex>
          </VStack>
          <Image mt={"19"} src={brain}/>
        </Flex>
      </Box>
      
      
         {/* <PopularCourse/> */}
         
      <Flex w='100%' bg='gray.100'>
        <CaptionCarousel />
      </Flex>
      <Box bg={'#FEFCF3'}>
      <Heading  textAlign={"center"} color={"blue"}>Popular Courses</Heading>

      <Flex direction={"row"} gap={"100px"} ml={"90px"} my='50px'  >
      <Card maxW='sm' bg='gray.100'>
  <CardBody>
    <Image 
      src='https://wscats.gallerycdn.vsassets.io/extensions/wscats/html-snippets/1.0.6/1607691009387/Microsoft.VisualStudio.Services.Icons.Default'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      h={"200px"}

    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Html Css JS</Heading>
      <Text>
        This is a documentation about Html and Css and JS and video about this
      </Text>
      
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
    <form  action="https://www.w3schools.com/html/default.asp">
    <input className="button2" type="submit" value="Documentation" />
    </form>

    <form  action="https://www.youtube.com/watch?v=G3e-cpL7ofc">
    <input className="button" type="submit" value="Youtube" />
    </form>
    </ButtonGroup>
  </CardFooter>
</Card>
<Card maxW='sm' bg='gray.100'>
  <CardBody>
    <Image
      src='https://miro.medium.com/max/1400/1*CpDidbInbG4Er_0j_hknFQ.jpeg'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      h={"200px"}
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>React And Node</Heading>
      <Text>
                This is a documentation about React and Node and video about this

      </Text>
      
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
    <form  action="https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/">
    <input className="button2" type="submit" value="Documentation" />
    </form>

    <form  action="https://www.youtube.com/watch?v=w3vs4a03y3I">
    <input className="button" type="submit" value="Youtube" />
    </form>
    </ButtonGroup>
  </CardFooter>
</Card>
<Card maxW='sm' bg='gray.100'>
  <CardBody>
    <Image
      src='https://www.educative.io/v2api/editorpage/6474950975160320/image/5418859092770816'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      h={"200px"}

    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Mongo And Postgress</Heading>
      <Text>
                This is a documentation about MongoDB and Postgresql and video about this

      </Text>
      
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
     <form  action="https://kinsta.com/blog/mongodb-vs-postgresql/">
    <input className="button2" type="submit" value="Documentation" />
    </form>

    <form  action="https://www.youtube.com/watch?v=eM7hzKwvTq8">
    <input className="button" type="submit" value="Youtube" />
    </form>
    </ButtonGroup>
  </CardFooter>
</Card>
</Flex>
</Box>
</Flex>
    
  );
};
