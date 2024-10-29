// pages/admin/queries.tsx
import { Box, Flex, Grid, GridItem, Heading, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import dateFormater from "../utils/dateFormater";

export default function QueriesTable({
  queries,
  questions,
  latestRequest,
  setLatestRequest,
}: any) {
  const [showQuestions, setShowQuestions] = useState(false);
  return (
    <Box fontFamily="Roboto">
      <Flex justify="space-between" align="center" mb={5}>
        <Heading fontSize="2xl" fontWeight="medium">
          User Details
        </Heading>
        <Button
          bg="secondary.500"
          _hover={{ bg: "secondary.500", color: "#fff" }}
          color="#fff"
          onClick={() => setShowQuestions(!showQuestions)}
          fontFamily="Roboto"
        >
          {showQuestions ? "Show Queries" : "Show Questions"}
        </Button>
      </Flex>
      {!showQuestions ? (
        <>
          {/* Queries Table */}
          <Grid
            templateColumns="repeat(10, 1fr)"
            gap={4}
            rounded="md"
            py={2}
            px="2"
            mb="2"
            fontWeight="medium"
            fontSize="sm"
            bg="secondary.500"
            color="#ffffff"
          >
            <GridItem colSpan={1}>Name</GridItem>
            <GridItem colSpan={2}>Email</GridItem>
            <GridItem colSpan={1}>Phone</GridItem>
            <GridItem colSpan={3}>Content</GridItem>
            <GridItem colSpan={1}>Type</GridItem>
            <GridItem colSpan={1}>Service</GridItem>
            <GridItem colSpan={1}>Date</GridItem>
          </Grid>
          {queries.map((query: any, index: number) => (
            <Grid
              key={query._id}
              templateColumns="repeat(10, 1fr)"
              gap={4}
              bg={
                latestRequest?._id === query._id
                  ? "primary.500"
                  : index % 2 === 0
                  ? "#ffffff"
                  : "#f5f5f5"
              }
              color={latestRequest?._id === query._id ? "#ffffff" : "#000000"}
              py={2}
              px="2"
              rounded="md"
              boxShadow="sm"
              fontWeight="medium"
              fontSize="sm"
              cursor="pointer"
              onClick={() => setLatestRequest(query)}
            >
              <GridItem colSpan={1} textTransform="capitalize">
                {query.name}
              </GridItem>
              <GridItem colSpan={2}>{query.email}</GridItem>
              <GridItem colSpan={1}>{query.phone}</GridItem>
              <GridItem colSpan={3}>{query.query}</GridItem>
              <GridItem colSpan={1} textTransform="capitalize">
                {query.queryType || "-"}
              </GridItem>
              <GridItem
                colSpan={1}
                whiteSpace="nowrap"
                textTransform="capitalize"
              >
                {query.service || "-"}
              </GridItem>
              <GridItem colSpan={1}>{dateFormater(query.createdAt)}</GridItem>
            </Grid>
          ))}
        </>
      ) : (
        <>
          {/* Questions Table */}
          <Grid
            templateColumns="repeat(10, 1fr)"
            gap={4}
            rounded="md"
            py={2}
            px="2"
            mb="2"
            fontWeight="medium"
            fontSize="sm"
            bg="secondary.500"
            color="#ffffff"
          >
            <GridItem colSpan={9}>Question</GridItem>
            <GridItem colSpan={1}>Created At</GridItem>
          </Grid>
          {questions.map((item: any, index: number) => (
            <Grid
              key={item._id}
              templateColumns="repeat(10, 1fr)"
              gap={4}
              bg={index % 2 === 0 ? "#ffffff" : "#f5f5f5"}
              color="#000000"
              py={2}
              px="2"
              rounded="md"
              boxShadow="sm"
              fontWeight="medium"
              fontSize="sm"
            >
              <GridItem colSpan={9}>{item.Question}</GridItem>
              <GridItem colSpan={1}>{dateFormater(item.createdAt)}</GridItem>
            </Grid>
          ))}
        </>
      )}
    </Box>
  );
}
