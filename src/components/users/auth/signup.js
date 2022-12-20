import React from "react";
import axios from "axios";
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
  Heading

} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import logo from "../../assesst/jedu.PNG";
import img from "../../assesst/sign4.png"

const initialStateData = {
  fullName: "",
  email: "",
  phoneNumber: "",
  birthday: "",
  password: "",
  confirmPassword: "",
};
function Signup2() {
  const toast = useToast();

  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState(initialStateData);

  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  async function signUp(e) {
    e.preventDefault();
    if (data.password !== data.confirmPassword) {
      alert("Password is not matches with confirm password");
    } else {
      const url = `${process.env.REACT_APP_SERVER}/root/user/signup`; //http://localhost:5000/root/user/signup
      const user = {
        fullName: data.fullName,
        email: data.email,
        password: data.password,
        phoneNumber: data.phoneNumber,
        birthday: data.birthday,
      };
      const addedUser = await axios.post(url, user).then((res) => {
        toast({
          title: "Signed successfully",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      });

      console.log(addedUser.data);
    }
  }

  
  return (
    <HStack  h="120vh" ml="40vh">
    <Flex w="70vh" h="110vh" borderRightWidth={1}display={{base:'none', md:'flex'}}>
        <Image  objectFit="cover" w="full" h="full" src={img}/>
    </Flex>

    <Flex w="60vh" h="111vh" alignItems="center" justifyContent="cenetr" border='1px' borderColor='gray.200'>
        <Stack w="full" maxW="md" spacing={4} p={6} >

            <Heading fontSize="2xl" color="purple.500">
                Join Us
            </Heading>
        
            <FormControl isRequired>
                           <FormLabel>Full Name</FormLabel>
                           <Input
                             type="text"
                             name="fullName"
                             onChange={(e) => handleChange(e)}
                           />
                         </FormControl>
                       
                       <FormControl isRequired>
                       <FormLabel>Email address</FormLabel>
                       <Input
                         type="email"
                         name="email"
                         id="email"
                         onChange={(e) => handleChange(e)}
                       />
                     </FormControl>
                     <FormControl id="phonenumber" isRequired>
                         <FormLabel>Phone number</FormLabel>
                         <Input
                           type="tel"
                           name="phoneNumber"
                           onChange={(e) => handleChange(e)}
                         />
                       </FormControl>
                       <FormControl id="birthday" isRequired>
                         <FormLabel>Birthday</FormLabel>
                         <Input
                           type="date"
                           name="birthday"
                           onChange={(e) => handleChange(e)}
                         />
                       </FormControl>
                       <FormControl id="passwordsu" isRequired>
                       <FormLabel>Password</FormLabel>
                       <InputGroup>
                         <Input
                           type={showPassword ? "text" : "password"}
                           name="password"
                           onChange={(e) => handleChange(e)}
                         />

                         <InputRightElement>
                           <Button
                             variant={"ghost"}
                             onClick={() =>
                               setShowPassword((showPassword) => !showPassword)
                             }
                           >
                             {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                           </Button>
                         </InputRightElement>
                       </InputGroup>
                     </FormControl>
                     <FormControl id="confirmPassword" isRequired>
                       <FormLabel>Confirm Password</FormLabel>
                       <InputGroup>
                         <Input
                           type={showPassword ? "text" : "password"}
                           name="confirmPassword"
                           onChange={(e) => handleChange(e)}
                         />

                         <InputRightElement>
                           <Button
                             variant={"ghost"}
                             onClick={() =>
                               setShowPassword((showPassword) => !showPassword)
                             }
                           >
                             {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                           </Button>
                         </InputRightElement>
                       </InputGroup>
                     </FormControl>
                      
                      <FormControl id="name" float="right">
                      
                      </FormControl>

            {/* <Stack spacing={4} direction="row" align="start" justify="space-between">
                <Checkbox colorScheme="purble"> Remeber me</Checkbox>
                <Link color="purble.500">Forgot password?</Link>
            </Stack> */}

            <Button colorScheme="purple"  loadingText="Submitting"  onClick={signUp}>Sign Up</Button>
        </Stack>
    </Flex>
   </HStack>
  );
}
export default Signup2;