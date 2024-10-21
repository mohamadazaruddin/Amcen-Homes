import { Text, Box, Image } from "@chakra-ui/react";
import React from "react";

export default function ProductInfoCard({
  name,
  tag,
  category,
  content,
  image,
}: any) {
  return (
    <Box>
      <Image h="150px" src={image} w="full" />
      <Box mt="5">
        <Text fontSize="lg" fontWeight="medium" fontFamily="Roboto">
          {name}
        </Text>
        <Text>{content}</Text>
      </Box>
    </Box>
  );
}
