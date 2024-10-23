// components/FAQ.tsx
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
} from "@chakra-ui/react";

const FAQ = ({ faqs }: any) => {
  return (
    <Accordion w="full" allowToggle>
      {faqs.length > 0 && (
        <>
          {faqs.map((faq: any, index: number) => (
            <AccordionItem key={index} borderWidth={1} borderRadius="md" mb={2}>
              <AccordionButton bg="#f5f5f5">
                <Box flex="1" textAlign="left">
                  <Heading
                    fontSize="md"
                    fontWeight="medium"
                    fontFamily="Roboto"
                    color="secondary.500"
                  >
                    {faq.question}
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel
                pb={4}
                fontSize="sm"
                fontWeight="medium"
                color="secondary.500"
                fontFamily="Roboto"
              >
                {faq.answer}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </>
      )}
    </Accordion>
  );
};

export default FAQ;
