import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Text,
  VStack,
  Collapse,
  Avatar,
} from "@chakra-ui/react";
import WhatsappOutlineIcon from "./Icons/WhatsappOutlineIcon";

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePanel = () => {
    setIsOpen(!isOpen);
  };
  const phoneNumber = "9234076909";
  const message = "Hello, I have a question about my project.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  return (
    <Box
      position="fixed"
      bottom={{ base: "25px", md: "60px" }}
      zIndex={9999}
      right={{ base: "25px", md: "40px" }}
    >
      <Box position="relative">
        <IconButton
          aria-label="WhatsApp Chat"
          icon={<WhatsappOutlineIcon h="35px" w="35px" />}
          h="50px"
          w="50px"
          colorScheme="green"
          onClick={togglePanel}
          borderRadius="full"
        />

        <Box
          bg="white"
          borderRadius="md"
          boxShadow="lg"
          transition="0.5s linear"
          display={isOpen ? "block" : "none"}
          mt={2}
          bottom="45px"
          right="45px"
          width="250px"
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          backgroundSize="cover"
          backgroundImage="url('/images/whatsappbg.png')"
          position="absolute"
        >
          <Flex
            bg="#0A5F54"
            px="4"
            py="2"
            align="center"
            gap="2"
            borderTopLeftRadius="md"
            borderTopRightRadius="md"
          >
            <Avatar
              src="/images/appLogo.png"
              name="Amcen Homes"
              bg="#fff"
              size="sm"
            />
            <Text fontSize="md" fontWeight="medium" color="#ffffff">
              Amcen Homes
            </Text>
          </Flex>

          <VStack align="start" spacing={3} p="4">
            <Box
              bg="#ffffff"
              p={2}
              borderRadius="md"
              width="fit-content"
              mb="20"
            >
              <Text fontWeight="medium" fontSize="sm" color="#494848">
                Amcen Homes:
              </Text>
              <Text fontSize="sm" fontWeight="semibold" mt="1">
                Hi there! <br /> How can I help you today?
              </Text>
            </Box>
          </VStack>
          <Button
            bg="#0A5F54"
            color="#fff"
            _hover={{
              bg: "#0A5F54",
              color: "#fff",
            }}
            width="100%"
            rounded="md"
            borderTopEndRadius="0"
            borderTopLeftRadius="0"
            fontFamily="Roboto"
            mt={3}
            onClick={() => {
              window.open(whatsappLink, "_blank");
            }}
          >
            Start Chat
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default WhatsAppChat;
