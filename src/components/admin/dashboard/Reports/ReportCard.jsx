import emailjs from "emailjs-com";
import {
  CheckIcon,
  DeleteIcon,
  EmailIcon,
  WarningTwoIcon,
} from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { Player } from "video-react";
import Swal from "sweetalert2";
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
import { findLastIndex } from "lodash";

const ReadMore = ({ children }) => {
  const text = children;

  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 150) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? (
          <Text as="b" color={"#82C3EC"} cursor={"pointer"}>
            {" "}
            {"...Read More"}
          </Text>
        ) : (
          <Text as="b" color={"#82C3EC"} cursor={"pointer"}>
            {" "}
            {"...Show less"}
          </Text>
        )}
      </span>
    </p>
  );
};

const ReportCard = ({
  report,
  DeleteVideoandSendEmail,
  DeleteReportandSendEmail,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef();
  const [message, setMessage] = useState("");
  const initialRef = React.useRef(null);
  const [isVideo, setisVideo] = useState(false);

  const sendEmail = (e) => {
    const values = {
      message,
      email: report.user.email,
      fullName: report.user.fullName,
    };

    emailjs
      .send("service_27vymhf", "template_leeh75d", values, "wdxxKSJkAz_LEFXdQ")
      .then(
        (response) => {
          onClose();
         
          setMessage("");
          if (isVideo) DeleteVideoandSendEmail(report);
          else DeleteReportandSendEmail(report);

          setisVideo(false);
        },
        (error) => {
          onClose();
          Swal.fire({
            position: "center-center",
            icon: "error",
            title: "Something Went Wrong while sending Email ",
            showConfirmButton: false,
            timer: 1500,
          });
          setMessage("");
        }
      );
  };

  return (
    <Box padding={2} borderRadius={5}>
      <Card maxW="sm" width={"330px"} bgColor={"#F4F9F9"}>
        <CardHeader>
          <Flex spacing="2">
            <Flex flex="1" gap="2" alignItems="center" flexWrap="wrap">
              <Avatar
                name={report.user.fullName}
                src="https://bit.ly/sage-adebayo"
              />

              <Box>
                <Heading size="sm">{report.user.fullName}</Heading>
                {/* <Text>Creator, Chakra UI</Text> */}
              </Box>
            </Flex>

            <Menu>
              <MenuButton>
                <IconButton
                  variant="ghost"
                  colorScheme="gray"
                  aria-label="See menu"
                  icon={<BiDotsVerticalRounded />}
                  // onClick={() => alert("hassan")}
                />
              </MenuButton>
              <MenuList>
                {/* MenuItems are not rendered unless Menu is open */}
                <MenuItem
                  icon={<DeleteIcon />}
                  color={"red"}
                  onClick={() => {
                    setisVideo(true);
                    onOpen();
                  }}
                >
                  Delete Video and Send Email
                </MenuItem>
                <MenuItem
                  icon={<EmailIcon />}
                  onClick={() => {
                    setisVideo(false);
                    onOpen();
                  }}
                >
                  Delete Report and Send Email
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </CardHeader>
        <CardBody>
          <Box display={"flex"} justifyContent={"center"}>
            <Text fontSize={"15px"} fontWeight={"bold"}>
              {report.reportTitle}
            </Text>
          </Box>

          <Text fontFamily={"Heading Font Name"}>
            {report.reportDiscription.length > 250 ? (
              <ReadMore>DESCRIPTION: {report.reportDiscription}</ReadMore>
            ) : (
              <Text>DESCRIPTION: {report.reportDiscription}</Text>
            )}
          </Text>
          <Text fontFamily={"Heading Font Name"} as="b">
            DATE : {report.createdAt.split("T")[0]}
          </Text>
          <Box borderRadius={2}>
            <Player
              playsInline
              width={"100%"}
              muted
              src={`${report.video.URL}`}
            />
          </Box>
        </CardBody>
      </Card>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Send Email to User</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl mt={4}>
              <FormLabel>Message</FormLabel>
              <Textarea
                placeholder="Write the Email"
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
    </Box>
  );
};

export default ReportCard;
