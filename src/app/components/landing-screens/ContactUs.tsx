import {
  Box,
  Flex,
  Text,
  Input,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Map from "../Map";
import ky from "ky";
import SlideInFromTop from "../Animations/SlideFromTop";
import SlideInFromLeft from "../Animations/SlideInFromLeft";
import SlideInFromRight from "../Animations/SlideInFromRight";

export default function ContactUs() {
  const toast = useToast();
  // Formik setup with validation using Yup
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      enquiry: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Name must be at least 2 characters")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone: Yup.string()
        .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
        .required("Phone number is required"),
      enquiry: Yup.string().required("Please enter your message"),
    }),
    onSubmit: async (values, { resetForm }) => {
      console.log("Form values:", values);
      const sendParams = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        query: values.enquiry,
        queryType: "Enquiry",
        service: "",
      };
      try {
        const response = await ky
          .post(`/api/add-queries`, { json: sendParams })
          .json();

        if (response) {
          toast({
            description: "Details Sent Successfully",
            status: "success",
            isClosable: true,
            variant: "left-accent",
            position: "bottom",
            duration: 4000,
          });
          resetForm();
        }
      } catch (error) {
        toast({
          description: "An error occurred. Please try again later.",
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
    <Box px={{ base: "5", md: "10", lg: "10" }} py="60px">
      <SlideInFromTop>
        <Box textAlign="center">
          <Text fontSize="lg" fontWeight="normal" color="#494848">
            Get in touch with us
          </Text>
          <Text
            fontSize={{ base: "32px", md: "32px", lg: "40px" }} // Same for mobile and tablet
            fontWeight="medium"
            color="secondary.600"
          >
            Contact Us
          </Text>
        </Box>
      </SlideInFromTop>
      <Flex
        gap="10"
        px={{ base: "0", md: "0", lg: "10" }} // Adjusted for tablet
        mt={{ base: "5", md: "5", lg: "10" }} // Same for mobile and tablet
        h="full"
        flexDirection={{
          base: "column-reverse",
          md: "column-reverse",
          lg: "row",
        }} // Stack on small and tablet screens
      >
        <Box
          w={{ base: "100%", md: "100%", lg: "50%" }} // Same for mobile and tablet
          p={{ base: "1", md: "1", lg: "5" }} // Same for mobile and tablet
          bg="#1A1E23"
          rounded="lg"
          shadow="lg"
          h={{ base: "300px", md: "500px", lg: "auto" }} // Same for mobile and tablet
        >
          <Map />
        </Box>

        <Box
          w={{ base: "100%", md: "100%", lg: "50%" }}
          pl={{ base: "0", md: "0", lg: "10" }}
        >
          <Text
            fontSize={{ base: "20px", md: "20px", lg: "24px" }} // Same for mobile and tablet
            textAlign={{ base: "center", md: "center", lg: "left" }} // Center on mobile and tablet
            fontWeight="medium"
            color="secondary.500"
          >
            Leave Your Message
          </Text>
          <Text
            textAlign={{ base: "center", md: "center", lg: "left" }} // Center on mobile and tablet
            fontSize="sm"
            fontWeight="medium"
            color="secondary.500"
            mb="5"
          >
            Feel free to contact with us by using the form below
          </Text>

          <Box as="form" onSubmit={formik.handleSubmit}>
            <FormControl
              isInvalid={!!formik.errors.name && formik.touched.name}
              mb="4"
            >
              <FormLabel color="secondary.500" fontWeight="medium">
                Name
              </FormLabel>
              <Input
                placeholder="Your Name"
                bg="white"
                {...formik.getFieldProps("name")}
              />
              <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
            </FormControl>

            <FormControl
              isInvalid={!!formik.errors.email && formik.touched.email}
              mb="4"
            >
              <FormLabel color="secondary.500" fontWeight="medium">
                Email
              </FormLabel>
              <Input
                type="email"
                placeholder="Your Email"
                bg="white"
                {...formik.getFieldProps("email")}
              />
              <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            </FormControl>

            <FormControl
              isInvalid={!!formik.errors.phone && formik.touched.phone}
              mb="4"
            >
              <FormLabel color="secondary.500" fontWeight="medium">
                Phone Number
              </FormLabel>
              <Input
                type="tel"
                placeholder="Your Phone Number"
                bg="white"
                {...formik.getFieldProps("phone")}
              />
              <FormErrorMessage>{formik.errors.phone}</FormErrorMessage>
            </FormControl>

            <FormControl
              isInvalid={!!formik.errors.enquiry && formik.touched.enquiry}
              mb="4"
            >
              <FormLabel color="secondary.500" fontWeight="medium">
                Enquiry
              </FormLabel>
              <Textarea
                placeholder="Your Message"
                bg="white"
                {...formik.getFieldProps("enquiry")}
              />
              <FormErrorMessage>{formik.errors.enquiry}</FormErrorMessage>
            </FormControl>

            <Button
              mt="4"
              bg="secondary.600"
              color="contrast.200"
              _hover={{ bg: "secondary.500" }}
              rounded="md"
              type="submit"
              w="full"
              fontFamily="Roboto"
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
