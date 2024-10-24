import { Box, Flex, IconButton, Image, Text } from "@chakra-ui/react";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { reviewsData } from "../../../../public/content.json";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

export default function Reviews() {
  const swiperRef = useRef<any>(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <Flex
      bg="#1A1E23"
      justify="space-between"
      px={{ base: "5", md: "20" }}
      py={{ base: "40px", md: "60px" }}
      gap="10"
      flexDirection={{ base: "column", md: "row" }} // Stack on small screens
    >
      <Box w={{ base: "100%", md: "50%" }}>
        <Text
          fontSize={{ base: "32px", md: "40px" }}
          fontWeight="medium"
          color="contrast.200"
          textAlign={{ base: "center", md: "left" }}
        >
          What Our Client <br /> Says ?
        </Text>
        <Flex mt="8" gap="5" justify={{ base: "center", md: "left" }}>
          <IconButton
            bg="#ffffff"
            color="secondary.500"
            aria-label="Previous review"
            icon={<ArrowBackIcon h="5" w="5" />}
            rounded="full"
            border="1px solid"
            borderColor="secondary.500"
            onClick={handlePrev}
          />
          <IconButton
            bg="#ffffff"
            rounded="full"
            border="1px solid"
            borderColor="secondary.500"
            color="secondary.500"
            aria-label="Next review"
            icon={<ArrowForwardIcon h="5" w="5" />}
            onClick={handleNext}
          />
        </Flex>
      </Box>
      <Box w={{ base: "100%", md: "50%" }} pl={{ base: "0", md: "10" }}>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {reviewsData.map(({ name, profilePic, review, position }, i) => (
            <SwiperSlide key={i}>
              <Flex
                gap="5"
                flexDirection={{ base: "column", md: "row" }} // Stack on small screens
                h="fit-content"
              >
                <Image
                  h={{ base: "70px", md: "180px" }}
                  mx={{ base: "auto", md: "0" }}
                  w={{ base: "70px", md: "150px" }}
                  rounded={{ base: "full", md: "md" }}
                  src={`${
                    // profilePic ||
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJFtVVg8KXMPrHKrT0QmbYkf-9L8BSHlt88g&s"
                  }`}
                  alt="Profile Image"
                />
                <Flex
                  flexDirection="column"
                  justifyContent="space-between"
                  alignContent="space-between"
                  w="full"
                >
                  <Box>
                    <Text
                      textAlign={{ base: "center", md: "left" }}
                      fontSize={{ base: "sm", md: "md" }}
                      fontWeight="normal"
                      color="contrast.200"
                      noOfLines={4}
                    >
                      {review}
                    </Text>
                  </Box>
                  <Box mt="5">
                    <Text
                      textAlign={{ base: "center", md: "left" }}
                      fontSize={{ base: "sm", md: "md" }}
                      fontWeight="medium"
                      color="contrast.200"
                    >
                      {name}
                    </Text>
                    <Text
                      textAlign={{ base: "center", md: "left" }}
                      fontSize={{ base: "xs", md: "sm" }}
                      fontWeight="medium"
                      color="#898686"
                    >
                      {position}
                    </Text>
                  </Box>
                </Flex>
              </Flex>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Flex>
  );
}
