import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function NewLook() {
  return (
    <Flex direction={{ base: "column", md: "row" }} bg="#282a2c">
      <Box
        w={{ base: "100%", md: "25%" }}
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundImage="url('/images/old_home.png')"
        h={{ base: "200px", md: "auto" }}
      />
      <Box
        w={{ base: "100%", md: "50%" }}
        py={{ base: "60px", md: "100px" }}
        px="5"
        textAlign="center"
      >
        <Text
          fontSize={{ base: "sm", md: "lg" }}
          fontWeight="normal"
          color="contrast.200"
        >
          INSPIRATION FOR HOME INTERIOR DESIGNS
        </Text>
        <Text
          fontSize={{ base: "28px", md: "40px" }}
          fontWeight="bold"
          mt={{ base: "2", md: "0" }}
          color="contrast.200"
        >
          Give Your Home <Box display={{ base: "block", md: "none" }}></Box>A
          New Look
        </Text>
        <Text
          fontSize={{ base: "sm", md: "md" }} // Adjust font size for small screens
          mt={2}
          fontWeight="normal"
          color="contrast.200"
          fontFamily="Roboto"
        >
          Starting with Rs. 1,750 per sq ft.
        </Text>
        <Button
          background="contrast.200"
          color="secondary.600"
          rounded="full"
          fontSize="sm"
          px="5"
          fontFamily="Roboto"
          mt="5"
          _hover={{
            background: "contrast.200",
            color: "secondary.500",
          }}
          py="2.5"
          rightIcon={<ArrowForwardIcon />}
        >
          Let's build
        </Button>
      </Box>
      <Box
        w={{ base: "100%", md: "25%" }} // Full width on small screens
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundImage="url('/images/new_home.png')"
        h={{ base: "200px", md: "auto" }} // Fixed height on small screens
      />
    </Flex>
  );
}
