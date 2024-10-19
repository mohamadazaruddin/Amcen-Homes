"use client";
import ServiceCard from "@/app/components/ServiceCard";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Text, Grid, Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";

export default function OurServices() {
  const { push } = useRouter();
  return (
    <Box bg="#fff" pb="20">
      <Box
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundImage="url('/images/servicebg.png')"
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
      <Box px="20">
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap="5"
          maxW={"1200px"}
          mx="auto"
          mt="-50px"
        >
          <ServiceCard
            image="/images/home_construction.png"
            title="Home Construction"
            content="Residential construction includes determining the layout, size, budget and style of the home."
            action={
              <Button
                background="secondary.600"
                color="contrast.200"
                rounded="full"
                px="5"
                rightIcon={<ArrowForwardIcon w="5" />}
                onClick={() => push("/estimate")}
                _hover={{
                  background: "secondary.600",
                  color: "contrast.200",
                }}
              >
                Let Build
              </Button>
            }
          />
          <ServiceCard
            image="/images/gallery/residential_interiors.png"
            title="Residental Interiors"
            content="Interior Design involves analyzing the available space and determining how it can be best utilized to meet the functional requirements of the occupants."
            action={
              <Button
                rightIcon={<ArrowForwardIcon w="5" />}
                background="secondary.600"
                onClick={() => push("/our-services/residential_interiors")}
                color="contrast.200"
                rounded="full"
                px="5"
                _hover={{
                  background: "secondary.500",
                  color: "contrast.200",
                }}
              >
                Let Build
              </Button>
            }
          />
          <ServiceCard
            image="/images/gallery/commercial_interiors.png"
            title="Commercial Interiors"
            content="Residential construction includes determining the layout, size, budget and style of the home."
            action={
              <Button
                rightIcon={<ArrowForwardIcon w="5" />}
                background="secondary.600"
                onClick={() => push("/our-services/commercial_interiors")}
                color="contrast.200"
                rounded="full"
                px="5"
                _hover={{
                  background: "secondary.500",
                  color: "contrast.200",
                }}
              >
                Let Build
              </Button>
            }
          />
        </Grid>
      </Box>
    </Box>
  );
}
