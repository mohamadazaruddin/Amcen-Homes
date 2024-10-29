"use client";
import Reveal from "@/app/components/Animations/Reveal";
import SlideInFromTop from "@/app/components/Animations/SlideFromTop";
import SlideInFromBottom from "@/app/components/Animations/SlideInFromBottom";
import SlideInFromLeft from "@/app/components/Animations/SlideInFromLeft";
import SlideInFromRight from "@/app/components/Animations/SlideInFromRight";
import ConsultForm from "@/app/components/ConsultForm";
import WhatappFilledIcon from "@/app/components/Icons/WhatappFilledIcon";
import WhatsappOutlineIcon from "@/app/components/Icons/WhatsappOutlineIcon";
import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { Bellota_Text } from "next/font/google";
import React, { useEffect, useState } from "react";

export default function BookAppointment() {
  const {
    isOpen: consultFormisOpen,
    onOpen: consultFormonOpen,
    onClose: consultFormonClose,
  } = useDisclosure();
  const [service, setService] = useState<any>();
  useEffect(() => {
    const storedService = sessionStorage.getItem("service");
    if (storedService) {
      setService(JSON.parse(storedService));
    }
  }, []);

  return (
    <Box py={{ base: "5", md: "20" }} px={{ base: "5", md: "20" }}>
      {/* desktop view */}
      <Flex
        display={{ base: "none", md: "flex" }}
        bg="#E8EBF1"
        rounded={{ base: "8px", md: "30px" }}
        maxW="1200px"
        mx="auto"
      >
        <Box w="50%" p="10" pt="16">
          <SlideInFromLeft>
            <Text
              fontSize={{ base: "24px", md: "48px" }}
              fontWeight="bold"
              lineHeight="110%"
              color="secondary.500"
            >
              Book an Appointment <br />
              to get Started
            </Text>
            <Text
              fontSize="md"
              mt="5"
              fontWeight="medium"
              color="secondary.500"
            >
              Still in doubt about the home construction plan and price?
              Estimate your project cost with our easy-to-use cost calculator.
              Get a clear idea of construction costs from the comfort of your
              couch.
            </Text>
            {service?.estimatedCost && (
              <Box
                fontSize="md"
                fontFamily="Roboto"
                mt="5"
                fontWeight="normal"
                color="secondary.500"
              >
                Total Estimated Cost:{" "}
                <Box as="span" fontSize="lg" fontWeight="medium">
                  {service.estimatedCost}
                </Box>
              </Box>
            )}
          </SlideInFromLeft>
          <SlideInFromBottom>
            <Flex gap="5" mt="14">
              <Button
                background="secondary.600"
                color="contrast.200"
                rounded="full"
                fontFamily="Roboto"
                px="5"
                _hover={{
                  background: "secondary.500",
                  color: "contrast.200",
                }}
                onClick={consultFormonOpen}
              >
                Consult Now
              </Button>
              <Button
                background="#0A5F54"
                color="contrast.200"
                rounded="full"
                px="5"
                _hover={{
                  background: "#0A5F54",
                  color: "contrast.200",
                }}
                fontFamily="Roboto"
                rightIcon={<WhatappFilledIcon h="28px" mt="2" w="28px" />}
                onClick={() => {
                  const phoneNumber = "9702914246";
                  const serviceName = service?.name;
                  const message = `Hello, I am interested in booking an appointment for the ${serviceName} service. Could you please provide more details?`;
                  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                    message
                  )}`;
                  window.open(whatsappLink, "_blank");
                }}
              >
                Chat on Whatsapp
              </Button>
            </Flex>
          </SlideInFromBottom>
        </Box>

        <Flex flexDirection="column" alignItems="end" w="50%">
          <Box pt="8" pb="5" pr="5">
            <SlideInFromTop>
              <Text textAlign="right" fontSize="32px" fontWeight="bold">
                {service?.name || ""}
              </Text>
            </SlideInFromTop>
          </Box>

          <Image
            borderTopLeftRadius="30px"
            borderBottomRightRadius="30px"
            src={service?.image || "/images/mansion.png"}
            alt="service image"
            h="350px"
            w="450px"
            objectFit="cover"
          />
        </Flex>
      </Flex>
      {/* end */}

      <Box
        display={{ base: "block", md: "none" }}
        pos="relative"
        rounded="lg"
        bg="#E8EBF1"
      >
        {service?.name.length > 0 && (
          <Box
            bg="#fff"
            py="1"
            zIndex={99}
            px="2"
            right={"10px"}
            top={"10px"}
            borderRadius="base"
            fontSize="md"
            fontFamily="Roboto"
            fontWeight="bold"
            textTransform="capitalize"
            boxShadow="0px 0px 20px 8px #0000004f"
            pos="absolute"
          >
            {service?.name}
          </Box>
        )}

        <Image
          pos="relative"
          borderTopRadius="lg"
          src={service?.image || "/images/mansion.png"}
          alt="service image"
          h="200px"
          w={service?.image ? "full" : "250px"}
          mx="auto"
          mt={service?.image ? "" : "5"}
          objectFit="cover"
        />

        <SlideInFromBottom>
          <Box p="4">
            <Text
              fontSize={{ base: "24px", md: "48px" }}
              fontWeight="bold"
              textAlign="center"
              lineHeight="120%"
              color="secondary.500"
            >
              Book an Appointment to get Started
            </Text>
            <Text
              fontSize="xs"
              mt="4"
              textAlign="center"
              fontWeight="medium"
              color="secondary.500"
            >
              Still in doubt about the home construction plan and price?
              Estimate your project cost with our easy-to-use cost calculator.
              Get a clear idea of construction costs from the comfort of your
              couch.
            </Text>
            <Flex gap="2" mt="10">
              <Button
                background="secondary.600"
                color="contrast.200"
                rounded="full"
                fontSize="sm"
                fontWeight="normal"
                fontFamily="Roboto"
                px="5"
                w="50%"
                _hover={{
                  background: "secondary.500",
                  color: "contrast.200",
                }}
                onClick={consultFormonOpen}
              >
                Consult Now
              </Button>
              <Button
                background="#38A169"
                color="contrast.200"
                rounded="full"
                fontSize="sm"
                fontWeight="normal"
                px="5"
                w="50%"
                _hover={{
                  background: "#38A169",
                  color: "contrast.200",
                }}
                fontFamily="Roboto"
                rightIcon={<WhatsappOutlineIcon h="24px" w="24px" />}
                onClick={() => {
                  const phoneNumber = "9702914246";
                  const serviceName = service?.name;
                  const message = `Hello, I am interested in booking an appointment for the ${serviceName} service. Could you please provide more details?`;
                  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                    message
                  )}`;
                  window.open(whatsappLink, "_blank");
                }}
              >
                WhatsApp
              </Button>
            </Flex>
          </Box>
        </SlideInFromBottom>
      </Box>
      <ConsultForm
        isOpen={consultFormisOpen}
        onClose={consultFormonClose}
        serviceName={service?.name?.length > 0 ? service.name : "appointment"}
        estimate={
          service?.estimatedCost?.length > 0 ? service?.estimatedCost : ""
        }
        construction_items={
          service?.constructionItems?.length > 0
            ? service?.constructionItems
            : []
        }
      />
    </Box>
  );
}
