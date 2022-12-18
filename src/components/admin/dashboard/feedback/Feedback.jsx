import {
  Button,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import Swal from "sweetalert2";
import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { Table } from "react-chakra-pagination";
import {
  Flex,
  Avatar,
  Text,
  Box,
  Icon,
  Heading,
  VStack,
  HStack,
  Alert,
  AlertIcon,
  useToast,
} from "@chakra-ui/react";

import { FiTrash2, FiUser } from "react-icons/fi";
import { FcSms } from "react-icons/fc";
import { FcFeedback } from "react-icons/fc";

import axios from "axios";

const tableColumns = [
  {
    Header: "Name",
    accessor: "user",
  },
  {
    Header: "Feedback",
    accessor: "Feedback",
  },
  {
    Header: "Rate",
    accessor: "Rate",
  },
  {
    Header: "Date",
    accessor: "Date",
  },
  {
    Header: "",
    accessor: "action",
  },
  {
    Header: "",
    accessor: "action2",
  },
];

const Feedback = () => {
  const toast = useToast();
  const [page, setPage] = useState(1);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [data, setData] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef();
  const initialRef = React.useRef(null);
  const [selectedUser, setSelectedUser] = useState({});


  const callDelete = async (e) => {
    axios
      .delete(
        `${process.env.REACT_APP_LOCAL}/feedback/deleteFeedback/${e.id}`,
        {
          headers: { Authorization: `Bearer ${process.env.REACT_APP_TOKEN}` },
        }
      )
      .then((result) => {
        toast({
          title: `Deleted Succsefully`,
          status: "success",
          isClosable: true,
        });
      })
      .catch((err) => {
        toast({
          title: `Error Happend`,
          status: "error",
          isClosable: true,
        });
      });
  };

  const sendEmail = (e) => {
    
    const values = {
      message,
      email,
      fullName
    }
   

   emailjs
     .send("service_27vymhf", "template_leeh75d", values, "wdxxKSJkAz_LEFXdQ")
     .then(
       (response) => {
        
         onClose()
         Swal.fire({
           position: "center-center",
           icon: "success",
           title: "Email has been sent ",
           showConfirmButton: false,
           timer: 1500,
         });
         setMessage("")
         setEmail("")
         setFullName("")
       },
       (error) => {
        onClose();
          Swal.fire({
            position: "center-center",
            icon: "error",
            title: "Something Went Wrong",
            showConfirmButton: false,
            timer: 1500,
          });
          setMessage("");
          setEmail("");
          setFullName("");
       }
     );
  };

  const fetchData = async () => {
    let { data } = await axios.get(`${process.env.REACT_APP_LOCAL}/feedback/`, {
      headers: { Authorization: `Bearer ${process.env.REACT_APP_TOKEN}` },
    });
    var Localdata = data.feedback;
    setData(Localdata);
  };

  useEffect(() => {
    fetchData();
  });

  const tableData = data.map((user) => ({
    user: (
      <HStack marginTop={0} marginStart={0}>
        <Avatar
          name={user.user.fullName}
          src={`https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png`}
          size="sm"
          mr="1"
          mt={0}
        />
        <VStack alignItems={"start"}>
          <Text> {user.user.fullName} </Text>
          <Text color={"#82C3EC"}>
            {"@"}
            <a href={`mailto:${user.user.email}`}>{user.user.email}</a>{" "}
          </Text>
        </VStack>
      </HStack>
    ),

    Feedback: (
      <Text
        fontFamily={`'Raleway', sans-serif`}
        fontSize={"12px"}
        maxWidth={"222px"}
      >
        {user.text}
      </Text>
    ),
    Rate: (
      <div>
        <span
          className={"fa fa-star"}
          style={{ color: `${user.rating >= 1}? "yellow" : "black" ` }}
        ></span>
        <span
          className={"fa fa-star"}
          style={{ color: `${user.rating >= 2}? "yellow" : "black" ` }}
        ></span>
        <span
          className="fa fa-star "
          style={{ color: `${user.rating >= 3}? "yellow" : "black" ` }}
        ></span>
        <span
          className="fa fa-star"
          style={{ color: `${user.rating >= 4}? "yellow" : "black" ` }}
        ></span>
        <span
          className="fa fa-star"
          style={{ color: `${user.rating >= 5}? "yellow" : "black" ` }}
        ></span>
      </div>
    ),
    Date: user.createdAt.split("T")[0],

    action: (
      <Button
        colorScheme="gray"
        p={0}
        onClick={() => callDelete(user)}
        size="sm"
        padding={2}
      >
        <Icon as={FiTrash2} fontSize="20" />
      </Button>
    ),

    action2: (
      <Button
        p={0}
        colorScheme={"blue"}
        onClick={() => {
          setSelectedUser(user.user);
          setEmail(user.user.email);
          setFullName(user.user.fullName);
          onOpen();
        }}
        size="sm"
        padding={2}
      >
        <Icon as={FcSms} fontSize="20" />
        <Text>Replay</Text>
      </Button>
    ),
  }));

  return (
    <>
   
      <Box p="1">
        <Heading size="sm" as="h3">
          FeedBack
        </Heading>
        <Box mt="2">
          <Table
            colorScheme="blue"
            emptyData={{
              icon: FcFeedback,

              text: "No Feed Back Yet",
            }}
            totalRegisters={data.length}
            page={page}
            onPageChange={(page) => setPage(page)}
            columns={tableColumns}
            data={tableData}
          />
        </Box>
      </Box>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Replay to this Review</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl mt={4}>
              <FormLabel>Replay</FormLabel>
              <Textarea
                placeholder="Here is a sample placeholder"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={() => sendEmail()}>
              Send
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Feedback;
