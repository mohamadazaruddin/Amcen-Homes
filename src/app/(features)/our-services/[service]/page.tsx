"use client";
import ServiceCard from "@/app/components/ServiceCard";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { features } from "../../../../../public/content.json";
import React, { useEffect, useState } from "react";
import pageTitle from "@/app/utils/pageTitle";

export default function Service({ params }: { params: { service: string } }) {
  const { push } = useRouter();
  console.log(params.service, features);

  const [selectedService, setSelectedService] = useState<any>();
  useEffect(() => {
    const data = features.filter((item) => item.type === params.service);
    setSelectedService(data[0]);
  }, []);
  return (
    <Box bg="#fff" pb="20">
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
          pt="20"
          pb="100px"
          textAlign="center"
        >
          {selectedService && (
            <>
              {pageTitle(
                selectedService?.name,
                "Give your home a new look with these interior design ideas curated for you"
              )}
            </>
          )}
        </Box>
      </Box>
      <Box px="20">
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap="10"
          maxW={"1200px"}
          mx="auto"
          mt="-50px"
        >
          {selectedService?.subItems &&
            selectedService.subItems.map((item: any, i: any) => (
              <ServiceCard
                image={item.image}
                title={item.name}
                content={item.content}
                action={
                  <Button
                    rightIcon={<ArrowForwardIcon w="5" />}
                    background="secondary.600"
                    onClick={() => {
                      localStorage.setItem("service", JSON.stringify(item));
                      push("/book-appointment");
                    }}
                    color="contrast.200"
                    rounded="full"
                    fontSize="md"
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
      </Box>
    </Box>
  );
}
