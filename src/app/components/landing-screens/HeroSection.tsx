import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
export default function HeroSection() {
  return (
    <Box pt={10}>
      <Flex m="auto" align="center" px="10">
        <Box
          w="50%"
          borderRight="1px solid"
          borderColor="secondary.400"
          pr="10"
          pl="10"
        >
          <Text color="secondary.500" fontSize="65px" fontWeight="medium">
            Build Your Home With Trust
          </Text>
        </Box>
        <Box w="50%" pl="16">
          <Text>
            Give your home a new look with these interior <br />
            design ideas curated for you ?
          </Text>
          <Flex mt="8" gap="5">
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
              About Us
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
        mt="10"
        pb="3"
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
