"use client";
import QueriesTable from "@/app/components/QueriesTable";

import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import ky from "ky";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  useToast,
  Stack,
} from "@chakra-ui/react";
import StatsChart from "@/app/components/StatsChart";
import { AnyAaaaRecord } from "dns";
import dateFormater from "@/app/utils/dateFormater";
import ItemsViewer from "@/app/utils/ItemsViewer";

type QuesriesType = {
  _id: string;
  name: String;
  email: String;
  phone: String;
  query: String;
  queryType: String;
  service: String;
};
export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [queries, setQueries] = useState<QuesriesType[]>([]);
  const [chartData, setChartData] = useState<any>([]);
  const [questions, setQuestions] = useState<any>([]);
  const [latestRequest, setLatestRequest] = useState<any>();

  const toast = useToast();
  useEffect(() => {
    const admin = sessionStorage.getItem("admin");
    if (admin) {
      setIsAuthenticated(true);
    }
    fetchQueries();
  }, []);

  const fetchQueries = async () => {
    try {
      const data: QuesriesType[] = await ky("/api/get-queries").json();
      const questions: QuesriesType[] = await ky("/api/get-faq").json();
      setQueries(data);
      setLatestRequest(data[0]);
      setQuestions(questions);
      setChartData([
        {
          name: "Feedback",
          value: data.filter(({ queryType }) => queryType === "FeedBack")
            .length,
        },
        {
          name: "Appointment",
          value: data.filter(({ queryType }) => queryType === "Appointment")
            .length,
        },
        {
          name: "Enquiry",
          value: data.filter(({ queryType }) => queryType === "Enquiry").length,
        },
        {
          name: "Question",
          value: questions.length,
        },
      ]);
    } catch (error) {
      console.error("An error occurred while fetching data", error);
    }
  };
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      // Retrieve environment variables
      const envUsername = process.env.NEXT_PUBLIC_USERNAME;
      const envPassword = process.env.NEXT_PUBLIC_PASSWORD;

      // Check if the entered credentials match the environment variables
      if (values.username === envUsername && values.password === envPassword) {
        sessionStorage.setItem("admin", "true");
        setIsAuthenticated(true);
        toast({
          description: "Login Successfully",
          status: "success",
          isClosable: true,
          variant: "left-accent",
          position: "bottom",
          duration: 4000,
        });
      } else {
        toast({
          description: "Invalid username or password",
          status: "error",
          isClosable: true,
          variant: "left-accent",
          position: "bottom",
          duration: 4000,
        });
      }
    },
  });

  return (
    <>
      {isAuthenticated ? (
        <Box py={{ base: "10", md: "60px" }} px={{ base: "5", md: "10" }}>
          <Flex gap="5">
            {chartData.length > 0 && (
              <Box bg="#f5f5f5" w="50%" p="4" shadow="lg" rounded="lg">
                <StatsChart chartData={chartData} />
              </Box>
            )}
            {latestRequest?._id.length > 0 && (
              <Box
                bg="#f5f5f5"
                w="50%"
                p="4"
                shadow="lg"
                rounded="lg"
                fontFamily="Roboto"
              >
                <Heading fontSize="2xl" fontWeight="medium" mb={5}>
                  Latest Request
                </Heading>
                <Stack spacing={2}>
                  <Text fontSize="md" color="secondary.500">
                    Name:<strong> {latestRequest.name}</strong>
                  </Text>
                  <Text fontSize="md" color="secondary.500">
                    Email:<strong> {latestRequest.email}</strong>
                  </Text>
                  <Text fontSize="md" color="secondary.500">
                    Phone:<strong> {latestRequest.phone}</strong>
                  </Text>
                  <Text fontSize="md" color="secondary.500" noOfLines={3}>
                    Query:<strong> {latestRequest.query}</strong>
                  </Text>
                  <Text fontSize="md" color="secondary.500" noOfLines={3}>
                    Query Type:
                    <strong> {latestRequest.queryType || "N/A"}</strong>
                  </Text>
                  <Text fontSize="md" color="secondary.500" noOfLines={3}>
                    Service:<strong> {latestRequest.service || "N/A"}</strong>
                  </Text>
                  <Text fontSize="md" color="secondary.500">
                    Submitted At:
                    <strong> {dateFormater(latestRequest.createdAt)}</strong>
                  </Text>
                  <Text fontSize="md" color="secondary.500">
                    Estimated Cost :
                    <strong> {latestRequest.estimatedCost || "N/A"}</strong>
                  </Text>
                  <Text fontSize="md" color="secondary.500">
                    Construction Items :
                    <strong>
                      {" "}
                      {ItemsViewer(latestRequest.constructionItems)}
                    </strong>
                  </Text>
                </Stack>
              </Box>
            )}
          </Flex>
          <Box bg="#f5f5f5" w="full" p="4" shadow="lg" rounded="lg" mt="5">
            <QueriesTable
              questions={questions}
              queries={queries}
              setLatestRequest={setLatestRequest}
              latestRequest={latestRequest}
            />
          </Box>
        </Box>
      ) : (
        <Box p={8} maxW="400px" mx="auto" fontFamily="Roboto">
          <Text fontSize="2xl" mb="4" textAlign="center">
            Login
          </Text>
          <Box as="form" onSubmit={formik.handleSubmit}>
            <FormControl
              isInvalid={!!formik.errors.username && formik.touched.username}
              mb="4"
            >
              <FormLabel>Username</FormLabel>
              <Input
                placeholder="Enter your username"
                {...formik.getFieldProps("username")}
              />
              <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
            </FormControl>

            <FormControl
              isInvalid={!!formik.errors.password && formik.touched.password}
              mb="4"
            >
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Enter your password"
                {...formik.getFieldProps("password")}
              />
              <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
            </FormControl>

            <Button
              type="submit"
              bg="secondary.500"
              _hover={{ bg: "secondary.500", color: "#fff" }}
              color="#fff"
              fontFamily="Roboto"
              w="full"
            >
              Login
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
}
