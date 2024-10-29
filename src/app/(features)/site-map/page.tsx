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
      <Text
        fontSize={{ base: "28px", md: "40px" }}
        fontWeight="bold"
        mb={{ base: "0", md: "10" }}
        textAlign="center"
      >
        Site Map
      </Text>
      <Image
        display={{ base: "none", md: "none", lg: "block" }}
        src="/images/site_map.png"
        w="1200px"
        mx="auto"
        h="1200px"
      />
      <Image
        display={{ base: "block", md: "block", lg: "none" }}
        src="/images/site_map_mob.png"
        w="full"
        mx="auto"
        h={{ base: "1000px", md: "1500px" }}
      />
    </Box>
  );
}
