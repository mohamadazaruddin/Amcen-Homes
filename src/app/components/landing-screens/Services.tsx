"use client";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Text, Button, Flex, Wrap, WrapItem } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function Services({ servicesList }: any) {
  const [viewService, setViewService] = React.useState(servicesList[0]);

  return (
    <Flex
      px={{ base: 5, md: 10 }}
      py={{ base: "60px", md: "100px" }}
      bg={"#282a2c"}
      flexDirection={{
        base: "column-reverse",
        md: "row",
      }}
    >
      <Box
        w={{ base: "100%", md: "40%" }}
        textAlign={{ base: "center", md: "left" }}
        mt={{ base: "5", md: "0" }}
      >
        <Box
          w="full"
          transition="0.1s ease-in-out"
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          backgroundSize="cover"
          backgroundImage={`url('${viewService.image}')`}
          h={{ base: "150px", md: "350px" }}
        ></Box>
        <Text mt="5" fontSize="24px" fontWeight="medium" color="contrast.200">
          {viewService.name}
        </Text>
        <Text
          mt="2.5"
          fontSize={{ base: "sm", md: "md" }}
          fontWeight="normal"
          color="contrast.200"
        >
          {viewService.content}
        </Text>
        {/* <Box mt="10" fontWeight="bold">
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
        </Box> */}
      </Box>

      <Box
        w={{ base: "100%", md: "60%" }}
        pl={{ base: 0, md: "20" }}
        textAlign={{ base: "center", md: "right" }}
      >
        <Text
          fontSize={{ base: "lg", md: "lg" }}
          fontWeight="normal"
          color="#EDAB5B"
        >
          Our Services
        </Text>
        <Text
          fontSize={{ base: "24px", md: "40px" }}
          fontWeight="medium"
          mt={{ base: 2, md: 5 }}
          color="contrast.200"
        >
          Flawless Construction Powered By Deep Expertise
        </Text>
        <Wrap
          spacing={{ base: "5px", md: "10px" }}
          justify={{ base: "center", md: "right" }}
          mt="5"
        >
          {servicesList?.map((item: any, i: any) => (
            <WrapItem key={i}>
              <Button
                mt={{ base: "1", md: "0" }}
                color={
                  viewService.id === item.id ? "secondary.600" : "contrast.200"
                }
                background={
                  viewService.id === item.id ? "contrast.200" : "transparent"
                }
                fontSize={{ base: "10px", md: "md" }}
                fontWeight="normal"
                borderColor="secondary.600"
                border="1px solid"
                fontFamily="Roboto"
                rounded="full"
                px={{ base: "1.5", md: "2.5" }}
                py={{ base: "1.5", md: "2" }}
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
                    md: "scale(1.08)",
                  },
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
