import React, { useEffect, useState } from "react";
import { color, useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import cookies from "react-cookies";

import {
  Card,
  Input,
  CardBody,
  CardFooter,
  Heading,
  Flex,
  Divider,
  Stack,
  Text,
  Button,
  VStack,
} from "@chakra-ui/react";

import { Grid, GridItem } from "@chakra-ui/react";

// imports for modal
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const initialStateData = {
  fullName: "",
  description: "",
  category: "",
  language: "",
};
export default function ViewCourse() {
  // Modal State
  const { isOpen, onClose } = useDisclosure();
  const [displayModal, setDisplayModal] = useState(false);
  const [courseID, setCourseID] = useState("");
  const [data, setState] = useState([]);
  useEffect(() => {
    const token = cookies.load("token");
    const url = `${process.env.REACT_APP_SERVER}/root/course`; //http://localhost:5000/root/wishList

    const viewcourse = {
      fullName: data.fullName,
      description: data.description,
      category: data.category,
      language: data.language,
    };
    const bearer = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios.get(url, bearer).then((res) => {
      setState(res.data.courses);
    });
  }, []);

  return (
    <Flex>


      <VStack w="100%" align="center" p="20px">
      <Heading color="rgb(8, 58, 169)" textAlign={"center"}>Courses</Heading>
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          {data.length >= 0 &&
            data.map((val, idx) => (
              <GridItem w="100%" key={idx}>
                <Card maxW="lg" key={idx} bg="gray.50" h="600px">
                  <CardBody h="300px">
                    <Stack mt="6" spacing="3"sx={{"& span": {
                        color: "black"
                      }}}>
                      <Text color="blue.600" fontSize="25px"sx={{"& span": {
                        color: "black"
                      }}}>
                        <img src="https://www.theopencollege.com/wp-content/uploads/2013/08/digital-marketing-course-458-x-305px.jpg" alt="image not found"/>
                        <a href={window.location.origin + '/AddVedio'}><span>Course Name:</span>{val.fullName} </a>
                      </Text>
                      <Text color="blue.600" fontSize="21px"sx={{"& span": {
                        color: "black"
                      }}}>
                        <span>Category: </span>{val.category}
                      </Text>
                      <Text color="blue.600" fontSize="21px"sx={{"& span": {
                        color: "black"
                      }}}>
                        <span>Course Language: </span>{val.language}
                      </Text>
                      <Text color="blue.600" fontSize="21px" sx={{"& span": {
                        color: "black"
                      }}}>
                        <span>Course Description:</span> {val.description}
                      </Text>
                    </Stack>
                  </CardBody>
                  <Divider />
                  <CardFooter h={"75px"}>
                    <Button
                      onClick={() => {
                        setCourseID(val.id);
                        setDisplayModal(true);
                      }}
                      _hover={{
                        bg: "blue.600"}}
                      w="100%"
                      textAlign={"center"}
                      bg={"rgb(8, 58, 169)"}
                      textColor={"#FFE7CC"}

                    >
                      Add video
                    </Button>
                  </CardFooter>
                </Card>
              </GridItem>
            ))}
          {displayModal && (
            <ViewCourseModal
              setDisplayModal={setDisplayModal}
              courseID={courseID}
            />
          )}
        </Grid>
      </VStack>
    </Flex>
  );
}

const ViewCourseModal = ({ setDisplayModal, courseID }) => {
  const [uploadVideoData, setUploadVideoData] = useState({
    fullName: "",
    Thumbnail: "",
    description: "",
    viedo: null,
  });

  const handleChange = (event) => {
    setUploadVideoData((prev) => ({
      ...prev,
      [event.target.name]:
        event.target.name !== "video"
          ? event.target.value
          : event.target.files[0],
    }));
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("fullName", uploadVideoData.fullName);
    formData.append("Thumbnail", uploadVideoData.Thumbnail);
    formData.append("description", uploadVideoData.description);
    formData.append("viedo", uploadVideoData.viedo);
    formData.append("courseID", courseID);
    console.log(formData);
    console.log(uploadVideoData);

    axios({
      method: "post",
      url: `${process.env.REACT_APP_SERVER}/root/video/addvideo`,
      data: {
        fullName: uploadVideoData.fullName,
        Thumbnail: uploadVideoData.Thumbnail,
        description: uploadVideoData.description,
        courseID: courseID,
        video: uploadVideoData.video,
      },
      headers: {
        Authorization: `Bearer ${cookies.load("token")}`,
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {})
      .catch((err) => {});
  };

  return (
    <Modal isOpen={true} >
      <ModalOverlay />
      <ModalContent bg='#FEFCF3'>
        <ModalHeader color={'#083AA9'}>Add Video</ModalHeader>
        <ModalBody>
          <Flex w="100%" gap="24px" direction={"column"}>
            <Flex w="100%" gap="8px" direction={"column"}>
              <label>Full name</label>
              <Input
                name="fullName"
                value={uploadVideoData.fullName}
                onChange={handleChange}
              />
            </Flex>
            <Flex w="100%" gap="8px" direction={"column"}>
              <label>Description</label>
              <Input
                name="description"
                value={uploadVideoData.description}
                onChange={handleChange}
              />
            </Flex>
            <Flex w="100%" gap="8px" direction={"column"}>
              <label>Thumbnail</label>
              <Input
                name="Thumbnail"
                value={uploadVideoData.Thumbnail}
                onChange={handleChange}
              />
            </Flex>
            <Flex w="100%" gap="8px" direction={"column"}>
              <label>Upload Video</label>
              <Input
                name="video"
                type={"file"}
                value={uploadVideoData.viedo}
                onChange={handleChange}
              />
            </Flex>
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Button 
          color='white'
           bg={"#083AA9"}
           _hover={{
            bg: "blue.600"}}
          onClick={handleSubmit}>Save</Button>
          <Button
          _hover={{
            bg: "blue.600",
            color:'white'
          }}
            variant="ghost"
            onClick={() => {
              setDisplayModal(false);
            }}
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};