import { Box, Text, UnorderedList, ListItem, Link } from "@chakra-ui/react";

export default function PrivacyPolicy() {
  return (
    <Box
      px={{ base: "5", md: "20" }}
      py={{ base: "5", md: "10" }}
      fontFamily="Roboto"
    >
      <Text
        fontSize={{ base: "24px", md: "48px" }}
        fontWeight="bold"
        mb={{ base: "5", md: "10" }}
        textAlign="center"
      >
        Privacy Policy
      </Text>
      <Text mb="4">
        Welcome to <strong>Amcen Homes</strong>! Your privacy is important to
        us. This Privacy Policy explains how we collect, use, and protect your
        personal information when you visit our website or use our services. By
        accessing our website at{" "}
        <Link color="primary.500" href="#" fontWeight="bold">
          www.amcenhomes.com
        </Link>
        , you agree to the terms of this policy.
      </Text>

      <Text fontSize="xl" fontWeight="semibold" mt="6" mb="2">
        1. Information We Collect
      </Text>
      <UnorderedList mb="4" pl="6">
        <ListItem>
          <strong>Personal Identification Information:</strong> We may collect
          personal information such as your name, email address, phone number,
          and address when you interact with our services.
        </ListItem>
        <ListItem>
          <strong>Non-Personal Identification Information:</strong> We may also
          collect non-personal information about you whenever you interact with
          our website.
        </ListItem>
      </UnorderedList>

      <Text fontSize="xl" fontWeight="semibold" mt="6" mb="2">
        2. How We Use Your Information
      </Text>
      <UnorderedList mb="4" pl="6">
        <ListItem>
          To improve customer service and respond to user inquiries.
        </ListItem>
        <ListItem>
          To personalize user experience based on how you use our services.
        </ListItem>
        <ListItem>To process transactions and send you confirmations.</ListItem>
        <ListItem>
          To send periodic emails about your order or other products and
          services.
        </ListItem>
      </UnorderedList>

      <Text fontSize="xl" fontWeight="semibold" mt="6" mb="2">
        3. How We Protect Your Information
      </Text>
      <Text mb="4">
        We implement appropriate data collection, storage, and processing
        practices and security measures to protect against unauthorized access,
        alteration, disclosure, or destruction of your personal information,
        username, password, transaction information, and data stored on our
        site.
      </Text>

      <Text fontSize="xl" fontWeight="semibold" mt="6" mb="2">
        4. Sharing Your Information
      </Text>
      <Text mb="4">
        We do not sell, trade, or rent your personal identification information
        to others. We may share generic aggregated demographic information not
        linked to any personal identification information with our business
        partners for the purposes outlined above.
      </Text>

      <Text fontSize="xl" fontWeight="semibold" mt="6" mb="2">
        5. Third-Party Websites
      </Text>
      <Text mb="4">
        Our website may contain links to third-party websites. We do not control
        the content or practices of these websites and are not responsible for
        their privacy policies.
      </Text>

      <Text fontSize="xl" fontWeight="semibold" mt="6" mb="2">
        6. Your Rights
      </Text>
      <Text mb="4">
        You have the right to access, correct, or delete your personal
        information. If you wish to exercise these rights, please contact us
        using the information provided below.
      </Text>

      <Text fontSize="xl" fontWeight="semibold" mt="6" mb="2">
        7. Changes to This Privacy Policy
      </Text>
      <Text mb="4">
        We may update this Privacy Policy from time to time. When we do, we will
        revise the date at the top of this page. We encourage you to review this
        policy periodically.
      </Text>

      <Text fontSize="xl" fontWeight="semibold" mt="6" mb="2">
        8. Contact Us
      </Text>
      <Text mb="4">
        If you have any questions about this Privacy Policy, please contact us
        at:
      </Text>
      <UnorderedList mb="4" pl="6">
        <ListItem>
          <strong>Email:</strong>{" "}
          <Link color="blue.500" href="mailto:amcen2006@gmail.com">
            amcen2006@gmail.com
          </Link>
        </ListItem>
        <ListItem>
          <strong>Phone:</strong> +91 98358 22600 / +91 77600 41102 / +91 82358
          47080
        </ListItem>
        <ListItem>
          <strong>Address:</strong> Amcen Homes, Near Blue Dart Warehouse,
          By-Pass Thana, Tent City Road, Patna, Bihar, 800009
        </ListItem>
      </UnorderedList>
    </Box>
  );
}
