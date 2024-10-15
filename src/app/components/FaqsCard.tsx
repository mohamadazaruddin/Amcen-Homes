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

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ faqs }) => {
  return (
    <Accordion w="full" allowToggle>
      {faqs.map((faq, index) => (
        <AccordionItem key={index} borderWidth={1} borderRadius="md" mb={2}>
          <AccordionButton bg="#f5f5f5">
            <Box flex="1" textAlign="left">
              <Heading fontSize="md" fontWeight="medium" color="secondary.500">
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
          >
            {faq.answer}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FAQ;
