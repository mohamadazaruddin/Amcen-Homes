import { Box, Divider, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";
import AppLogo from "./AppLogo";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import LocationIcon from "./Icons/LocationIcon";
import FacebookIcon from "./Icons/FacebookIcon";
import InstaIcon from "./Icons/InstaIcon";
import TwitterIcon from "./Icons/TwitterIcon";
import WhatsappOutlineIcon from "./Icons/WhatsappOutlineIcon";

export default function Footer() {
  const linkStyle = {
    display: "block",
    fontSize: "sm",
    color: "#ede8e8",
    mb: 1,
  };
  return (
    <Box bg="#000000">
      <Flex px="10" gap="10" justify="space-between" py="10">
        <Box w="25%">
          <AppLogo
            logoHeight={24}
            logoWidth={24}
            appNameProps={{
              fontSize: "24px",
              color: "#fff",
              flexWrap: "nowrap",
            }}
          />
          <Text color="#ffffff" fontSize="sm" mt="4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
            deleniti modi, rerum id maiores,
          </Text>
          <Flex mt="6" color="#fff !important" gap="4">
            <FacebookIcon w="6" h="6" cursor="pointer" />
            <InstaIcon w="6" h="6" cursor="pointer" />
            <TwitterIcon w="6" h="6" cursor="pointer" />
            <WhatsappOutlineIcon w="6" h="6" cursor="pointer" />
          </Flex>
        </Box>
        <Flex w="50%" justify="space-around">
          <Box>
            <Text mb="3" fontSize="md" fontWeight="semibold" color="#fff">
              Company
            </Text>
            <Link sx={linkStyle} href="/#about-us">
              About Us
            </Link>
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
            <Text mb="3" fontSize="md" fontWeight="semibold" color="#fff">
              Useful Links
            </Text>
            <Link sx={linkStyle}>Terms & Conditions</Link>
            <Link sx={linkStyle}>Privacy Policy</Link>
            <Link sx={linkStyle}>Feedback</Link>
            <Link sx={linkStyle} href="/faqs">
              FAQs
            </Link>
          </Box>
          <Box>
            <Text mb="3" fontSize="md" fontWeight="semibold" color="#fff">
              Resource
            </Text>
            <Link sx={linkStyle} href="/blogs">
              Blog
            </Link>
            <Link sx={linkStyle}>Book an Appointment</Link>
            <Link sx={linkStyle}>Site Map</Link>
          </Box>
        </Flex>
        <Box w="25%" pl="10">
          <Text mb="5" fontSize="md" fontWeight="semibold" color="#fff">
            Company
          </Text>
          <Flex gap="2" align="center">
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
            <Text
              color="#ede8e8"
              fontSize="sm"
              fontFamily="'Roboto', sans-serif"
              fontWeight="medium"
            >
              +91 98745 63210
            </Text>
          </Flex>
          <Flex mt="4" gap="2" align="center">
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
            <Text
              color="#ede8e8"
              fontSize="sm"
              fontFamily="'Roboto', sans-serif"
              fontWeight="medium"
            >
              amcenhome@gmail.com
            </Text>
          </Flex>
          <Flex mt="4" gap="2">
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
              fontWeight="medium"
            >
              Amcen Homes, Near Blue dart Warehouse, by-pass thana, Tent city
              road, Patna, Bihar, 800009
            </Text>
          </Flex>
        </Box>
      </Flex>
      <Divider borderColor="#fafafa" mt="5" />
      <Flex justify="space-between" px="10" py="5">
        <Box color="#fff !important" fontSize="sm" fontWeight="normal">
          @Copyright by Amcen homes. All rights reserved
        </Box>
        <Flex
          align="center"
          color="#fff !important"
          gap={5}
          justify="space-between"
        >
          <Link sx={linkStyle}>Terms & Condition</Link>
          <Link sx={linkStyle}>Privacy policy</Link>
          <Link sx={linkStyle}>Site Map</Link>
        </Flex>
      </Flex>
    </Box>
  );
}
