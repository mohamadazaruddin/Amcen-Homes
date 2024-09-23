import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Flex,
  Box,
  Text,
  Grid,
  Image,
  GridItem,
  Button,
} from "@chakra-ui/react";
import React from "react";

export default function PriceViewing() {
  const previewImages = [
    { link: "/images/aboutus.png" },
    { link: "/images/commercial.png" },
    { link: "/images/commercial.png" },
    { link: "/images/commercial.png" },
  ];
  return (
    <Flex py={"60px"} bg="#252531" px={10} align="center">
      <Box w="40%" pr="10">
        <Text fontSize="40px" fontWeight="medium" mt={5} color="contrast.200">
          WE CONSTRUCT YOUR <br /> DREAM HOME
        </Text>
        <Text fontSize="sm" mt={3.5} fontWeight="normal" color="contrast.200">
          Starting with Rs. 1750 per sq ft.
        </Text>
        <Button
          background="contrast.200"
          color="secondary.600"
          rounded="full"
          fontSize="sm"
          px="5"
          mt="10"
          _hover={{
            background: "contrast.200 ",
            color: "secondary.500",
          }}
          py="2.5"
          rightIcon={<ArrowForwardIcon />}
        >
          Enquire now
        </Button>
      </Box>
      <Box w="60%">
        <Grid
          my="60px"
          mx="auto"
          w="fit-content"
          gap={5}
          templateColumns="repeat(2, 1fr)"
          transform="rotate(45deg)"
        >
          {previewImages.map((item, i) => (
            <GridItem
              key={i}
              pos="relative"
              height="130px"
              w="130px"
              overflow="hidden"
            >
              <Image
                transform="translate(-50%, -50%) rotate(-45deg)"
                h="200px"
                position="absolute"
                top="50%"
                left="50%"
                w="200px"
                maxW="250px"
                alt="preview-image"
                src={item.link}
              />
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Flex>
  );
}
