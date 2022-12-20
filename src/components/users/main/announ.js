import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
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
  const [cardsData, setCardsData] = useState([]);
  // const [data, setData] = useState(initialStateData)
  const handleChange = (e) => {
    setSlider((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
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
    <Box
      position={"relative"}
      height={"400px"}
      width={"35%"}
      marginLeft={"500px"}
      overflow={"hidden"}

    >
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
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="relative"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cardsData.length > 0 &&
          cardsData.map((card, index) => (
            <Box
              key={index}
              height={"100%"}
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundImage={`url(${card.URL})`}
            >
              {/* This is the block you need to change, to customize the caption */}
              <Container size="container.lg" height="600px" position="relative">
                <Stack
                  spacing={6}
                  w={"full"}
                  maxW={"lg"}
                  position="absolute"
                  top="25%"
                  textAlign={"center"}
                  // transform="translate(0, -50%)"
                >
                  
                  <Text fontSize={{ base: "md", lg: "lg" }} color="black">
                    {card.text}
                  </Text>
                </Stack>
              </Container>
            </Box>
          ))}
      </Slider>
    </Box>
  );
}
