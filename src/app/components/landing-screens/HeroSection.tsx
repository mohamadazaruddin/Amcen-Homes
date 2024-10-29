import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import PopOut from "../Animations/PopOut";
import SlideInFromBottom from "../Animations/SlideInFromBottom";

export default function HeroSection() {
  const { push } = useRouter();

  return (
    <Box pt={{ base: "12", md: "12", lg: 10 }}>
      <Flex
        m="auto"
        align="center"
        px={{ base: "5", md: "5", lg: 10 }}
        flexDirection={{ base: "column", md: "column", lg: "row" }}
      >
        <Box
          w={{ base: "full", md: "full", lg: "50%" }}
          borderRight={{ base: "none", md: "none", lg: "1px solid" }}
          borderColor="secondary.400"
          pr={{ base: "0", md: "0", lg: "10" }}
          pl={{ base: "0", md: "0", lg: "10" }}
        >
          <PopOut>
            <Box
              color="secondary.500"
              fontSize={{ base: "38px", md: "38px", lg: "65px" }}
              lineHeight="auto"
              fontWeight="semibold"
            >
              Build Your Dream{" "}
              <Box display={{ base: "none", md: "none", lg: "block" }}></Box>
              With Trust
            </Box>
          </PopOut>
        </Box>
        <Box
          mt={{ base: "2", md: "2", lg: "0" }}
          w={{ base: "full", md: "full", lg: "50%" }}
          pl={{ base: "0", md: "0", lg: "16" }}
        >
          <SlideInFromBottom>
            <Box fontSize={{ base: "sm", md: "sm", lg: "md" }}>
              Give your home a new look with these interior{" "}
              <Box display={{ base: "none", md: "none", lg: "block" }}></Box>
              design ideas curated for you.
            </Box>
            <Flex
              mt={{ base: "10", md: "10", lg: "8" }}
              gap={{ base: "2", md: "2", lg: "5" }}
            >
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
                onClick={() => push("/our-services")}
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
                py="2.5"
                _hover={{
                  background: "secondary.500",
                  color: "contrast.200",
                }}
                onClick={() => push("/book-appointment")}
              >
                Book Free Consultancy
              </Button>
            </Flex>
          </SlideInFromBottom>
        </Box>
      </Flex>
      <Flex
        px="10"
        mt={{ base: "16", md: "16", lg: "10" }}
        pb={{ base: "5", md: "5", lg: "3" }}
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
