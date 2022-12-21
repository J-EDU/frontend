import React, { useState } from 'react';
import cookies from "react-cookies";
import axios from 'axios';
import base64 from "base-64";
import Photo from "../../assesst/backcolor.jpg";
import img from '../../assesst/signin1.png'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
	Flex,
	useToast,
	Box,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputRightElement,
	Button,
	Heading,
	VStack,
	Wrap,
	WrapItem,
	Image,
    Stack,
    HStack,
    Checkbox,
    Link,
} from '@chakra-ui/react';

const initialStateData = {
	email: "",
	password: "",

}

export default function Signin2() {

	const toast = useToast();

    const [showPassword, setShowPassword] = useState(false);
	const [data, setData] = useState(initialStateData)

	const handleChange = (e) => {
		setData((prev) => ({
			...prev,
			[e.target.name]: e.target.value
		}));
	}

	async function Login(e) {
		e.preventDefault();
		const user = {
			email: data.email,
			password: data.password,

		};

		const encoded = base64.encode(`${user.email}:${user.password}`)
		const res = await axios.post(`${process.env.REACT_APP_SERVER}/root/user/login`,
			{}, {
			headers: {
				Authorization: `Basic ${encoded}`,
			},
		}
		).then((response) => {
			toast({
				title: 'Signed successfully',
				status: 'success',
				duration: 5000,
				isClosable: true,
			  })
      cookies.save("token", response.data.user.token)
	  cookies.save("user", response.data.user.fullName)
	  if (response){
		window.location.href = window.location.origin + "/"
	  }
    })
		// cookies.save('token', res.data.token)
	}
	return (
    <>
   <HStack h="100vh" ml="30vh">
    <Flex w="80vh" h="60vh" borderRightWidth={1}display={{base:'none', md:'flex'}} bg={"#083AA9"}>
        <Image  objectFit="cover" w="full" h="full" src={img}/>
    </Flex>

    <Flex w="80vh" h="60vh" alignItems="center" justifyContent="cenetr" border='1px' borderColor='gray.200'>
        <Stack w="full" maxW="md" spacing={4} p={6}  >

            <Heading fontSize="2xl" color="#083AA9">
                Sign in to your account
            </Heading>
            <FormControl id="user">
                <FormLabel>Email</FormLabel>
                <Input placeholder='Email' type={"email"} name={"email"} onChange={(e) => handleChange(e)} />
            </FormControl>

            <FormControl id="password">
                <FormLabel>Password</FormLabel>
               
                <InputGroup>
 								<Input type={showPassword ? 'text' : 'password'} name='password' onChange={(e) => handleChange(e)} placeholder='●●●●●'/>
 								<InputRightElement  h={'full'}>
 										<Button
 											variant={'ghost'}
 											onClick={() =>
 												setShowPassword((showPassword) => !showPassword)
 											}>
 											{showPassword ? <ViewIcon /> : <ViewOffIcon />}
 										</Button>
 									</InputRightElement>
 									</InputGroup>
            </FormControl>

            {/* <Stack spacing={4} direction="row" align="start" justify="space-between">
                <Checkbox colorScheme="purble"> Remeber me</Checkbox>
                <Link color="purble.500">Forgot password?</Link>
            </Stack> */}

            <Button  bg={"#083AA9"} color={"white"} onClick={Login} loadingText="Submitting">Sign in</Button>
        </Stack>
    </Flex>
   </HStack>

</>


    )}	