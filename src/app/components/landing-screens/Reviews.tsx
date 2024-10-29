import { Box, Flex, IconButton, Image, Text } from "@chakra-ui/react";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { reviewsData } from "../../../../public/content.json";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import SlideInFromRight from "../Animations/SlideInFromRight";
import Reveal from "../Animations/Reveal";
import SlideInFromLeft from "../Animations/SlideInFromLeft";
import SlideInFromBottom from "../Animations/SlideInFromBottom";
import SlideInFromTop from "../Animations/SlideFromTop";

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
      px={{ base: "5", md: "10", lg: "20" }} // Adjusted for tablet
      py={{ base: "40px", md: "40px", lg: "60px" }} // Adjusted for tablet
      gap="10"
      flexDirection={{ base: "column", md: "column", lg: "row" }} // Stack on small and tablet screens
    >
      <Box w={{ base: "100%", md: "100%", lg: "50%" }}>
        <SlideInFromRight>
          <Text
            fontSize={{ base: "32px", md: "32px", lg: "40px" }} // Font size same for mobile and tablet
            fontWeight="medium"
            color="contrast.200"
            textAlign={{ base: "center", md: "center", lg: "left" }} // Text alignment same for mobile and tablet
          >
            What Our Client <br /> Says ?
          </Text>
          <Flex
            mt="8"
            gap="5"
            justify={{ base: "center", md: "center", lg: "left" }}
          >
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
          </Flex>{" "}
        </SlideInFromRight>
      </Box>

      <Box
        w={{ base: "100%", md: "100%", lg: "50%" }}
        pl={{ base: "0", md: "0", lg: "10" }}
      >
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {reviewsData.map(({ name, profilePic, review, position }, i) => (
            <SwiperSlide key={i}>
              <Flex
                gap="5"
                flexDirection={{ base: "column", md: "column", lg: "row" }} // Stack on small and tablet screens
                h="fit-content"
              >
                <Image
                  h={{ base: "70px", md: "70px", lg: "180px" }}
                  mx={{ base: "auto", md: "auto", lg: "0" }}
                  w={{ base: "70px", md: "70px", lg: "150px" }}
                  rounded={{ base: "full", md: "full", lg: "md" }}
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
                  <SlideInFromTop>
                    <Box pr="5">
                      <Text
                        textAlign={{ base: "center", md: "center", lg: "left" }}
                        fontSize={{ base: "sm", md: "sm", lg: "md" }}
                        fontWeight="normal"
                        color="contrast.200"
                        noOfLines={4}
                      >
                        {review}
                      </Text>
                    </Box>
                  </SlideInFromTop>
                  <SlideInFromBottom>
                    <Box mt="5">
                      <Text
                        textAlign={{ base: "center", md: "center", lg: "left" }}
                        fontSize={{ base: "sm", md: "sm", lg: "md" }}
                        fontWeight="medium"
                        color="contrast.200"
                      >
                        {name}
                      </Text>
                      <Text
                        textAlign={{ base: "center", md: "center", lg: "left" }}
                        fontSize={{ base: "xs", md: "xs", lg: "sm" }}
                        fontWeight="medium"
                        color="#898686"
                      >
                        {position}
                      </Text>
                    </Box>
                  </SlideInFromBottom>
                </Flex>
              </Flex>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Flex>
  );
}
