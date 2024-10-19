import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function Estimate() {
  return (
    <Box bg="#fff" pb="20">
      <Box
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundImage="url('https://img.freepik.com/premium-photo/real-estate-broker-agent-presenting-consult-customer-decision-making-sign-insurance-form-agreement-buy-sell-home-model-concerning-mortgage-loan-offer-house-insurance_265022-23653.jpg?w=900')"
      >
        <Box
          bg="#000000b8"
          w="full"
          h="full"
          pt="20"
          pb="100px"
          textAlign="center"
        >
          <Text fontSize="48px" color="#fff" fontWeight="bold">
            Our{" "}
            <Box as="span" color="#EDAB5B">
              Services
            </Box>
          </Text>
          <Text color="#fff" fontSize="md" fontWeight="normal">
            Give your home a new look with these interior <br /> design ideas
            curated for you
          </Text>
        </Box>
      </Box>
      <Box px="10" mt="-50px">
        <Flex gap="5">
          <Box p="5" shadow="lg" w="70%" bg="#ffffff" rounded="full">
            fddf
          </Box>
          <Box bg="#ffffff" shadow="lg" rounded="lg" w="30%">
            Selected Itmes
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
