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
        Welcome to <strong>Amcen Homes</strong>! These terms and conditions
        outline the rules and regulations for using our website and services. By
        accessing our website at{" "}
        <Link color="primary.500" href="#" fontWeight="bold">
          www.amcenhomes.com
        </Link>
        , you agree to be bound by these terms. If you do not agree with any
        part of the terms, please do not use our website.
      </Text>

      <Text fontSize="xl" fontWeight="semibold" mt="6" mb="2">
        1. Introduction
      </Text>
      <UnorderedList mb="4" pl="6">
        <ListItem>
          <strong>Amcen Homes</strong> ("we," "us," "our") provides
          construction, renovation, and interior design services through our
          website.
        </ListItem>
        <ListItem>
          These terms apply to all visitors, users, and others who access or use
          our services.
        </ListItem>
      </UnorderedList>

      <Text fontSize="xl" fontWeight="semibold" mt="6" mb="2">
        2. Services
      </Text>
      <Text mb="4">
        Our services include various construction and interior design offerings
        as detailed on our website, including but not limited to:
      </Text>
      <UnorderedList mb="4" pl="6">
        <ListItem>Residential Interiors</ListItem>
        <ListItem>Modular Kitchens</ListItem>
        <ListItem>Bathroom Design</ListItem>
        <ListItem>Office Space Designing</ListItem>
        <ListItem>And other related services.</ListItem>
      </UnorderedList>

      <Text fontSize="xl" fontWeight="semibold" mt="6" mb="2">
        3. User Responsibilities
      </Text>
      <UnorderedList mb="4" pl="6">
        <ListItem>
          Users must provide accurate and complete information when making
          inquiries, bookings, or contacting us through the website.
        </ListItem>
        <ListItem>
          You are responsible for keeping your account details and other
          sensitive information secure.
        </ListItem>
      </UnorderedList>

      <Text fontSize="xl" fontWeight="semibold" mt="6" mb="2">
        4. Bookings and Appointments
      </Text>
      <UnorderedList mb="4" pl="6">
        <ListItem>
          Bookings and service appointments are subject to our availability and
          confirmation.
        </ListItem>
        <ListItem>
          We reserve the right to accept or decline any booking request.
        </ListItem>
        <ListItem>
          Payment terms and conditions will be provided during the booking
          process.
        </ListItem>
      </UnorderedList>

      <Text fontSize="xl" fontWeight="semibold" mt="6" mb="2">
        5. Intellectual Property
      </Text>
      <Text mb="4">
        The content, images, logos, and other materials on this website are the
        property of <strong>[Your Company Name]</strong>. You may not use,
        reproduce, or distribute any part of our website content without our
        prior written consent.
      </Text>

      <Text fontSize="xl" fontWeight="semibold" mt="6" mb="2">
        6. User Content
      </Text>
      <UnorderedList mb="4" pl="6">
        <ListItem>
          Users may be allowed to post reviews, comments, or inquiries on our
          website.
        </ListItem>
        <ListItem>
          By posting content, you grant us a non-exclusive, royalty-free, and
          perpetual right to use, modify, and display such content.
        </ListItem>
        <ListItem>
          We reserve the right to remove any content that we deem inappropriate
          or offensive.
        </ListItem>
      </UnorderedList>

      <Text fontSize="xl" fontWeight="semibold" mt="6" mb="2">
        7. Limitation of Liability
      </Text>
      <Text mb="4">
        <strong>[Your Company Name]</strong> is not liable for any damages or
        losses arising from the use or inability to use our website or services.
        We are not responsible for any inaccuracies or typographical errors in
        the information provided on the website.
      </Text>

      <Text fontSize="xl" fontWeight="semibold" mt="6" mb="2">
        8. Third-Party Links
      </Text>
      <Text mb="4">
        Our website may contain links to third-party websites or services. We do
        not endorse or assume responsibility for the content or practices of any
        third-party websites.
      </Text>

      <Text fontSize="xl" fontWeight="semibold" mt="6" mb="2">
        9. Privacy Policy
      </Text>
      <Text mb="4">
        Your privacy is important to us. Please refer to our{" "}
        <Link color="blue.500" href="#">
          Privacy Policy
        </Link>{" "}
        for details on how we collect, use, and protect your personal
        information.
      </Text>

      <Text fontSize="xl" fontWeight="semibold" mt="6" mb="2">
        10. Changes to Terms
      </Text>
      <UnorderedList mb="4" pl="6">
        <ListItem>
          We reserve the right to update or modify these terms at any time
          without prior notice.
        </ListItem>
        <ListItem>
          Continued use of our website after any changes indicates your
          acceptance of the new terms.
        </ListItem>
      </UnorderedList>

      <Text fontSize="xl" fontWeight="semibold" mt="6" mb="2">
        11. Governing Law
      </Text>
      <Text mb="4">
        These terms shall be governed and construed in accordance with the laws
        of <strong>[Your Country/State]</strong>. Any disputes arising out of
        these terms will be resolved in the courts of{" "}
        <strong>[Your Country/State]</strong>.
      </Text>

      <Text fontSize="xl" fontWeight="semibold" mt="6" mb="2">
        12. Contact Us
      </Text>
      <Text mb="4">
        If you have any questions about these terms, please contact us at:
      </Text>
      <UnorderedList mb="4" pl="6">
        <ListItem>
          <strong>Email:</strong>{" "}
          <Link color="blue.500" href="mailto:your-email@example.com">
            your-email@example.com
          </Link>
        </ListItem>
        <ListItem>
          <strong>Phone:</strong> [Your Contact Number]
        </ListItem>
        <ListItem>
          <strong>Address:</strong> [Your Business Address]
        </ListItem>
      </UnorderedList>
    </Box>
  );
}
