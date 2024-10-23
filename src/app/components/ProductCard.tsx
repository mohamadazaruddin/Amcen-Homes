import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
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
        <Image h="200px" src={image} mx="auto" />
        <Text fontSize="2xl" fontWeight="medium" mt="4">
          {name}
        </Text>
        <Text fontSize="sm" fontWeight="normal" mt="1">
          {content}
        </Text>
      </Box>
      {action}
    </Flex>
  );
}
