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
    <Flex bg="#1A1E23" justify="space-between" px="20" py="60px" gap="10">
      <Box w="50%">
        <Text fontSize="40px" fontWeight="medium" color="contrast.200">
          What Our Client <br /> Says ?
        </Text>
        <Flex mt="8" gap="5">
          <IconButton
            bg="#ffffff"
            color="secondary.500"
            aria-label="Search database"
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
            aria-label="Search database"
            icon={<ArrowForwardIcon h="5" w="5" />}
            onClick={handleNext}
          />
        </Flex>
      </Box>
      <Box w="50%" pl="10">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {reviewsData.map(({ name, profilePic, review, position }, i) => (
            <SwiperSlide key={i}>
              <Flex gap="5" h="fit-content">
                <Image
                  h="180px"
                  w="150px"
                  rounded="md"
                  src={`${"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5m509gsAe8RQHmuoRkes24WuNX09QQP2bLA&s"}`}
                  alt="Profile Image"
                />
                {/* <Image h="180px" src={`${profilePic}`} alt="Profile Image" /> */}
                <Flex
                  flexDirection="column"
                  justifyContent="space-between"
                  alignContent="space-between"
                >
                  <Box>
                    <Text
                      fontSize="md"
                      fontWeight="normal"
                      color="contrast.200"
                      noOfLines={4}
                    >
                      {review}
                    </Text>
                  </Box>
                  <Box mt="5">
                    <Text
                      fontSize="md"
                      fontWeight="medium"
                      color="contrast.200"
                    >
                      {name}
                    </Text>
                    <Text fontSize="sm" fontWeight="medium" color="#898686">
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
