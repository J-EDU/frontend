import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  Box,
  useBreakpointValue,
  Center,
  Flex,
  Text,
  VStack,
  Image,
  HStack,
} from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 7000,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const initialStateData = {
  text: "",
  URL: "",
};
export default function CaptionCarousel() {
  const [slider, setSlider] = React.useState(Slider | null);
  const [activeTabIndex, stActiveTabIndex] = useState(0);
  const [cardsData, setCardsData] = useState([]);
  // const [data, setData] = useState(initialStateData)
  const handleChange = (e) => {
    setSlider((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const setActiveTab = (index) => {
    stActiveTabIndex(index);
  };
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  useEffect(() => {
    const url = `${process.env.REACT_APP_SERVER}/root/announcement`; //http://localhost:5000/root/announcement

    const user = {
      text: slider.text,
      URL: slider.URL,
    };
    axios.get(url, user).then((res) => {
      setCardsData(res.data.files);
    });
  }, []);

  console.log(cardsData);

  return (
    <Box py='75px' mx="10%" overflow={"hidden"} w="100%">
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      {cardsData.length > 0 && (
        <Flex
          w="100%"
          mx="40px"
          alignSelf={"center"}
          justifyContent="space-between"
        >
          <VStack w="100%" align="center">
            <Flex
              w="80%"
              direction="row"
              justifyContent="space-between"
              px="12%"
            >
              <Image
                w="350px"
                h="350px"
                src={`${cardsData[activeTabIndex].URL}`}
                alt=""
              />
              <Center alignItems={"center"} lineHeight="300px">
                <Text fontSize={{ base: "md", lg: "lg" }} color="black">
                  <b>{cardsData[activeTabIndex].text}</b>
                </Text>
              </Center>
            </Flex>
            <HStack px="20px" py='20px'  mt='-7px' >
              <Text
                w="50px"
                onClick={() =>
                  stActiveTabIndex((prev) =>
                    prev === 0 ? cardsData.length - 1 : prev - 1
                  )
                }
                color='gray.500'
                cursor={"pointer"}
                textAlign="center"
                fontSize="32px"
              >
                {"<"}
              </Text>
              {cardsData.length > 0 &&
                cardsData.map((val, idx) => (
                  <Box
                  mt={"10px"}
                    border="1px"
                    h="26px"
                    w="26px"
                    borderColor="gray.500"
                    bg={activeTabIndex === idx ? "gray.500" : "white"}
                    borderRadius={"50%"}
                    onClick={() => {
                      setActiveTab(idx);
                    }}
                  />
                ))}
              <Text
                w="50px"
                onClick={() =>
                  stActiveTabIndex((prev) =>
                    prev === cardsData.length - 1 ? 0 : prev + 1
                  )
                }
                color='gray.500'
                cursor={"pointer"}
                textAlign={"center"}
                fontSize="32px"
              >
                {">"}
              </Text>
            </HStack>
          </VStack>
          {/* Right Icon */}

          {/* Slider */}
        </Flex>
      )}
    </Box>
  );
}
