import LocationIcon from "@/app/components/Icons/LocationIcon";
import { Box, Text, Image, HStack, Icon, Divider } from "@chakra-ui/react";

export default function SiteMap() {
  const steps = [
    {
      name: "Home",
      description: "Start here with an overview of our services and offerings.",
      completed: true,
    },
    {
      name: "Services",
      description: "Explore the various services we offer.",
      completed: true,
    },
    {
      name: "Gallery",
      description: "Browse through our portfolio and past projects.",
      completed: true,
    },
    {
      name: "Blog",
      description: "Read articles and updates about our projects.",
      completed: true,
    },
    {
      name: "Book an Appointment",
      description: "Schedule a meeting with us to discuss your project.",
      completed: false,
    },
    {
      name: "Contact Us",
      description: "Get in touch with us for queries or support.",
      completed: false,
    },
    {
      name: "FAQs",
      description: "Find answers to common questions.",
      completed: false,
    },
    {
      name: "Privacy Policy",
      description: "Learn about how we handle your data.",
      completed: false,
    },
    {
      name: "Terms & Conditions",
      description: "Read the terms of using our services.",
      completed: false,
    },
  ];
  return (
    <Box px="5" py="10">
      <Text fontSize="40px" fontWeight="bold" mb="10" textAlign="center">
        Site Map
      </Text>
      <Image src="/images/site_map.png" w="1200px" mx="auto" h="1200px" />
    </Box>
  );
  //   return (
  //
  //       <VStack spacing="5" align="stretch">
  //         {steps.map((step, index) => (
  //           <HStack key={index} align="start" spacing="4">
  //             <Box mt="2">
  //               <Icon
  //                 as={step.completed ? LocationIcon : LocationIcon}
  //                 color={step.completed ? "green.500" : "gray.400"}
  //                 w={6}
  //                 h={6}
  //               />
  //             </Box>
  //             <VStack align="start" spacing="1" w="full">
  //               <Text fontSize="lg" fontWeight="medium" color="secondary.600">
  //                 {step.name}
  //               </Text>
  //               <Text fontSize="sm" color="gray.600">
  //                 {step.description}
  //               </Text>
  //               {index < steps.length - 1 && <Divider orientation={"vertical"} />}
  //             </VStack>
  //           </HStack>
  //         ))}
  //       </VStack>
  //     </Box>
  //   );
}
