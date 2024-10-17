import {
  Box,
  Card,
  CardFooter,
  Flex,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";

export default function ServiceCard({ image, title, content, action }: any) {
  return (
    <Box rounded="lg" shadow="lg" bg="#fff" h="full">
      <Flex flexDirection="column" h="full" justifyContent="space-between">
        <Box>
          <Image
            src={image}
            h="220px"
            w="full"
            rounded="lg"
            borderBottomLeftRadius="0"
            borderBottomRightRadius="0"
          />

          <Box p="5" flex="1">
            <Text fontSize="20px" fontWeight="semibold" color="secondary.500">
              {title}
            </Text>
            <Text
              fontSize="md"
              fontWeight="normal"
              mt="2"
              color="secondary.500"
            >
              {content}
            </Text>
          </Box>
        </Box>
        <Flex justifyContent="center" pb="5" mt="2">
          {action}
        </Flex>
      </Flex>
    </Box>
  );
}
