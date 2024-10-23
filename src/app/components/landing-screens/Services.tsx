"use client";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Text, Button, Flex, Wrap, WrapItem } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function Services({ servicesList }: any) {
  const [viewService, setViewService] = React.useState(servicesList[0]);

  return (
    <Flex px={10} py="100px" bg={"#282a2c"}>
      <Box w="40%">
        <Box
          w="full"
          transition="0.1s ease-in-out"
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          backgroundSize="cover"
          backgroundImage={`url('${viewService.image}')`}
          h="350px"
        ></Box>
        <Text mt="5" fontSize="24px" fontWeight="medium" color="contrast.200">
          {viewService.name}
        </Text>
        <Text mt="2.5" fontSize="16px" fontWeight="normal" color="contrast.200">
          {viewService.content}
        </Text>
        <Box mt="10" fontWeight="bold">
          <Link
            href={"as"}
            color="contrast.200 !important"
            style={{
              fontSize: "16px",
              fontWeight: "semibold",
              color: "contrast.200",
            }}
          >
            Read More <ArrowForwardIcon />
          </Link>
        </Box>
      </Box>

      <Box w="60%" pl="20" textAlign="right">
        <Text fontSize="lg" fontWeight="normal" color="#EDAB5B">
          Our Services
        </Text>
        <Text fontSize="40px" fontWeight="medium" mt={5} color="contrast.200">
          Flawless Construction Powered By Deep Expertise
        </Text>
        <Wrap spacing="10px" justify="right" mt="5">
          {servicesList?.map((item: any, i: any) => (
            <WrapItem key={i}>
              <Button
                color={
                  viewService.id === item.id ? "secondary.600" : "contrast.200"
                }
                background={
                  viewService.id === item.id ? "contrast.200" : "transparent"
                }
                fontSize="md"
                fontWeight="normal"
                borderColor="secondary.600"
                border="1px solid"
                fontFamily="Roboto"
                rounded="full"
                px="2.5"
                py="2"
                h="auto"
                _hover={{
                  background: "secondary.500",
                  color: "contrast.200",
                  transform: "scale(1.08)",
                }}
                onClick={() => setViewService(item)}
              >
                {item.name}
              </Button>
            </WrapItem>
          ))}
        </Wrap>
      </Box>
    </Flex>
  );
}
