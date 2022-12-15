import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Heading, HStack, Stack, StackDivider, Text } from '@chakra-ui/react';
import React, { useState } from 'react'

const AnnouncementList = () => {
    const [fakeData, setFakeData] = useState([
      {
        id: 1,
        userID: 2,
        text: "this is Text",
        URL: "https://github.com/J-EDU/J-EDU-Server/blob/main/src/models/announcement.model.js",
        cloudinary_id: `https://media.licdn.com/dms/image/D4E35AQGcDBZVWgtTfg/profile-framedphoto-shrink_200_200/0/1670516792495?e=1671487200&v=beta&t=wKAhidSPz_uuksWlQ_Eb3CF4V0tH3mJ5C0gpf6oBlvU`,
      },
      {
        id: 1,
        userID: 2,
        text: "this is Text",
        URL: "https://github.com/J-EDU/J-EDU-Server/blob/main/src/models/announcement.model.js",
        cloudinary_id: `https://media.licdn.com/dms/image/D4E35AQGcDBZVWgtTfg/profile-framedphoto-shrink_200_200/0/1670516792495?e=1671487200&v=beta&t=wKAhidSPz_uuksWlQ_Eb3CF4V0tH3mJ5C0gpf6oBlvU`,
      },
      {
        id: 1,
        userID: 2,
        text: "this is Text",
        URL: "https://github.com/J-EDU/J-EDU-Server/blob/main/src/models/announcement.model.js",
        cloudinary_id: `https://media.licdn.com/dms/image/D4E35AQGcDBZVWgtTfg/profile-framedphoto-shrink_200_200/0/1670516792495?e=1671487200&v=beta&t=wKAhidSPz_uuksWlQ_Eb3CF4V0tH3mJ5C0gpf6oBlvU`,
      },
      {
        id: 1,
        userID: 2,
        text: "this is Text",
        URL: "https://github.com/J-EDU/J-EDU-Server/blob/main/src/models/announcement.model.js",
        cloudinary_id: `https://media.licdn.com/dms/image/D4E35AQGcDBZVWgtTfg/profile-framedphoto-shrink_200_200/0/1670516792495?e=1671487200&v=beta&t=wKAhidSPz_uuksWlQ_Eb3CF4V0tH3mJ5C0gpf6oBlvU`,
      },
      {
        id: 1,
        userID: 2,
        text: "this is Text",
        URL: "https://github.com/J-EDU/J-EDU-Server/blob/main/src/models/announcement.model.js",
        cloudinary_id: `https://media.licdn.com/dms/image/D4E35AQGcDBZVWgtTfg/profile-framedphoto-shrink_200_200/0/1670516792495?e=1671487200&v=beta&t=wKAhidSPz_uuksWlQ_Eb3CF4V0tH3mJ5C0gpf6oBlvU`,
      },
      {
        id: 1,
        userID: 2,
        text: "this is Text",
        URL: "https://github.com/J-EDU/J-EDU-Server/blob/main/src/models/announcement.model.js",
        cloudinary_id: `https://media.licdn.com/dms/image/D4E35AQGcDBZVWgtTfg/profile-framedphoto-shrink_200_200/0/1670516792495?e=1671487200&v=beta&t=wKAhidSPz_uuksWlQ_Eb3CF4V0tH3mJ5C0gpf6oBlvU`,
      },
      {
        id: 2,
        userID: 2,
        text: "this is Text",
        URL: "https://github.com/J-EDU/J-EDU-Server/blob/main/src/models/announcement.model.js",
        cloudinary_id: `https://media.licdn.com/dms/image/D4E35AQGcDBZVWgtTfg/profile-framedphoto-shrink_200_200/0/1670516792495?e=1671487200&v=beta&t=wKAhidSPz_uuksWlQ_Eb3CF4V0tH3mJ5C0gpf6oBlvU`,
      },
      {
        id: 3,
        userID: 3,
        text: "this is Text",
        URL: "https://github.com/J-EDU/J-EDU-Server/blob/main/src/models/announcement.model.js",
        cloudinary_id: `https://media.licdn.com/dms/image/D4E35AQGcDBZVWgtTfg/profile-framedphoto-shrink_200_200/0/1670516792495?e=1671487200&v=beta&t=wKAhidSPz_uuksWlQ_Eb3CF4V0tH3mJ5C0gpf6oBlvU`,
      },
    ]);

    return (
      <>
        {fakeData.length !== 0 &&
          fakeData.map((item) => (
            <Card
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
              bgColor={"#344D67"}
              width={"100%"}
            >
              <CardBody>
                <HStack justifyContent={"space-between"}>
                  <Text py="1" marginBottom={1} color={"white"} noOfLines={1}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae minima laborum alias exercitationem 
                  </Text>
                  <HStack>
                    <Button
                      leftIcon={<EditIcon />}
                      colorScheme="green"
                      variant="solid"
                    >
                      Edit
                    </Button>
                    <Button
                      leftIcon={<DeleteIcon />}
                      colorScheme="red"
                      variant="solid"
                    >
                      Delete
                    </Button>
                  </HStack>
                </HStack>
              </CardBody>
            </Card>
          ))}
      </>
    );
}

export default AnnouncementList