"use client";

import { Box, Text, Button, Flex, Wrap, WrapItem } from "@chakra-ui/react";

import React from "react";
import PopOut from "../Animations/PopOut";
import Reveal from "../Animations/Reveal";
import SlideInFromLeft from "../Animations/SlideInFromLeft";

export default function Services({ servicesList }: any) {
  const [viewService, setViewService] = React.useState(servicesList[0]);

  return (
    <Flex
      px={{ base: 5, md: 5, lg: 10 }}
      py={{ base: "60px", md: "60px", lg: "100px" }}
      bg={"#282a2c"}
      flexDirection={{
        base: "column-reverse",
        md: "column-reverse",
        lg: "row",
      }}
    >
      <Box
        w={{ base: "100%", md: "100%", lg: "40%" }}
        textAlign={{ base: "center", md: "center", lg: "left" }}
        mt={{ base: "5", md: "5", lg: "0" }}
      >
        <Box
          w="full"
          transition="0.1s ease-in-out"
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          backgroundSize="cover"
          backgroundImage={`url('${viewService.image}')`}
          h={{ base: "150px", md: "150px", lg: "350px" }}
        ></Box>
        <SlideInFromLeft>
          <Text mt="5" fontSize="24px" fontWeight="medium" color="contrast.200">
            {viewService.name}
          </Text>
          <Text
            mt="2.5"
            fontSize={{ base: "sm", md: "sm", lg: "md" }}
            fontWeight="normal"
            color="contrast.200"
          >
            {viewService.content}
          </Text>
        </SlideInFromLeft>
      </Box>

      <Box
        w={{ base: "100%", md: "100%", lg: "60%" }}
        pl={{ base: 0, md: 0, lg: "20" }}
        textAlign={{ base: "center", md: "center", lg: "right" }}
      >
        <Text
          fontSize={{ base: "lg", md: "lg", lg: "lg" }}
          fontWeight="normal"
          color="#EDAB5B"
        >
          Our Services
        </Text>
        <Reveal duration={0.2} delay={0.2}>
          <Text
            fontSize={{ base: "24px", md: "24px", lg: "40px" }}
            fontWeight="medium"
            mt={{ base: 2, md: 2, lg: 5 }}
            color="contrast.200"
          >
            Flawless Construction Powered By Deep Expertise
          </Text>
        </Reveal>
        <Wrap
          spacing={{ base: "5px", md: "5px", lg: "10px" }}
          justify={{ base: "center", md: "center", lg: "right" }}
          mt="5"
        >
          {servicesList?.map((item: any, i: any) => (
            <WrapItem key={i}>
              <PopOut>
                <Button
                  mt={{ base: "1", md: "1", lg: "0" }}
                  color={
                    viewService.id === item.id
                      ? "secondary.600"
                      : "contrast.200"
                  }
                  background={
                    viewService.id === item.id ? "contrast.200" : "transparent"
                  }
                  fontSize={{ base: "10px", md: "10px", lg: "md" }}
                  fontWeight="normal"
                  borderColor="secondary.600"
                  border="1px solid"
                  fontFamily="Roboto"
                  rounded="full"
                  px={{ base: "1.5", md: "1.5", lg: "2.5" }}
                  py={{ base: "1.5", md: "1.5", lg: "2" }}
                  h="auto"
                  _hover={{
                    background:
                      viewService.id === item.id
                        ? "contrast.200"
                        : "secondary.500",
                    color:
                      viewService.id === item.id
                        ? "secondary.500"
                        : "contrast.200",
                    transform: {
                      base: "none",
                      md: "none",
                      lg: "scale(1.08)",
                    },
                  }}
                  onClick={() => setViewService(item)}
                >
                  {item.name}
                </Button>
              </PopOut>
            </WrapItem>
          ))}
        </Wrap>
      </Box>
    </Flex>
  );
}
