import React, { useState } from "react";
import { LinkIcon } from "@chakra-ui/icons";
import axios from "axios";
import {
  Card,
  CardBody,
  FormControl,
  FormLabel,
  Input,
  Flex,
  InputGroup,
  InputLeftElement,
  Stack,
  Textarea,
  Button,
  useToast,
} from "@chakra-ui/react";

const Editor = () => {
  let [title, setTitle] = useState("title");
  let [url, setUrl] = useState("");
  let [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const toast = useToast();

  const saveData = async (data) => {

    const config = {
      headers: { Authorization: `Bearer ${process.env.REACT_APP_TOKEN}` },
    };

    const bodyParameters = {
      data,
    };

    axios
      .post(
        `${process.env.REACT_APP_LOCAL}/announcement/addannouncement`,
        bodyParameters,
        config
      )
      .then(res => {

          toast({
            title: "announement posted ",
            description: "succefully ",
            status: "success",
            duration: 4000,
            isClosable: true,
          });
        setDescription("");
          setIsloading(false);
      })
      .catch(err => {
        
          toast({
            title: "error ",
            description: "error ",
            status: "error",
            duration: 4000,
            isClosable: true,
          });
          setIsloading(false);
      });

  
  };

  let submit = () => {
    setIsloading(true);

    if (!title || !description) {
      toast({
        title: "Error ",
        description: "please Fill all Data",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      setIsloading(false);
      return;
    }

    if (image === undefined) {
      toast({
        title: "Error ",
        description: "please uplad an image type",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      setIsloading(false);
      return;
    }
    if (
      image.type === "image/jpeg" ||
      image.type === "image/png" ||
      image.type === "image/jpg"
    ) {
      const forma = new FormData();
      forma.append("file", image);
      forma.append("upload_preset", "Photos");
      forma.append("cloud_name", "dybwswkzr");
      fetch("https://api.cloudinary.com/v1_1/dybwswkzr/image/upload", {
        method: "post",
        body: forma,
      })
        .then((res) => res.json())
        .then((data) => {
          setUrl(data.url.toString());
          //  console.log(data.url.toString());
          const bodyData = {
            title,
            text: description,
            URL: data.url.toString(),
          };
          saveData(bodyData);
        })
        .catch((err) => {
          toast({
            title: "Error with uplading picture ",
            description: "Server Error",
            status: "error",
            duration: 4000,
            isClosable: true,
          });
          setIsloading(false);
        });
    } else {
      toast({
        title: "Error ",
        description: "please uplad te image type",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      setIsloading(false);
      return;
    }
  };

  return (
    <Card>
      <CardBody>
        <Stack spacing={3}>
          <Flex
            bgColor={"wite"}
            fontFamily="garamond,serif"
            style={{ justifyContent: "center" }}
          >
            <FormLabel textTransform={"uppercase"}>Add Announcement</FormLabel>
          </Flex>

          <FormControl isRequired>
            <FormLabel>Description</FormLabel>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter Description"
              size="sm"
            />
          </FormControl>
          <input type={"file"} onChange={(e) => setImage(e.target.files[0])} />
          {/* <FormLabel>URL</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<LinkIcon color="gray.500" />}
            />
            <Input
              type="url"
              placeholder="Enter URL"
              variant="filled"
              disabled
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </InputGroup> */}
          <Button
            colorScheme="blue"
            onClick={() => submit()}
            isLoading={isLoading}
          >
            Save
          </Button>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default Editor;
