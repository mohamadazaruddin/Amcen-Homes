import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function NewLook() {
  return (
    <Flex bg="#282a2c">
      <Box
        w="25%"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundImage="url('/images/old_home.png')"
        h="auto"
      ></Box>
      <Box w="50%" py="100px" textAlign="center">
        <Text fontSize="lg" fontWeight="normal" color="contrast.200">
          INSPIRATION FOR HOME INTERIOR DESIGNS
        </Text>
        <Text fontSize="40px" fontWeight="medium" color="contrast.200">
          Give Your Home A New Look{" "}
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
            background: "contrast.200 ",
            color: "secondary.500",
          }}
          py="2.5"
          rightIcon={<ArrowForwardIcon />}
        >
          Lets build
        </Button>
      </Box>
      <Box
        w="25%"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundImage="url('/images/new_home.png')"
        h="auto"
      ></Box>
    </Flex>
  );
}
