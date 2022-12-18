import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Box, Button, Card, CardBody ,HStack, Stack, StackDivider, Text, useToast } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AnnouncementList = () => {
  const [announcement, setAnnouncement] = useState([]);
  
     const toast = useToast();


  const deleteannoun = async (item) => {
    
    axios.delete(
      `${process.env.REACT_APP_LOCAL}/announcement/deleteannouncement/${item.id}`,
      {
        headers: { Authorization: `Bearer ${process.env.REACT_APP_TOKEN}` },
      }
    ).then(reslt => {
      toast({
        title: "delete.",
        description: "Done ",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }).catch(err => {
      toast({
        title: "Error ",
        description: "Something went Wrong",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    })
    fetchData()
  }

   const fetchData = async () => {
     let { data } = await axios.get(
       `${process.env.REACT_APP_LOCAL}/announcement/`,
       {
         headers: { Authorization: `Bearer ${process.env.REACT_APP_TOKEN}` },
       }
     );
     var Localdata = data.files;
     setAnnouncement(Localdata);
   };

   useEffect(() => {
     fetchData();
   });
  

    return (
      <>
        {announcement.length !== 0 &&
          announcement.map((item) => (
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
{item.text}
                  </Text>
                  <HStack>
                    {/* <Button
                      leftIcon={<EditIcon />}
                      colorScheme="green"
                      variant="solid"
                    >
                      Edit
                    </Button> */}
                    <Button
                      leftIcon={<DeleteIcon />}
                      colorScheme="red"
                      variant="solid"
                      onClick={()=> deleteannoun(item)}
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