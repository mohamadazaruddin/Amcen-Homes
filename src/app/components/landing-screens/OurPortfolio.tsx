import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import SlideInFromTop from "../Animations/SlideFromTop";
import SlideInFromBottom from "../Animations/SlideInFromBottom";

export default function OurPortfolio() {
  const bgStyles = {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  const viewIndex = 2; // The index for the enlarged view
  const portfolioImages = [
    { img: "/images/works/image1.png", label: "Office Interiors" },
    { img: "/images/works/image2.png", label: "Residential Interiors" },
    { img: "/images/works/image5.png", label: "Interior Design", col: 2 },
    { img: "/images/works/image4.png", label: "Open Space Design" },
    { img: "/images/works/image3.png", label: "Shop Design" },
  ];

  return (
    <Box py={{ base: "20px", md: "20px", lg: "100px" }} w="full">
      <Box textAlign="center">
        <SlideInFromTop>
          <Text fontSize="lg" fontWeight="normal" color="#494848">
            Best Works
          </Text>
          <Text
            fontSize={{ base: "32px", md: "32px", lg: "40px" }}
            fontWeight="medium"
            color="secondary.600"
          >
            Our Portfolio
          </Text>
        </SlideInFromTop>
      </Box>
      <SlideInFromBottom>
        <Flex
          display={{ base: "none", md: "none", lg: "flex" }} // Hide on mobile and tablet
          h="500px"
          mx="20"
          mt={"5"}
          gap="2"
        >
          {portfolioImages.map(({ img, label }, i) => (
            <Box
              key={i}
              w={i === viewIndex ? "50%" : "12%"} // 50% for the focused image, otherwise 12%
              sx={bgStyles}
              backgroundImage={`url('${img}')`}
              transition="0.2s linear"
              _hover={{ w: "70%" }}
              role="group"
              h="full"
              borderBottomLeftRadius={i === 0 ? "80px" : "0"}
              borderTopRightRadius={
                i === portfolioImages.length - 1 ? "80px" : "0"
              }
              position="relative"
            >
              <Box
                opacity={i === viewIndex ? 1 : 0}
                position="absolute"
                _groupHover={{
                  opacity: 1,
                }}
                transition="0.3s linear"
                bottom="40px"
                shadow="0px 0px 23px 17px #00000038"
                right="20px"
                bg="#fff"
                fontSize="lg"
                fontWeight="medium"
                color="#000"
                p="2"
                rounded="base"
              >
                {label}
              </Box>
            </Box>
          ))}
        </Flex>
      </SlideInFromBottom>

      <Grid
        display={{ base: "grid", md: "grid", lg: "none" }} // Display grid for mobile and tablet
        templateColumns="repeat(2, 1fr)"
        px={{ base: "5", md: "5", lg: "0" }} // Padding for mobile and tablet
        gap="3"
        mt="10"
      >
        {portfolioImages.map(({ img, label, col }, i) => (
          <GridItem
            key={i}
            w={"full"}
            sx={bgStyles}
            backgroundImage={`url('${img}')`}
            role="group"
            colSpan={col}
            h="180px"
            rounded="md"
            position="relative"
          >
            <Box
              position="absolute"
              transition="0.3s linear"
              bottom="10px"
              shadow="0px 0px 23px 17px #00000038"
              right="8px"
              bg="#fff"
              textTransform="capitalize"
              fontSize={{ base: "xs", md: "xs", lg: "lg" }} // Font size for mobile and tablet
              fontWeight={{ base: "semibold", md: "semibold", lg: "medium" }} // Font weight for mobile and tablet
              color="#000"
              p="1"
              rounded="base"
            >
              {label}
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}
