import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";
import SlideInFromTop from "../Animations/SlideFromTop";

export default function NewLook() {
  const { push } = useRouter();
  return (
    <Flex direction={{ base: "column", md: "column", lg: "row" }} bg="#282a2c">
      <Box
        w={{ base: "100%", md: "100%", lg: "25%" }} // Full width on mobile and md
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundImage="url('/images/old_home.png')"
        h={{ base: "200px", md: "200px", lg: "auto" }} // Fixed height for mobile and md
      />

      <Box
        w={{ base: "100%", md: "100%", lg: "50%" }} // Full width on mobile and md
        py={{ base: "60px", md: "60px", lg: "100px" }} // Same padding for mobile and md
        px="5"
        textAlign="center"
      >
        <SlideInFromTop>
          <Text
            fontSize={{ base: "sm", md: "sm", lg: "lg" }} // Consistent font size for base and md
            fontWeight="normal"
            color="contrast.200"
          >
            INSPIRATION FOR HOME INTERIOR DESIGNS
          </Text>
          <Box
            fontSize={{ base: "28px", md: "28px", lg: "40px" }} // Same font size for base and md
            fontWeight="bold"
            mt={{ base: "2", md: "2", lg: "0" }} // Same margin for base and md
            color="contrast.200"
          >
            Give Your Home{" "}
            <Box display={{ base: "block", md: "none", lg: "none" }}></Box>A New
            Look
          </Box>
          <Text
            fontSize={{ base: "sm", md: "sm", lg: "md" }} // Adjust font size for small screens
            mt={2}
            fontWeight="normal"
            color="contrast.200"
            fontFamily="Roboto"
          >
            Starting with Rs. 1,750 per sq ft.
          </Text>
          <Button
            background="contrast.200"
            color="secondary.600"
            rounded="full"
            fontSize="sm"
            px="5"
            fontFamily="Roboto"
            mt="5"
            _hover={{
              background: "contrast.200",
              color: "secondary.500",
            }}
            py="2.5"
            rightIcon={<ArrowForwardIcon />}
            onClick={() => push("/our-services")}
          >
            Let&apos;s build
          </Button>
        </SlideInFromTop>
      </Box>
      <Box
        w={{ base: "100%", md: "100%", lg: "25%" }} // Full width on mobile and md
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundImage="url('/images/new_home.png')"
        h={{ base: "200px", md: "200px", lg: "auto" }} // Fixed height for mobile and md
      />
    </Flex>
  );
}
