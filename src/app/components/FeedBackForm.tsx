import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
  Flex,
  useToast,
} from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import ky from "ky";
interface FormValues {
  username: string;
  email: string;
  phoneNumber: string;
  feedBack: string;
}
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),
  feedBack: Yup.string().required("Feedback is required"),
});

export default function FeedBackForm({ isOpen, onClose }: any) {
  const toast = useToast();
  const initialValues: FormValues = {
    username: "",
    email: "",
    phoneNumber: "",
    feedBack: "",
  };
  const labelStyle = {
    fontSize: "md",
    fontWeight: "normal",
    fontFamily: "Roboto",
    mb: "0",
  };
  return (
    <>
      <Modal
        size="md"
        closeOnOverlayClick={false}
        blockScrollOnMount={false}
        isOpen={isOpen}
        isCentered
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent rounded="lg" bg="#ffffff">
          <ModalHeader
            py="10px"
            borderBottom="2px solid"
            bg="secondary.500"
            borderTopRadius="lg"
            color="#ffffff"
            fontFamily="Roboto"
            fontSize="lg"
            fontWeight="medium"
            borderColor="#8b8b8b29"
          >
            FeedBack
          </ModalHeader>
          <ModalCloseButton color="#ffffff" />
          <ModalBody>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={async (values, { resetForm }) => {
                console.log(values);
                const sendParams = {
                  name: values.username,
                  email: values.email,
                  phone: values.phoneNumber,
                  query: values.feedBack,
                  queryType: "FeedBack",
                  service: "",
                };
                try {
                  const response = await ky
                    .post(`/api/add-queries`, { json: sendParams })
                    .json();

                  if (response) {
                    toast({
                      description: "Feedback Sent Successfully",
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
                onClose();
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Flex gap="4" mt="2">
                    <Field name="username">
                      {({ field, form }: any) => (
                        <FormControl
                          isInvalid={
                            form.errors.username && form.touched.username
                          }
                        >
                          <FormLabel sx={labelStyle}>Name</FormLabel>
                          <Input
                            {...field}
                            placeholder="John Doe"
                            _placeholder={{
                              fontWeight: "normal",
                            }}
                          />
                          <FormErrorMessage>
                            {form.errors.username}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="phoneNumber">
                      {({ field, form }: any) => (
                        <FormControl
                          isInvalid={
                            form.errors.phoneNumber && form.touched.phoneNumber
                          }
                        >
                          <FormLabel sx={labelStyle}>Phone Number</FormLabel>
                          <Input
                            {...field}
                            placeholder="+91 98765 43210"
                            fontFamily="Roboto"
                            _placeholder={{
                              fontWeight: "normal",
                              fontSize: "sm",
                            }}
                          />
                          <FormErrorMessage>
                            {form.errors.phoneNumber}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </Flex>

                  <Field name="email">
                    {({ field, form }: any) => (
                      <FormControl
                        mt={4}
                        isInvalid={form.errors.email && form.touched.email}
                      >
                        <FormLabel sx={labelStyle}>Email</FormLabel>
                        <Input
                          {...field}
                          type="email"
                          placeholder="johndoe@abc.com"
                        />
                        <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="feedBack">
                    {({ field, form }: any) => (
                      <FormControl
                        mt={4}
                        isInvalid={
                          form.errors.feedBack && form.touched.feedBack
                        }
                      >
                        <FormLabel sx={labelStyle}>FeedBack</FormLabel>
                        <Textarea
                          rows={5}
                          resize="none"
                          {...field}
                          placeholder="Your Feedback..."
                        />
                        <FormErrorMessage>
                          {form.errors.feedBack}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <ModalFooter px="0" mt="2">
                    <Button
                      bg="#ffffff"
                      color="secondary.500"
                      border="1px solid"
                      borderColor="secondary.500"
                      onClick={onClose}
                      mr={3}
                      fontFamily="Roboto"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      bg="secondary.500"
                      _hover={{ bg: "secondary.500", color: "#fff" }}
                      color="#fff"
                      isLoading={isSubmitting}
                      fontFamily="Roboto"
                    >
                      Submit
                    </Button>
                  </ModalFooter>
                </Form>
              )}
            </Formik>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
