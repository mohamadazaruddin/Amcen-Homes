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
      <>
        <Flex gap="4" w="300px" rounded={"md"} p="4" {...wrapperprops}>
          <Flex
            align="center"
            justify="center"
            p="2"
            border="10px solid"
            borderColor="#ffffff"
            rounded="full"
            w="85px"
            h="85px"
            ml="-60px"
            {...panelProps}
          >
            <Image
              src={imagesrc}
              alt=""
              height={"50px"}
              width={"50px"}
              {...imageProps}
            />
          </Flex>
          <Box flex="1">
            <Text
              fontSize="md"
              mt="1"
              fontWeight="medium"
              color="secondary.600"
              fontFamily="Roboto"
            >
              {title}
            </Text>
            <Text
              fontSize="sm"
              mt="2"
              fontWeight="normal"
              fontFamily="Roboto"
              color="secondary.600"
            >
              {description}
            </Text>
          </Box>
        </Flex>
      </>
    );
  };

  return (
    <Flex py={20} px={10} justifyContent="space-between">
      <Flex align="center" w="40%" pr="10">
        <Box>
          {" "}
          <Text fontSize="40px" fontWeight="medium" color="secondary.600">
            Why to Choose <br /> Amcen Homes ?
          </Text>
          <Text
            fontSize="sm"
            mt={3.5}
            fontWeight="normal"
            color="secondary.600"
          >
            OUR HOUSE CONSTRUCTION STEPS ARE SIMPLE AND EASY TO UNDERSTAND: PLAN
            - BUILD - TRACK - SETTLE IN.
          </Text>
        </Box>
      </Flex>
      <Box w="60%" pl="40px">
        <Grid
          w="fit-content"
          columnGap="80px"
          rowGap="10"
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
        >
          <AmcenFetures
            imagesrc="/images/card.png"
            title="Tech Enabled Construction"
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
