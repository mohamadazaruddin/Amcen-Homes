import { Box, Button, Flex, Text, Image } from "@chakra-ui/react";
import React from "react";
import WhatappFilledIcon from "../Icons/WhatappFilledIcon";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function EstimateSection() {
  return (
    <Box px={{ base: "5", md: "10" }} py={{ base: "60px", md: "100px" }}>
      <Flex
        pb={{ base: "180px", md: "0" }}
        bg="#252531"
        rounded={{ base: "lg", md: "30px" }}
        maxW="1200px"
        mx="auto"
        position="relative"
      >
        <Box
          w={{ base: "full", md: "50%" }}
          p={{ base: "4", md: "10" }}
          py={{ base: "5", md: "16" }}
        >
          <Text
            fontSize={{ base: "36px", md: "48px" }}
            fontWeight="bold"
            lineHeight="120%"
            color="contrast.200"
          >
            Ready to build your{" "}
            <Box display={{ base: "none", md: "block" }}></Box>
            dream home ?
          </Text>
          <Text
            fontSize={{ base: "xs", md: "md" }}
            mt="5"
            fontWeight={{ base: "normal", md: "medium" }}
            color="contrast.200"
          >
            Unsure about your home construction costs? Use our easy calculator
            to estimate your project expenses from the comfort of your couch!
          </Text>
          <Flex gap="5" mt={{ base: "8", md: "14" }}>
            <Button
              color="secondary.600"
              bg="contrast.200"
              fontFamily="Roboto"
              h="auto"
              py={{ base: "2", md: "3" }}
              fontSize={{ base: "sm", md: "md" }}
              rounded="full"
              px={{ base: "2.5", md: "5" }}
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
          right={{ base: "10px", md: "40px" }}
          bottom={{ base: "-25px", md: "-80px" }}
          src={"/images/mansion.png"}
          alt="service image"
          h={{ base: "200px", md: "450px" }}
          w={{ base: "300px", md: "500px" }}
          objectFit="cover"
        />
      </Flex>
    </Box>
  );
}
