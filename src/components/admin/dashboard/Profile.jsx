import React, { useEffect, useState } from 'react';
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  HStack,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
  Box,
  Text,
  Badge,
  Divider,
  Textarea,
  WrapItem,
  Wrap,
} from "@chakra-ui/react";
import { BiBlock } from "react-icons/bi";
import { useLocation, Navigate } from "react-router-dom";




function Profile() {
  const location = useLocation();
  const [user,setUser]  = useState({})
  
  useEffect(() => {
    const data = location.state;
    setUser(data)
  })

  return (
    <>
      <Stack direction={{ base: "column", md: "row" }}>
        {!user ? (
          <Navigate to="/users" />
        ) : (
          <>
            <Box
              display={"flex"}
              align={"center"}
              justify={"center"}
              paddingTop={0}
              paddingLeft={2}
            >
              <SocialProfileSimple user={user} />
            </Box>
            <Box
              display={"flex"}
              align={"center"}
              justify={"center"}
              w={"100%"}
              marginLeft={1}
              paddingLeft={1}
            >
              <UserProfileEdit user={user} />
            </Box>
          </>
        )}
      </Stack>
    </>
  );
}

export default Profile; 


export function SocialProfileSimple({user}) {

    let isAdmin = true;

  return (
    <Center p={0}>
      <Box
        maxW={{ base: "300px", md: "400px", sm: "90%" }}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <Avatar
          size={"xl"}
          src={`${user.URL}`}
          alt={`${user.fullName}`}
          mb={4}
          pos={"relative"}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: "green.300",
            border: "2px solid white",
            rounded: "full",
            pos: "absolute",
            bottom: 0,
            right: 3,
          }}
        />
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          {user.fullName}
        </Heading>
        <Text fontWeight={600} color={"gray.500"} mb={4}>
          {user.email}{" "}
        </Text>
        <Text
          textAlign={"center"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
        ></Text>

        <Wrap spacing="30px">
          <WrapItem>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue("gray.50", "gray.800")}
              fontWeight={"400"}
            >
              #art
            </Badge>
          </WrapItem>
          <WrapItem>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue("gray.50", "gray.800")}
              fontWeight={"400"}
            >
              #art
            </Badge>
          </WrapItem>
          <WrapItem>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue("gray.50", "gray.800")}
              fontWeight={"400"}
            >
              #art
            </Badge>
          </WrapItem>
          <WrapItem>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue("gray.50", "gray.800")}
              fontWeight={"400"}
            >
              #art
            </Badge>
          </WrapItem>
          <WrapItem>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue("gray.50", "gray.800")}
              fontWeight={"400"}
            >
              #MAthmit
            </Badge>
          </WrapItem>
        </Wrap>
        {/* <Stack align={"center"} justify={"center"} direction={"column"} mt={6}>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue("gray.50", "gray.800")}
            fontWeight={"400"}
          >
            #photography
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue("gray.50", "gray.800")}
            fontWeight={"400"}
          >
            #photography
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue("gray.50", "gray.800")}
            fontWeight={"400"}
          >
            #photography
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue("gray.50", "gray.800")}
            fontWeight={"400"}
          >
            #music
          </Badge>
        </Stack> */}
        <Heading size="md">ABOUT</Heading>
        <Divider />
        <Text>{user.about}</Text>

        {isAdmin && (
          <>
            <Stack mt={8} direction={"row"} spacing={4}>
              {1 === 0 ? (
                <>
                  <Button
                    flex={1}
                    fontSize={"sm"}
                    leftIcon={<BiBlock />}
                    rounded={"full"}
                    bg={"red.400"}
                    color={"white"}
                    boxShadow={
                      "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                    }
                    _hover={{
                      bg: "red.500",
                    }}
                    _focus={{
                      bg: "red.500",
                    }}
                  >
                    Block
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    flex={1}
                    fontSize={"sm"}
                    leftIcon={<BiBlock />}
                    rounded={"full"}
                    bg={"green.400"}
                    color={"white"}
                    boxShadow={
                      "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                    }
                    _hover={{
                      bg: "green.500",
                    }}
                    _focus={{
                      bg: "green.500",
                    }}
                  >
                    Un Block
                  </Button>
                </>
              )}
            </Stack>
          </>
        )}
      </Box>
    </Center>
  );
}

export function UserProfileEdit({user}) {
     let [value, setValue] = React.useState("");

     let handleInputChange = (e) => {
       let inputValue = e.target.value;
       setValue(inputValue);
     };
    
  return (
    <Box
      //   minH={"100vh"}
      display={"flex"}
      w={"100%"}
      bgColor={"white"}
    >
      <Stack
        spacing={4}
        // maxW={"md"}
        w={"100%"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={5}
      >
        <FormControl id="userName">
          <FormLabel>User Icon</FormLabel>
          <Stack direction={["column", "row"]} spacing={6}>
            <Center>
              <Avatar size="xl" src={`${user.URL}`}>
                <AvatarBadge
                  as={IconButton}
                  size="sm"
                  rounded="full"
                  top="-10px"
                  colorScheme="green"
                  aria-label="remove Image"
                  //   icon={< />}
                />
              </Avatar>
            </Center>
            <Center w="full">
              <Button w="full">Change Icon</Button>
            </Center>
          </Stack>
        </FormControl>

        <Stack direction={{ base: "row", md: "row", sm: "column" }} spacing={8}>
          <FormControl id="userName" isRequired>
            <FormLabel>User name</FormLabel>
            <Input
              placeholder="UserName"
              //   width={"px"}
              _placeholder={{ color: "gray.500" }}
              type="text"
              value={user.fullName}
            />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              placeholder="your-email@example.com"
              _placeholder={{ color: "gray.500" }}
              type="email"
              value={user.email}
            />
          </FormControl>
        </Stack>

        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            placeholder="password"
            _placeholder={{ color: "gray.500" }}
            type="password"
          />
        </FormControl>

        <FormControl id="aboutControl" isRequired>
          <FormLabel>About</FormLabel>
          <Textarea
            onChange={handleInputChange}
            placeholder="About"
            size="sm"
            value={user.about}
          />
        </FormControl>
        <Stack spacing={6}>
          <Button
            bg={"blue.400"}
            color={"white"}
            w="full"
            _hover={{
              bg: "blue.500",
            }}
          >
            Update
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
