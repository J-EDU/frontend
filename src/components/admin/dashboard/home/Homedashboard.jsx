import Pichart from './Pichart.tsx';
import Tablechart from './Tablechart.tsx';
import React from 'react';

import "./Homedashboard.css";
import { Box, Card, CardBody, Flex, HStack, Stack, Text } from '@chakra-ui/react';
import Linechart from './Linechart';

const Homedashboard = () => {
    return (
      <>
        
        <Stack direction={{ base: "row", sm: "column", md: "row" }} p={2}>
          <Box width={"50%"} margin={"auto"}>
            <Pichart />
          </Box>
          <Box width={"50%"} margin={"auto"}>
            <Tablechart />
          </Box>
        </Stack>

        <Box>
          {/* <Linechart /> */}
        </Box>
      </>
    );
}

export default Homedashboard