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
      <Image h="200px" w="250px" mx="auto" src={image} />
      <Box mt="5">
        <Text fontSize="lg" fontWeight="medium" fontFamily="Roboto">
          {name}
        </Text>
        <Text
          fontSize="
          
          sm"
          color="secondary.500"
          fontWeight="normal"
          fontFamily="Roboto"
        >
          {content}
        </Text>
      </Box>
    </Box>
  );
}
