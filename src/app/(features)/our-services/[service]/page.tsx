"use client";
import ServiceCard from "@/app/components/ServiceCard";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { features } from "../../../../../public/content.json";
import React, { useEffect, useState } from "react";
import pageTitle from "@/app/utils/pageTitle";
import SlideInFromTop from "@/app/components/Animations/SlideFromTop";
import Reveal from "@/app/components/Animations/Reveal";
import SlideInFromBottom from "@/app/components/Animations/SlideInFromBottom";

export default function Service({ params }: { params: { service: string } }) {
  const { push } = useRouter();
  const [selectedService, setSelectedService] = useState<any>();
  useEffect(() => {
    const data = features.filter((item) => item.type === params.service);
    setSelectedService(data[0]);
  }, []);
  return (
    <Box bg="#fff" pb={{ base: "10", md: "20" }}>
      <Box
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundImage={`url('${selectedService?.image}')`}
      >
        <Box
          bg="#000000b8"
          w="full"
          h="full"
          pt={{ base: "10", md: "20" }}
          pb={{ base: "50px", md: "100px" }}
          textAlign="center"
        >
          <SlideInFromTop>
            {selectedService && (
              <>
                {pageTitle(
                  selectedService?.name,
                  "Give your home a new look with these interior design ideas curated for you"
                )}
              </>
            )}
          </SlideInFromTop>
        </Box>
      </Box>
      <Box px={{ base: "5", md: "20" }}>
        <Reveal delay={0.5}>
          <Grid
            templateColumns={{
              base: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap="5"
            maxW={"1200px"}
            mx="auto"
            mt={{ base: "-25px", md: "-50px" }}
          >
            {selectedService?.subItems &&
              selectedService.subItems.map((item: any, i: any) => (
                <ServiceCard
                  key={i}
                  image={item.image}
                  title={item.name}
                  content={item.content}
                  action={
                    <Button
                      rightIcon={<ArrowForwardIcon w="5" />}
                      background="secondary.600"
                      onClick={() => {
                        sessionStorage.setItem("service", JSON.stringify(item));
                        push("/book-appointment");
                      }}
                      color="contrast.200"
                      rounded="full"
                      h="auto"
                      py="2"
                      fontSize={{ base: "sm", md: "md" }}
                      fontWeight="normal"
                      fontFamily="Roboto"
                      px="5"
                      _hover={{
                        background: "secondary.500",
                        color: "contrast.200",
                      }}
                    >
                      Lets Build
                    </Button>
                  }
                />
              ))}
          </Grid>
        </Reveal>
      </Box>
    </Box>
  );
}
