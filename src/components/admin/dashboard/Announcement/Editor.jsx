import React, { useState } from "react";
// import ReactQuill from "react-quill";
import { LinkIcon } from "@chakra-ui/icons";
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
} from "@chakra-ui/react";

const Editor = () => {
  let [title, setTitle] = useState("");
  let [url, setUrl] = useState("");
    let [description, setDescription] = useState("");
    let [image, setImage] = useState("");
    let submit = () => {
        console.log(image)
    }

  return (
    <Card>
      <CardBody>
        <Stack spacing={3}>
          <Flex
            bgColor={"wite"}
            fontFamily="garamond,serif"
            style={{ justifyContent: "center" }}
          >
                      <FormLabel
                      textTransform={"uppercase"}
                      >Add Announcement</FormLabel>
          </Flex>
          <FormControl isRequired>
            <FormLabel>Title</FormLabel>
            <Input
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormControl>
          <FormLabel>URL</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<LinkIcon color="gray.500" />}
            />
            <Input
              type="url"
              placeholder="Enter URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </InputGroup>
          <FormControl isRequired>
            <FormLabel>Description</FormLabel>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter Description"
              size="sm"
            />
          </FormControl>
          <input type={"file"} onChange={(e) => setImage(e.target.value)} />
          <Button colorScheme="blue" onClick={()=>submit()} >Save</Button>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default Editor;
