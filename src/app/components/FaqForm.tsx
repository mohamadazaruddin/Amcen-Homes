import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import ky from "ky";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Flex,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Textarea,
  ModalFooter,
  Button,
  useToast,
} from "@chakra-ui/react";
interface FormValues {
  question: string;
}
export default function FaqForm({ isOpen, onClose }: any) {
  const toast = useToast();
  const validationSchema = Yup.object({
    question: Yup.string().required("Question is required"),
  });
  const initialValues: FormValues = {
    question: "",
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
            Ask a Question
          </ModalHeader>
          <ModalCloseButton color="#ffffff" />
          <ModalBody>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={async (values, { resetForm }) => {
                console.log(values);
                const sendParams = {
                  Question: values.question,
                };
                try {
                  const response = await ky
                    .post(`/api/add-faq`, { json: sendParams })
                    .json();

                  if (response) {
                    toast({
                      description: "Question Sent Successfully",
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
                    <Field name="question">
                      {({ field, form }: any) => (
                        <FormControl
                          isInvalid={
                            form.errors.question && form.touched.question
                          }
                        >
                          <FormLabel sx={labelStyle}>Question</FormLabel>
                          <Input
                            {...field}
                            placeholder="What's on your mind ?? "
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
                  </Flex>

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
