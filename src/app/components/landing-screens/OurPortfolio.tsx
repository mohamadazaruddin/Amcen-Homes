import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import SimpleSlider from "../ReactSlick";
import SwiperSlider from "../Swiper";

export default function OurPortfolio() {
  const bgStyles = {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  const viewIndex = 2;
  const portfolioImages = [
    { img: "/images/works/image5.png", label: "Home Renovation" },
    { img: "/images/works/image5.png", label: "Home Renovation" },
    { img: "/images/works/image5.png", label: "Home Renovation" },
    { img: "/images/works/image5.png", label: "Home Renovation" },
    { img: "/images/works/image5.png", label: "Home Renovation" },
  ];
  return (
    <Box py="100px" w="full">
      <Box textAlign="center">
        <Text fontSize="lg" fontWeight="normal" color="#494848">
          Best Works
        </Text>
        <Text fontSize="40px" fontWeight="medium" color="secondary.600">
          Our Portfolio
        </Text>
      </Box>
      <Flex h="500px" mx="20" mt={"5"} gap="2">
        {portfolioImages.map(({ img, label }, i) => (
          <Box
            key={i}
            w={i == viewIndex ? "50%" : "12%"}
            sx={bgStyles}
            backgroundImage={`url('${img}')`}
            transition="0.2s linear"
            _hover={{ w: "70%" }}
            role="group"
            h="full"
            borderBottomLeftRadius={i == 0 ? "80px" : "0"}
            borderTopRightRadius={
              i == portfolioImages.length - 1 ? "80px" : "0"
            }
            position="relative"
          >
            <Box
              opacity={i == viewIndex ? 1 : 0}
              position="absolute"
              _groupHover={{
                opacity: 1,
              }}
              transition="0.3s linear"
              bottom="40px"
              right="20px"
              bg="#fff"
              p="2"
              rounded="base"
            >
              {label}
            </Box>
          </Box>
        ))}
      </Flex>
    </Box>
  );
}
