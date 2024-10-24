import { Box, Button, Flex, Image, Text, Tooltip } from "@chakra-ui/react";
import React from "react";
import CartIcon from "./Icons/CartIcon";

export default function ProductCard({
  name,
  image,
  content,
  action,
  wrapperProps,
}: any) {
  return (
    <Flex
      p="5"
      rounded="lg"
      flexDirection="column"
      h="full"
      borderColor="transparent"
      justifyContent="space-between"
      fontFamily="Roboto"
      {...wrapperProps}
    >
      <Box>
        <Image h={{ base: "100px", md: "200px" }} src={image} mx="auto" />
        <Text fontSize={{ base: "lg", md: "2xl" }} fontWeight="medium" mt="4">
          {name}
        </Text>
        <Tooltip
          bg="#f5f5f5"
          py="2"
          hasArrow
          rounded="base"
          placement="top"
          fontWeight="normal"
          fontSize="md"
          color="secondary.500"
          label={content}
        >
          <Text
            fontSize={{ base: "xs", md: "sm" }}
            noOfLines={{ base: 2 }}
            fontWeight="normal"
            mt="1"
          >
            {content}
          </Text>
        </Tooltip>
      </Box>
      {action}
    </Flex>
  );
}
