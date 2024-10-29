import { Box, Button, Flex, Text, Image } from "@chakra-ui/react";
import React from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";
import SlideInFromBottom from "../Animations/SlideInFromBottom";
import SlideInFromLeft from "../Animations/SlideInFromLeft";
import PopOut from "../Animations/PopOut";

export default function EstimateSection() {
  const { push } = useRouter();
  return (
    <Box
      px={{ base: "5", md: "5", lg: "10" }}
      py={{ base: "60px", md: "60px", lg: "100px" }}
    >
      <Flex
        pb={{ base: "180px", md: "250px", lg: "0" }}
        bg="#252531"
        rounded={{ base: "lg", md: "lg", lg: "30px" }}
        maxW="1200px"
        mx="auto"
        position="relative"
      >
        <Box
          w={{ base: "full", md: "full", lg: "50%" }}
          p={{ base: "4", md: "4", lg: "10" }}
          py={{ base: "5", md: "5", lg: "16" }}
        >
          <SlideInFromBottom>
            <Box
              fontSize={{ base: "36px", md: "36px", lg: "48px" }}
              fontWeight="bold"
              lineHeight="120%"
              color="contrast.200"
            >
              Ready to build your{" "}
              <Box display={{ base: "none", md: "none", lg: "block" }}></Box>
              dream home ?
            </Box>
            <Text
              fontSize={{ base: "xs", md: "xs", lg: "md" }}
              mt="5"
              fontWeight={{ base: "normal", md: "normal", lg: "medium" }}
              color="contrast.200"
            >
              Unsure about your home construction costs? Use our easy calculator
              to estimate your project expenses from the comfort of your couch!
            </Text>
          </SlideInFromBottom>
          <Flex gap="5" mt={{ base: "8", md: "8", lg: "14" }}>
            <SlideInFromLeft>
              <Button
                color="secondary.600"
                bg="contrast.200"
                fontFamily="Roboto"
                h="auto"
                py={{ base: "2", md: "2", lg: "3" }}
                fontSize={{ base: "sm", md: "sm", lg: "md" }}
                rounded="full"
                px={{ base: "2.5", md: "2.5", lg: "5" }}
                _hover={{
                  color: "secondary.500",
                  bg: "contrast.200",
                }}
                rightIcon={<ArrowForwardIcon />}
                onClick={() => push("/estimate")}
              >
                Get Construction Estimate
              </Button>
            </SlideInFromLeft>
          </Flex>
        </Box>
        <PopOut>
          <Image
            position="absolute"
            right={{ base: "10px", md: "150px", lg: "40px" }}
            bottom={{ base: "-25px", md: "-25px", lg: "-80px" }}
            src={"/images/mansion.png"}
            alt="service image"
            h={{ base: "200px", md: "250px", lg: "450px" }}
            w={{ base: "300px", md: "380px", lg: "500px" }}
            objectFit="cover"
          />
        </PopOut>
      </Flex>
    </Box>
  );
}
