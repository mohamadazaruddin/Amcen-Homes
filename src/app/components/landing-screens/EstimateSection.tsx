import { Box, Button, Flex, Text, Image } from "@chakra-ui/react";
import React from "react";
import WhatappFilledIcon from "../Icons/WhatappFilledIcon";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function EstimateSection() {
  return (
    <Box px="10" py="100px">
      <Flex
        bg="#252531"
        rounded="30px"
        maxW="1200px"
        mx="auto"
        position="relative"
      >
        <Box w="50%" p="10" py="16">
          <Text
            fontSize="48px"
            fontWeight="bold"
            lineHeight="110%"
            color="contrast.200"
          >
            Ready to build your <br />
            dream home?
          </Text>
          <Text fontSize="md" mt="5" fontWeight="medium" color="contrast.200">
            Still in doubt about the home construction plan and price? Estimate
            your project cost with our easy-to-use cost calculator. Get a clear
            idea of construction costs from the comfort of your couch.
          </Text>
          <Flex gap="5" mt="14">
            <Button
              color="secondary.600"
              bg="contrast.200"
              rounded="full"
              px="5"
              _hover={{
                color: "secondary.500",
                bg: "contrast.200",
              }}
              rightIcon={<ArrowForwardIcon />}
            >
              Get Construction Estimate
            </Button>
          </Flex>
        </Box>

        <Image
          position="absolute"
          right={"40px"}
          bottom={"-80px"}
          src={"/images/mansion.png"}
          alt="service image"
          h="450px"
          w="500px"
          objectFit="cover"
        />
      </Flex>
    </Box>
  );
}
