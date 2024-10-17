"use client";
import ConsultForm from "@/app/components/ConsultForm";
import WhatappFilledIcon from "@/app/components/Icons/WhatappFilledIcon";
import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export default function BookAppointment() {
  const {
    isOpen: consultFormisOpen,
    onOpen: consultFormonOpen,
    onClose: consultFormonClose,
  } = useDisclosure();
  const [service, setService] = useState<any>();
  useEffect(() => {
    const storedService = localStorage.getItem("service");
    if (storedService) {
      setService(JSON.parse(storedService));
    }
  }, []);

  return (
    <Box py="20" px="20">
      <Flex bg="#E8EBF1" rounded="30px" maxW="1200px" mx="auto">
        <Box w="50%" p="10" pt="16">
          <Text
            fontSize="48px"
            fontWeight="bold"
            lineHeight="110%"
            color="secondary.500"
          >
            Book an Appointment <br />
            to get Started
          </Text>
          <Text fontSize="md" mt="5" fontWeight="medium" color="secondary.500">
            Still in doubt about the home construction plan and price? Estimate
            your project cost with our easy-to-use cost calculator. Get a clear
            idea of construction costs from the comfort of your couch.
          </Text>
          <Flex gap="5" mt="14">
            <Button
              background="secondary.600"
              color="contrast.200"
              rounded="full"
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
        </Box>
        <Flex flexDirection="column" alignItems="end" w="50%">
          <Box pt="8" pb="5" pr="5">
            <Text textAlign="right" fontSize="32px" fontWeight="bold">
              {service?.name}
            </Text>
          </Box>
          <Image
            borderTopLeftRadius="30px"
            borderBottomRightRadius="30px"
            src={service?.image}
            alt="service image"
            h="350px"
            w="450px"
            objectFit="cover"
          />
        </Flex>
      </Flex>
      <ConsultForm isOpen={consultFormisOpen} onClose={consultFormonClose} />
    </Box>
  );
}
