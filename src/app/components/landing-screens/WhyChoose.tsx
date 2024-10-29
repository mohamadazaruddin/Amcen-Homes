import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";
import SlideInFromLeft from "../Animations/SlideInFromLeft";
import Reveal from "../Animations/Reveal";

export default function WhyChoose() {
  const AmcenFetures = ({
    title,
    description,
    imagesrc,
    imageProps,
    wrapperprops,
    panelProps,
  }: any) => {
    return (
      <Flex
        gap="4"
        w={{ base: "100%", md: "100%", lg: "300px" }} // Adjust width for small screens
        rounded="md"
        p="4"
        align="center"
        {...wrapperprops}
      >
        <Flex
          align="center"
          justify="center"
          p="2"
          border="10px solid"
          borderColor="#ffffff"
          rounded="full"
          w="85px"
          h="85px"
          ml={{ base: "0", md: "0", lg: "-60px" }} // Adjust margin for small screens
          {...panelProps}
        >
          <Image
            src={imagesrc}
            alt=""
            height="50px"
            width="50px"
            {...imageProps}
          />
        </Flex>
        <Box flex="1">
          <Text
            fontSize={{ base: "md", md: "md", lg: "md" }} // Adjust font size for small screens
            mt="1"
            fontWeight="medium"
            color="secondary.600"
            fontFamily="Roboto"
          >
            {title}
          </Text>
          <Text
            fontSize={{ base: "xs", md: "xs", lg: "sm" }} // Keep font size consistent
            mt="2"
            fontWeight="normal"
            fontFamily="Roboto"
            color="secondary.600"
          >
            {description}
          </Text>
        </Box>
      </Flex>
    );
  };

  return (
    <Flex
      py={{ base: 10, md: 10, lg: 20 }} // Adjust padding for small screens
      px={{ base: 5, md: 5, lg: 10 }} // Adjust padding for small screens
      flexDirection={{ base: "column", md: "column", lg: "row" }} // Stack elements on small screens
    >
      <Flex
        align="center"
        justifyContent={{ base: "center", md: "center", lg: "left" }}
        w={{ base: "100%", md: "100%", lg: "40%" }} // Full width on mobile and md
        pr={{ base: "0", md: "0", lg: "10" }}
      >
        <Box>
          <SlideInFromLeft>
            <Box
              fontSize={{ base: "34px", md: "34px", lg: "40px" }} // Consistent font size for base and md
              fontWeight="medium"
              textAlign={{ base: "center", md: "center", lg: "left" }} // Center text for mobile and md
              color="secondary.600"
            >
              Why to Choose{" "}
              <Box display={{ base: "none", md: "none", lg: "block" }}></Box>{" "}
              Amcen Homes ?
            </Box>
            <Box
              textAlign={{ base: "center", md: "center", lg: "left" }} // Center text for mobile and md
              fontSize={{ base: "xs", md: "xs", lg: "sm" }} // Keep font size consistent
              mt={3.5}
              fontWeight="normal"
              color="secondary.600"
            >
              OUR HOUSE CONSTRUCTION STEPS ARE SIMPLE AND EASY TO UNDERSTAND:{" "}
              <Box display={{ base: "block", md: "block", lg: "none" }}></Box>{" "}
              PLAN - BUILD - TRACK - SETTLE IN.
            </Box>
          </SlideInFromLeft>
        </Box>
      </Flex>
      <Box
        w={{ base: "100%", md: "100%", lg: "60%" }} // Full width on mobile and md
        mt={{ base: "10", md: "10", lg: "0" }}
        pl={{ base: "0", md: "0", lg: "40px" }}
      >
        <Grid
          w="fit-content"
          columnGap={{ base: "20px", md: "20px", lg: "80px" }} // Adjust gap for small screens
          rowGap={{ base: "5", md: "5", lg: "10" }}
          mx={{ base: "auto", md: "auto", lg: "0" }}
          templateColumns={{
            base: "1fr", // Single column on small screens
            md: "1fr", // Single column on medium screens
            lg: "repeat(2, 1fr)", // Two columns on larger screens
          }}
        >
          <Reveal duration={0.2} delay={0.2}>
            <AmcenFetures
              imagesrc="/images/card.png"
              title="Tech-Driven Build"
              description="3D Modeling, Digital representation of Building"
              wrapperprops={{
                bg: "#ffeda882",
              }}
              panelProps={{
                bg: "#ffcb7d",
              }}
            />
          </Reveal>
          <Reveal duration={0.2} delay={0.3}>
            <AmcenFetures
              title="Absolute Transparency"
              imagesrc="/images/docs.png"
              wrapperprops={{
                bg: "#a8e8ff8c",
              }}
              panelProps={{
                bg: "#0dbeffb3",
              }}
              description="Clear and Detailed Quotation. Online tracking of projects"
            />
          </Reveal>
          <Reveal duration={0.2} delay={0.4}>
            <AmcenFetures
              imagesrc="/images/tools.png"
              title="Assured Quality Control"
              wrapperprops={{
                bg: "#a3ffc9bf",
              }}
              panelProps={{
                bg: "#1ad76869",
              }}
              description="470+ Quality (QASCON) Checks performed by team of experts"
            />
          </Reveal>
          <Reveal duration={0.2} delay={0.5}>
            <AmcenFetures
              title="On Time Delivery"
              imagesrc="/images/clock.png"
              wrapperprops={{
                bg: "#8e6bbd5c",
              }}
              panelProps={{
                bg: "#ad6fff",
              }}
              description={
                <>
                  Otherwise we Pay you <br /> the Rent
                </>
              }
            />
          </Reveal>
        </Grid>
      </Box>
    </Flex>
  );
}
