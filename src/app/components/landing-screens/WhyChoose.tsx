import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function WhyChoose() {
  const AmcenFetures = ({
    title,
    description,
    imagesrc,
    imageProps,
    wrapperprops,
  }: any) => {
    return (
      <>
        <Flex p="30px" gap="5" {...wrapperprops}>
          <Image src={imagesrc} alt="" height={20} width={20} {...imageProps} />
          <Box>
            <Text fontSize="md" fontWeight="semibold" color="secondary.600">
              {title}
            </Text>
            <Text
              fontSize="sm"
              mt="2"
              fontWeight="normal"
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
      <Box w="40%" pr="10">
        <Text fontSize="40px" fontWeight="medium" mt={5} color="secondary.600">
          Why to Choose <br /> Amcen Homes ?
        </Text>
        <Text fontSize="sm" mt={3.5} fontWeight="normal" color="secondary.600">
          OUR HOUSE CONSTRUCTION STEPS ARE SIMPLE AND EASY TO UNDERSTAND: PLAN -
          BUILD - TRACK - SETTLE IN.
        </Text>
      </Box>
      <Box w="60%">
        <Flex w="fit-content" mx="auto">
          <Box
            pr="15px"
            pt="50px"
            borderRight="2px solid !important"
            borderColor="secondary.400 !important"
          >
            <AmcenFetures
              imagesrc="/images/card.png"
              title="Tech Enabled Construction"
              description="3D Modeling, Digital representation of Building"
            />
            <AmcenFetures
              title="Absolute Transparency"
              imagesrc="/images/docs.png"
              wrapperprops={{
                borderTop: "2px solid",
                borderColor: "secondary.400",
              }}
              description="Clear and Detailed Quotation. Online tracking of projects"
            />
          </Box>
          <Box ml="15px">
            <AmcenFetures
              imagesrc="/images/tools.png"
              title="Assured Quality Control"
              description="470+ Quality (QASCON) Checks performed by team of experts"
            />
            <AmcenFetures
              title="On Time Delivery"
              imagesrc="/images/clock.png"
              wrapperprops={{
                borderTop: "2px solid",
                borderColor: "secondary.400",
              }}
              description="Otherwise we Pay you the Rent"
            />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
