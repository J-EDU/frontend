import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Image,
  useColorModeValue,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
 import logos from "../../assesst/logoo.png";

const Logo = (props) => {
  return <Image src={logos}  alt={"Imge Not Found"} mr={100} ml={-10} mt={-30} width={70} />;
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithNewsletter() {
  return (
    <Box
      bg={"gray.200"}
      w="100%"
      p="64px 32px"
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Flex direction={"column"} align="center" width={"100%"}>
        <Flex direction={"row"} px={"10%"} w={"100%"} gap="80px" pb={8}>
          <Stack spacing={6} w="100%">
            <Box>
              <Logo color={useColorModeValue("gray.700", "white")} />
            </Box>
            <Text fontSize={"16px"} width={"105%"} textAlign="start" mt={-100}>
              This is an online learning platform provides different courses in
              a very convenient environment.
            </Text>
          </Stack>
          <Stack align={"flex-start"} w="100%">
            <Text fontSize="24px">Company</Text>
            <Link fontSize={"18px"} href={"/"}>
              Home
            </Link>
            <Link fontSize={"18px"} href={"/about"}>
              About 
            </Link>
            <Link fontSize={"18px"} href={"/contact"}>
              Contact
            </Link>
          </Stack>
          <Stack align={"flex-start"} w="100%">
            <Text fontSize="24px">Services</Text>
            <Link fontSize={"18px"} href={"/courses"}>
              Courses
            </Link>
            <Link fontSize={"18px"} href={"#"}>
              Profile
            </Link>
            <Link fontSize={"18px"} href={"/feed"}>
              Feedback
            </Link>
          </Stack>
          <Stack align={"flex-start"} w="100%">
            <Text fontSize="24px">Contact</Text>
            <Link fontSize={"18px"} href={"#"}>
              Amman-Jordan
            </Link>
            <Link fontSize={"18px"} href={"#"}>
              jedu@gmail.com
            </Link>
            <Link fontSize={"18px"} href={"#"}>
              + 962 792 567 088
            </Link>
          </Stack>
        </Flex>
      </Flex>
      <Box w="100%" h="1px" border="1px solid" borderColor="gray.300" />
      <VStack w="100%" align="center" pt={8}>
        <Stack direction={"row"} spacing={16} pb={2}>
          <FaTwitter size={28} cursor={"pointer"}/>
          <FaYoutube size={28} cursor={"pointer"} />
          <FaInstagram size={28} cursor={"pointer"}/>
        </Stack>
        <Text fontSize={"18px"} fontWeight={"bold"} sx={{"& span": {color:"black"}}}>
        All rights reserved. Copyright ©{new Date().getFullYear()}
        </Text>
      </VStack>
    </Box>
  );
}