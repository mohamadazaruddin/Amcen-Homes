import { Box, Text } from "@chakra-ui/react";

export default function pageTitle(
  pagetitlrString: String,
  description: string
) {
  if (pagetitlrString?.length) {
    const [word1, word2] = pagetitlrString?.split(" ");
    return (
      <>
        <Text fontSize="48px" color="#fff" fontWeight="bold">
          {word1}{" "}
          <Box as="span" color="#EDAB5B">
            {word2}
          </Box>
        </Text>
        <Text color="#fff" fontSize="md" fontWeight="normal">
          {description}
        </Text>
      </>
    );
  } else return <>Something went wrong....</>;
}
