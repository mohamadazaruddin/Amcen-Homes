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
      <Box px={20} py={10}>
        <Heading textAlign="center" color="primary.500" fontSize="48px" mt="6">
          <Box as="span" color="secondary.500">
            Our{" "}
          </Box>
          Blogs
        </Heading>
        <Text fontSize="md" color="secondary.500" textAlign="center" mt="2">
          Discover the latest trends and practical tips in construction and
          renovation. <br /> Our blog features expert advice and inspiring
          stories to help you transform your spaces and stay ahead in the
          industry.
        </Text>
        <Flex overflow="hidden" mb={4} gap="10" bg="white" mt="16">
          <Box w="50%">
            <Image
              src={readingBlog.image}
              alt={readingBlog.title}
              width="100%"
              height="100%"
              objectFit="cover"
              borderRadius="lg"
            />
          </Box>
          <Box w="50%">
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
                    boxSize="35px"
                    size="sm"
                    bg="#298bd1"
                    mr="2"
                  />
                  {/* <Box> */}
                  <Text fontWeight="bold" mr="2" fontSize="md">
                    {readingBlog.user.name}
                  </Text>
                  <Text
                    fontSize="sm"
                    color="gray.500"
                    fontFamily="'Roboto', sans-serif"
                  >
                    {dateFormater(readingBlog.added_date)}
                  </Text>
                  {/* </Box> */}
                </Flex>
                <Text fontSize="32px" fontWeight="bold" mb="2">
                  {readingBlog.title}
                </Text>
                <Text fontSize="md" mb="4">
                  {readingBlog.content}
                </Text>
              </Box>
              <Flex
                align="center"
                fontFamily="'Roboto', sans-serif"
                fontSize="md"
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
          gap={6}
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
