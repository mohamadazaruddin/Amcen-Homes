import { Box, Heading, Text, Grid, Image, Flex } from "@chakra-ui/react";
import React from "react";
import { gallery } from "../../../../public/content.json";

export default function Gallery() {
  const heights = [
    "250px",
    "350px",
    "280px",
    "320px",
    "360px",
    "290px",
    "280px",
    "350px",
    "450px",
    "350px",
  ];

  const mobHeight = [
    "150px",
    "170px",
    "150px",
    "200px",
    "200px",
    "220px",
    "180px",
    "200px",
  ];
  return (
    <Box px={{ base: "5", md: "10" }} py={{ base: 5, md: 10 }}>
      <Heading
        textAlign="center"
        color="primary.500"
        mt={{ base: "0", md: "6" }}
        fontSize={{ base: "32px", md: "48px" }}
      >
        <Box as="span" color="secondary.500">
          Our{" "}
        </Box>
        Gallery
      </Heading>
      <Text
        fontSize={{ base: "sm", md: "md" }}
        color="secondary.500"
        textAlign="center"
        mt="2"
      >
        Explore our gallery of architectural designs, craftsmanship, and
        construction progress—capturing{" "}
        <Box display={{ base: "inline", md: "block" }}></Box> the journey from
        plans to finished spaces.
      </Text>

      {/* mobile view  */}
      <Flex gap="2" my="10" display={{ base: "flex", md: "none" }}>
        <Box w={{ md: "50%" }}>
          <Flex direction="column" gap="2">
            <Image
              rounded="lg"
              src={gallery[0].image}
              alt={gallery[0].title}
              style={{ width: "100%", height: mobHeight[0] }}
            />
            <Image
              rounded="lg"
              src={gallery[1].image}
              alt={gallery[1].title}
              style={{ width: "100%", height: mobHeight[1] }}
            />
            <Image
              rounded="lg"
              src={gallery[2].image}
              alt={gallery[2].title}
              style={{ width: "100%", height: mobHeight[2] }}
            />
            <Image
              rounded="lg"
              src={gallery[9].image}
              alt={gallery[9].title}
              style={{ width: "100%", height: mobHeight[9] }}
            />
            <Image
              rounded="lg"
              src={gallery[6].image}
              alt={gallery[6].title}
              style={{ width: "100%", height: mobHeight[6] }}
            />
            <Image
              rounded="lg"
              src={gallery[7].image}
              alt={gallery[7].title}
              style={{ width: "100%", height: mobHeight[7] }}
            />
          </Flex>
        </Box>
        <Box w={{ md: "50%" }}>
          <Flex direction="column" gap="2">
            <Image
              rounded="lg"
              src={gallery[3].image}
              alt={gallery[3].title}
              style={{ width: "100%", height: mobHeight[3] }}
            />
            <Image
              rounded="lg"
              src={gallery[4].image}
              alt={gallery[4].title}
              style={{ width: "100%", height: mobHeight[4] }}
            />
            <Image
              rounded="lg"
              src={gallery[5].image}
              alt={gallery[5].title}
              style={{ width: "100%", height: mobHeight[5] }}
            />{" "}
            <Image
              rounded="lg"
              src={gallery[8].image}
              alt={gallery[8].title}
              style={{ width: "100%", height: mobHeight[8] }}
            />
          </Flex>
        </Box>
      </Flex>
      {/* desktop view  */}
      <Flex gap="5" my="10" display={{ base: "none", md: "flex" }}>
        <Box w={{ md: "33.33%" }}>
          <Flex direction="column" gap="5">
            <Image
              rounded="lg"
              src={gallery[0].image}
              alt={gallery[0].title}
              style={{ width: "100%", height: heights[0] }}
            />
            <Image
              rounded="lg"
              src={gallery[1].image}
              alt={gallery[1].title}
              style={{ width: "100%", height: heights[1] }}
            />
            <Image
              rounded="lg"
              src={gallery[2].image}
              alt={gallery[2].title}
              style={{ width: "100%", height: heights[2] }}
            />
            <Image
              rounded="lg"
              src={gallery[9].image}
              alt={gallery[9].title}
              style={{ width: "100%", height: heights[9] }}
            />
          </Flex>
        </Box>
        <Box w={{ md: "33.33%" }}>
          <Flex
            direction="column"
            gap="
          5"
          >
            <Image
              rounded="lg"
              src={gallery[3].image}
              alt={gallery[3].title}
              style={{ width: "100%", height: heights[3] }}
            />
            <Image
              rounded="lg"
              src={gallery[4].image}
              alt={gallery[4].title}
              style={{ width: "100%", height: heights[4] }}
            />
            <Image
              rounded="lg"
              src={gallery[5].image}
              alt={gallery[5].title}
              style={{ width: "100%", height: heights[5] }}
            />
          </Flex>
        </Box>
        <Box w={{ md: "33.33%" }}>
          <Flex direction="column" gap="5">
            <Image
              rounded="lg"
              src={gallery[6].image}
              alt={gallery[6].title}
              style={{ width: "100%", height: heights[6] }}
            />
            <Image
              rounded="lg"
              src={gallery[7].image}
              alt={gallery[7].title}
              style={{ width: "100%", height: heights[7] }}
            />
            <Image
              rounded="lg"
              src={gallery[8].image}
              alt={gallery[8].title}
              style={{ width: "100%", height: heights[8] }}
            />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
