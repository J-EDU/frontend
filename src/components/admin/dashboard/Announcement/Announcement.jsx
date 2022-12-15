import { AddIcon, EditIcon, EmailIcon, MinusIcon } from '@chakra-ui/icons'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Collapse, Divider, Text } from '@chakra-ui/react'
import React from 'react'
import AnnouncementList from './AnnouncementList'
import Editor from './Editor'

const Announcement = () => {

  const [show, setShow] = React.useState(true);

  const handleToggle = () => setShow(!show);

  return (
    <>
      <Accordion allowMultiple>
        <AccordionItem bgColor={"#F7F7F7"} borderRadius="lg">
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <Button leftIcon={<EditIcon />} variant="brand">
                      Add Announcement
                    </Button>
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Editor />
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>

      <Divider />
      <AnnouncementList />
    </>
  );
}

export default Announcement