"use client";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import React from "react";

export default function AboutUs() {
  return (
    <Box py="100px">
      <Flex pl="16">
        <Box w="50%" pr="16" pb="5">
          <Text fontSize="lg" fontWeight="normal" color="#494848">
            About us
          </Text>
          <Text
            fontSize="40px"
            fontWeight="medium"
            mt={5}
            color="secondary.600"
          >
            Flawless Construction Powered By Deep Expertise
          </Text>
          <Text fontSize="sm" mt={4} fontWeight="normal" color="secondary.600">
            Welcome to our website, where we bring dreams to life by
            constructing the perfect homes for our clients. At [Your Company
            Name], we understand that a home is more than just a structure—it's
            a reflection of your dreams, aspirations, and lifestyle.{" "}
          </Text>
          <Text
            fontSize="sm"
            mt={3.5}
            fontWeight="normal"
            color="secondary.600"
          >
            Our mission is to create personalized, stunning homes that exceed
            your expectations and bring your vision to reality. With a focus on
            attention to detail, quality craftsmanship, and innovative design,
            we work closely with each client to understand their unique
            preferences and requirements. Whether you're looking for a modern,
            minimalist sanctuary or a cozy, traditional haven, we have the
            expertise and resources to bring your dream house to life.
          </Text>
          <Button
            background="secondary.600"
            color="contrast.200"
            rounded="full"
            fontSize="sm"
            px="5"
            mt="10"
            _hover={{
              background: "secondary.500",
              color: "contrast.200",
            }}
            py="2.5"
            rightIcon={<ArrowForwardIcon />}
          >
            Enquire now
          </Button>
        </Box>
        <Box
          w="50%"
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          borderTopLeftRadius="300px"
          borderBottomLeftRadius="300px"
          backgroundSize="cover"
          backgroundImage="url('/images/works/image5.png')"
          h="auto"
        ></Box>
      </Flex>
    </Box>
  );
}
