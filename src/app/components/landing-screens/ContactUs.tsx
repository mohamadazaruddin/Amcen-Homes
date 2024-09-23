import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function ContactUs() {
  return (
    <Box px="10" py="60px">
      <Box textAlign="center">
        <Text fontSize="lg" fontWeight="normal" color="#494848">
          Get in touch with us
        </Text>
        <Text fontSize="40px" fontWeight="medium" color="secondary.600">
          Contact Us
        </Text>
      </Box>
      <Flex>
        <Box>1</Box>
        <Box>2</Box>
      </Flex>
    </Box>
  );
}
