import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";

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
        w={{ base: "100%", md: "300px" }} // Adjust width for small screens
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
          ml={{ base: "0", md: "-60px" }} // Adjust margin for small screens
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
            fontSize={{ base: "md", md: "md" }} // Adjust font size for small screens
            mt="1"
            fontWeight="medium"
            color="secondary.600"
            fontFamily="Roboto"
          >
            {title}
          </Text>
          <Text
            fontSize={{ base: "xs", md: "sm" }} // Keep font size consistent
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
      py={{ base: 10, md: 20 }} // Adjust padding for small screens
      px={{ base: 5, md: 10 }} // Adjust padding for small screens
      flexDirection={{ base: "column", md: "row" }} // Stack elements on small screens
    >
      <Flex
        align="center"
        w={{ base: "100%", md: "40%" }}
        pr={{ base: "0", md: "10" }}
      >
        <Box>
          <Text
            fontSize={{ base: "34px", md: "40px" }}
            fontWeight="medium"
            textAlign={{ base: "center", md: "left" }}
            color="secondary.600"
          >
            Why to Choose <Box display={{ base: "none", md: "block" }}></Box>{" "}
            Amcen Homes ?
          </Text>
          <Text
            textAlign={{ base: "center", md: "left" }}
            fontSize={{ base: "xs", md: "sm" }}
            mt={3.5}
            fontWeight="normal"
            color="secondary.600"
          >
            OUR HOUSE CONSTRUCTION STEPS ARE SIMPLE AND EASY TO UNDERSTAND:{" "}
            <Box display={{ base: "block", md: "none" }}></Box> PLAN - BUILD -
            TRACK - SETTLE IN.
          </Text>
        </Box>
      </Flex>
      <Box
        w={{ base: "100%", md: "60%" }}
        mt={{ base: "10", md: "0" }}
        pl={{ base: "0", md: "40px" }}
      >
        <Grid
          w="fit-content"
          columnGap={{ base: "20px", md: "80px" }} // Adjust gap for small screens
          rowGap={{ base: "5", md: "10" }}
          templateColumns={{
            base: "1fr", // Single column on small screens
            md: "repeat(2, 1fr)", // Two columns on medium and larger screens
          }}
        >
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
        </Grid>
      </Box>
    </Flex>
  );
}
