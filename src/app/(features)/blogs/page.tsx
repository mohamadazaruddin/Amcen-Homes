"use client";
import Blogcard from "@/app/components/Blogcard";
import {
  Text,
  Box,
  Grid,
  Flex,
  Image,
  Link,
  Avatar,
  Icon,
  Heading,
} from "@chakra-ui/react";
import React, { useState, useRef } from "react";
import { blogs } from "../../../../public/content.json";
import dateFormater from "@/app/utils/dateFormater";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function Blogs() {
  const topRef = useRef<any>(null);

  const [readingBlog, setReadingBlog] = useState<any>({
    image: blogs[0].image,
    added_date: blogs[0].added_date,
    user: {
      name: blogs[0].user.name,
      profile_image: blogs[0].user.profile_image,
    },
    title: blogs[0].title,
    content: blogs[0].content,
  });
  const scrollToTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <React.Fragment>
      <div ref={topRef}></div>
      <Box px={{ base: 5, md: 20 }} py={{ base: 5, md: 10 }}>
        <Heading
          textAlign="center"
          color="primary.500"
          fontSize={{ base: "32px", md: "48px" }}
          mt={{ base: "0", md: "6" }}
        >
          <Box as="span" color="secondary.500">
            Our{" "}
          </Box>
          Blogs
        </Heading>
        <Text
          fontSize={{ base: "sm", md: "md" }}
          color="secondary.500"
          textAlign="center"
          mt="2"
        >
          Our blog features expert advice and inspiring stories to help you
          transform <Box display={{ base: "inline", md: "block" }}></Box> your
          spaces and stay ahead in the industry.
        </Text>
        <Flex
          overflow="hidden"
          flexDir={{ base: "column", md: "row" }}
          mb={4}
          gap={{ base: "5", md: "10" }}
          bg="white"
          mt={{ base: "5", md: "16" }}
        >
          <Box w={{ base: "full", md: "50%" }}>
            <Image
              src={readingBlog.image}
              alt={readingBlog.title}
              width="100%"
              height="100%"
              objectFit="cover"
              borderRadius="lg"
            />
          </Box>
          <Box w={{ base: "full", md: "50%" }}>
            <Flex
              w="full"
              h="full"
              justifyContent="space-between"
              flexDirection="column"
            >
              <Box>
                <Flex align="center" mb="2">
                  <Avatar
                    src={readingBlog.user.profile_image}
                    name={readingBlog.user.name}
                    boxSize={{ base: "20px", md: "35px" }}
                    size="sm"
                    bg="#298bd1"
                    mr="2"
                  />
                  {/* <Box> */}
                  <Text
                    fontWeight="bold"
                    mr="2"
                    fontSize={{ base: "sm", md: "md" }}
                  >
                    {readingBlog.user.name}
                  </Text>
                  <Text
                    fontSize={{ base: "xs", md: "sm" }}
                    color="gray.500"
                    fontFamily="'Roboto', sans-serif"
                  >
                    {dateFormater(readingBlog.added_date)}
                  </Text>
                  {/* </Box> */}
                </Flex>
                <Text
                  fontSize={{ base: "24px", md: "32px" }}
                  fontWeight="bold"
                  mb="2"
                >
                  {readingBlog.title}
                </Text>
                <Text fontSize={{ base: "sm", md: "md" }} mb="4">
                  {readingBlog.content}
                </Text>
              </Box>
              <Flex
                align="center"
                fontFamily="'Roboto', sans-serif"
                fontSize={{ base: "xs", md: "md" }}
                fontWeight="medium"
              >
                <Icon
                  viewBox="0 0 200 200"
                  h="3"
                  w="3"
                  color="secondary.500"
                  mr="2"
                >
                  <path
                    fill="currentColor"
                    d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                  />
                </Icon>
                4 min read
              </Flex>
            </Flex>
          </Box>
        </Flex>
        <Text fontSize="24px" fontWeight="medium" mb="2" mt="10">
          Recent Posts
        </Text>
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap={{ base: 4, md: 6 }}
        >
          {blogs.map((blog, index) => (
            <Blogcard
              key={index}
              blog={blog}
              action={
                <Link
                  onClick={() => {
                    setReadingBlog(blog);
                    scrollToTop();
                  }}
                  color="primary.500"
                  fontWeight="bold"
                >
                  Read More <ArrowForwardIcon ml="1" />
                </Link>
              }
            />
          ))}
        </Grid>
      </Box>
    </React.Fragment>
  );
}
