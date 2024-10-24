import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
export default function HeroSection() {
  return (
    <Box pt={{ base: "12", md: 10 }}>
      <Flex
        m="auto"
        align="center"
        px={{ base: "5", md: "10" }}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Box
          w={{ base: "full", md: "50%" }}
          borderRight={{ base: "none", md: "1px solid" }}
          borderColor="secondary.400"
          pr={{ base: "0", md: "10" }}
          pl={{ base: "0", md: "10" }}
        >
          <Text
            color="secondary.500"
            fontSize={{ base: "38px", md: "65px" }}
            lineHeight="auto"
            fontWeight="semibold"
          >
            Build Your Dream <Box display={{ base: "none", md: "block" }}></Box>
            With Trust
          </Text>
        </Box>
        <Box
          mt={{ base: "2", md: "0" }}
          w={{ base: "full", md: "50%" }}
          pl={{ base: "0", md: "16" }}
        >
          <Text fontSize={{ base: "sm", md: "md" }}>
            Give your home a new look with these interior{" "}
            <Box display={{ base: "none", md: "block" }}></Box>
            design ideas curated for you ?
          </Text>
          <Flex mt={{ base: "10", md: "8" }} gap={{ base: "2", md: "5" }}>
            <Button
              color="secondary.600"
              background="contrast.200"
              fontSize="sm"
              borderColor="secondary.600"
              border="1px solid"
              rounded="full"
              fontFamily="Roboto"
              px="5"
              py="2.5"
              _hover={{
                background: "secondary.500",
                color: "contrast.200",
              }}
            >
              Explore
            </Button>
            <Button
              background="secondary.600"
              color="contrast.200"
              rounded="full"
              fontFamily="Roboto"
              fontSize="sm"
              px="5"
              _hover={{
                background: "secondary.500",
                color: "contrast.200",
              }}
              py="2.5"
            >
              Book Free Consultancy
            </Button>
          </Flex>
        </Box>
      </Flex>
      <Flex
        px="10"
        mt={{ base: "16", md: "10" }}
        pb={{ base: "5", md: "3" }}
        justify="center"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(207,214,226,1) 100%)",
        }}
      >
        <Image
          src="/images/banner.png"
          alt="banner Image"
          width={700}
          style={{
            mixBlendMode: "darken",
          }}
          height={500}
        />
      </Flex>
    </Box>
  );
}
