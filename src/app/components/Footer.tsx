import { Box, Divider, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";
import AppLogo from "./AppLogo";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import LocationIcon from "./Icons/LocationIcon";
import FacebookIcon from "./Icons/FacebookIcon";
import InstaIcon from "./Icons/InstaIcon";
import TwitterIcon from "./Icons/TwitterIcon";
import WhatsappOutlineIcon from "./Icons/WhatsappOutlineIcon";
import { useRouter } from "next/navigation";
import LinkedInIcon from "./Icons/LinkedInIcon";

export default function Footer() {
  const linkStyle = {
    display: "block",
    fontSize: { base: "sm", md: "md" },
    fontWeight: "normal",
    color: "#ede8e8",
    mb: 1,
  };
  const { push } = useRouter();

  return (
    <Box bg="#000000">
      <Flex
        direction={{ base: "column", md: "row" }}
        px={{ base: 4, md: 10 }}
        gap={{ base: 10, md: 10 }}
        justify="space-between"
        py={{ base: 6, md: 10 }}
      >
        <Box w={{ base: "100%", md: "25%" }}>
          <AppLogo
            logoHeight={28}
            logoWidth={28}
            appNameProps={{
              fontSize: { base: "20px", md: "24px" },
              color: "#fff",
              flexWrap: "nowrap",
            }}
          />
          <Text color="#ffffff" fontSize="sm" mt="4">
            We specialize in innovative home construction and design, combining
            quality craftsmanship with modern technology to create beautiful,
            functional spaces tailored to your needs
          </Text>
          <Flex mt="6" color="#fff" gap="4">
            <FacebookIcon w="6" h="6" cursor="pointer" />
            <InstaIcon w="6" h="6" cursor="pointer" />
            <TwitterIcon w="6" h="6" cursor="pointer" />
            <LinkedInIcon w="6" h="6" cursor="pointer" />
          </Flex>
        </Box>

        <Flex
          direction={{ base: "column", md: "row" }}
          w={{ base: "100%", md: "50%" }}
          justify="space-between"
          gap={{ base: "5", md: "auto" }}
        >
          <Box>
            <Text mb="3" fontSize="lg" fontWeight="semibold" color="#EDAB5B">
              Company
            </Text>
            {/* <Link sx={linkStyle} href="/#about-us">
              About Us
            </Link> */}
            <Link sx={linkStyle} href="/our-services">
              Our Services
            </Link>
            <Link sx={linkStyle} href="/estimate">
              Estimate
            </Link>
            <Link sx={linkStyle} href="/gallery">
              Gallery
            </Link>
          </Box>
          <Box>
            <Text mb="3" fontSize="lg" fontWeight="semibold" color="#EDAB5B">
              Useful Links
            </Text>
            <Link sx={linkStyle} href="/terms-and-condition">
              Terms & Conditions
            </Link>
            <Link sx={linkStyle} href="/privacy-policy">
              Privacy Policy
            </Link>
            <Link sx={linkStyle}>Feedback</Link>
            <Link sx={linkStyle} href="/faqs">
              FAQs
            </Link>
          </Box>
          <Box>
            <Text mb="3" fontSize="lg" fontWeight="semibold" color="#EDAB5B">
              Resource
            </Text>
            {/* <Link sx={linkStyle} href="/blogs">
              Blog
            </Link> */}
            <Link sx={linkStyle}>Book an Appointment</Link>
            <Link sx={linkStyle} href="/site-map">
              Site Map
            </Link>
          </Box>
        </Flex>

        <Box w={{ base: "100%", md: "25%" }} pl={{ base: 0, md: 10 }}>
          <Text mb="5" fontSize="lg" fontWeight="semibold" color="#EDAB5B">
            Company
          </Text>
          <Flex gap="4" align="start">
            <Flex
              align="center"
              justify="center"
              w="30px"
              h="30px"
              borderRadius="full"
              bg="#0862ed"
              color="#fff"
            >
              <PhoneIcon h="4" w="4" />
            </Flex>
            <Box>
              <Link
                href="tel:+19999999999"
                color="#ede8e8"
                display="block"
                fontSize="sm"
                fontFamily="'Roboto', sans-serif"
                fontWeight="normal"
              >
                +91 98358 22600
              </Link>
              <Link
                href="tel:+19999999999"
                color="#ede8e8"
                fontSize="sm"
                display="block"
                fontFamily="'Roboto', sans-serif"
                fontWeight="normal"
              >
                +91 77600 41102
              </Link>
              <Link
                href="tel:+19999999999"
                color="#ede8e8"
                display="block"
                fontSize="sm"
                fontFamily="'Roboto', sans-serif"
                fontWeight="normal"
              >
                +91 82358 47080
              </Link>
            </Box>
          </Flex>
          <Flex mt="4" gap="4" align="center">
            <Flex
              align="center"
              justify="center"
              w="30px"
              h="30px"
              borderRadius="full"
              bg="#d53c3c"
              color="#fff"
            >
              <EmailIcon h="4" w="4" />
            </Flex>
            <Link
              href="mailto:amcen2006@gmail.com?subject=Inquiry&body=Hello%20there!"
              color="#ede8e8"
              fontSize="sm"
              fontFamily="'Roboto', sans-serif"
              fontWeight="normal"
            >
              amcen2006@gmail.com
            </Link>
          </Flex>
          <Flex mt="4" gap="4">
            <Flex
              align="center"
              justify="center"
              w="30px"
              h="30px"
              borderRadius="full"
              bg="#9159fd"
              color="#fff"
              p="10px"
            >
              <LocationIcon h="4" w="4" />
            </Flex>
            <Text
              color="#ede8e8"
              fontSize="sm"
              display="inline-block"
              fontFamily="'Roboto', sans-serif"
              fontWeight="normal"
            >
              Amcen Homes, Near Blue dart Warehouse, by-pass thana, Tent city
              road, Patna, Bihar, 800009
            </Text>
          </Flex>
        </Box>
      </Flex>
      <Divider borderColor="#fafafa" mt="5" />
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        px={{ base: 4, md: 10 }}
        py="5"
      >
        <Box
          color="#fff"
          fontSize="sm"
          fontWeight="normal"
          textAlign={{
            base: "center",
            md: "left",
          }}
        >
          @Copyright by Amcen homes. All rights reserved
        </Box>
        <Flex
          align="center"
          color="#fff"
          gap={5}
          display={{ base: "none", md: "flex" }}
          justify="space-between"
          mt={{ base: "5", md: "0" }}
        >
          <Link sx={linkStyle} onClick={() => push("/terms-and-condition")}>
            Terms & Condition
          </Link>
          <Link sx={linkStyle} onClick={() => push("/privacy-policy")}>
            Privacy policy
          </Link>
          <Link sx={linkStyle} onClick={() => push("/site-map")}>
            Site Map
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}
