import { Box, Flex, Image, Text, Link, Avatar } from "@chakra-ui/react";

import React from "react";
import dateFormater from "../utils/dateFormater";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function Blogcard({ blog, action }: any) {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="sm"
      bg="white"
      _hover={{ boxShadow: "md" }}
    >
      <Image
        src={blog.image}
        alt={blog.title}
        width="100%"
        height={{ base: "150px", md: "200px" }}
        objectFit="cover"
      />
      <Box p="4">
        <Flex align="center" mb="2">
          <Avatar
            src={blog?.user?.profile_image}
            name={blog?.user?.name}
            boxSize={{ base: "28px", md: "35px" }}
            size="sm"
            mr="2"
          />
          <Box>
            <Text
              fontWeight="semibold"
              fontSize={{ base: "xs", md: "sm" }}
              fontFamily="normal"
            >
              {blog?.user?.name}
            </Text>
            <Text
              fontSize={{ base: "10px", md: "xs" }}
              fontWeight="medium"
              fontFamily="'Roboto', sans-serif"
              color="gray.500"
            >
              {dateFormater(blog.added_date)}
            </Text>
          </Box>
        </Flex>

        <Text fontSize="md" fontWeight="bold" mb="2" noOfLines={1}>
          {blog.title}
        </Text>
        <Text fontSize="sm" noOfLines={2} mb={{ base: "4", md: "8" }}>
          {blog.content}
        </Text>

        {action}
      </Box>
    </Box>
  );
}
