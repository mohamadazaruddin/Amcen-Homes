import FAQ from "@/app/components/FaqsCard";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { faqs } from "../../../../public/content.json";
export default function FAQs() {
  const chunkedFAQs = Array.from(
    { length: Math.ceil(faqs.length / 10) },
    (_, i) => faqs.slice(i * 10, i * 10 + 10)
  );

  return (
    <Box>
      <Heading textAlign="center" color="primary.500" mt="16" fontSize="48px">
        Frequently{" "}
        <Box as="span" color="secondary.500">
          Asked{" "}
        </Box>
        Questions
      </Heading>
      <Text fontSize="md" color="secondary.500" textAlign="center" mt="2">
        If you can't find an answer that you're looking for, feel free to drop a
        line.
      </Text>
      <Flex justify="center" mt="5">
        <Button
          border="1px solid"
          borderColor="secondary.500"
          color="secondary.200"
          rounded="full"
          fontFamily="Roboto"
          variant="outline"
          px="5"
          _hover={{
            background: "secondary.500",
            color: "contrast.200",
          }}
        >
          Ask a Question ?
        </Button>
      </Flex>
      <Flex px={10} gap="5" my="10">
        {chunkedFAQs?.map((faqGroup, index) => (
          <Flex key={index} wrap="wrap" justify="space-between" mb={6} w="full">
            <FAQ faqs={faqGroup} />
          </Flex>
        ))}
      </Flex>
    </Box>
  );
}
