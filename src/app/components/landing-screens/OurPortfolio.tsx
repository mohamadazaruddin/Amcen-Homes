import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import SimpleSlider from "../ReactSlick";
import SwiperSlider from "../Swiper";

export default function OurPortfolio() {
  return (
    <Box py="60px" w="full">
      <Box textAlign="center">
        <Text fontSize="lg" fontWeight="normal" color="#494848">
          Best Works
        </Text>
        <Text fontSize="40px" fontWeight="medium" color="secondary.600">
          Our Portfolio
        </Text>
      </Box>
      <Flex my="10">
        {/* <SimpleSlider /> */}
        <SwiperSlider />
      </Flex>
    </Box>
  );
}
