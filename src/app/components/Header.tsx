"use client";
import React from "react";
import { HeaderProps } from "../services/types";
import {
  Flex,
  Button,
  Text,
  Link,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useBreakpointValue,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  DrawerCloseButton,
  Box,
  DrawerFooter,
} from "@chakra-ui/react";
import AppLogo from "./AppLogo";
import { useRouter, usePathname } from "next/navigation";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function Header({ name }: HeaderProps) {
  const { push } = useRouter();
  const pathname = usePathname();

  const {
    isOpen: mobileHeaderisOpen,
    onOpen: mobileHeaderonOpen,
    onClose: mobileHeaderonClose,
  } = useDisclosure();
  const NavItems = [
    {
      pageName: "Home",
      href: "/",
      url: "/",
    },
    {
      pageName: "Our Services",
      href: "/our-services",
      url: "/our-services",
    },
    {
      pageName: "Our Gallery",
      href: "/gallery",
      url: "/gallery",
    },
    {
      pageName: "FAQs",
      href: "/faqs",
      url: "/faqs",
    },
  ];

  return (
    <Flex
      pos="sticky"
      top={0}
      bg="#fff"
      zIndex={999}
      px={{ base: 4, md: 6, lg: 8 }}
      py={{ base: 2, md: 3, lg: 4 }}
      borderBottom="1px solid"
      borderColor="secondary.400"
      justify="space-between"
      alignItems="center"
    >
      <Box display={{ base: "none", md: "none", lg: "block" }}>
        <AppLogo
          logoHeight={25}
          logoWidth={35}
          appNameProps={{
            fontSize: { base: "24px", md: "28px", lg: "32px" },
          }}
        />
      </Box>

      <Box display={{ base: "block", md: "block", lg: "none" }}>
        <AppLogo
          logoHeight={20}
          logoWidth={30}
          appNameProps={{
            fontSize: "24px",
          }}
        />
      </Box>

      {/* Mobile and Tablet Drawer */}
      <Box display={{ base: "inline", md: "inline", lg: "none" }}>
        <IconButton
          icon={<HamburgerIcon h="6" w="6" />}
          variant="outline"
          aria-label="Navigation Menu"
          onClick={mobileHeaderonOpen}
          p="0"
          border="none"
        />
        <Drawer
          isOpen={mobileHeaderisOpen}
          placement="right"
          onClose={mobileHeaderonClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton mt="3" fontSize="sm" fontWeight="normal" />
            <DrawerHeader borderBottom="1px solid" borderColor="#22232626">
              <AppLogo
                logoHeight={20}
                logoWidth={30}
                appNameProps={{
                  fontSize: "24px",
                }}
              />
            </DrawerHeader>
            <DrawerBody pt="5">
              {NavItems.map(({ pageName, href }, i) => (
                <Box key={i}>
                  <Link
                    mb="4"
                    display="inline-block"
                    fontSize="24px"
                    fontWeight="medium"
                    color={href === pathname ? "primary.500" : "secondary.500"}
                    _hover={{ color: "primary.500" }}
                    textDecoration="none"
                    borderBottom="2px solid"
                    borderColor={
                      href === pathname ? "primary.500" : "transparent"
                    }
                    href={href}
                    onClick={mobileHeaderonClose}
                  >
                    {pageName}
                  </Link>
                </Box>
              ))}
            </DrawerBody>
            <DrawerFooter>
              <Button
                background="secondary.600"
                color="contrast.200"
                rounded="full"
                px="5"
                w="full"
                _hover={{
                  background: "secondary.500",
                  color: "contrast.200",
                }}
                fontFamily="Roboto"
                onClick={() => push("/#contact-us")}
              >
                Contact Us
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>

      {/* Desktop Links */}
      <Flex
        gap={8}
        display={{ base: "none", md: "none", lg: "flex" }}
        align="center"
      >
        {NavItems.map(({ pageName, href }, i) => (
          <Link
            key={i}
            href={href}
            _hover={{
              textDecoration: "none",
              borderColor: "primary.500",
              color: "primary.500",
            }}
            fontSize="18px"
            fontWeight="medium"
            textDecoration="none"
            color={href === pathname ? "primary.500" : "secondary.500"}
            borderBottom="2px solid"
            borderColor={href === pathname ? "primary.500" : "transparent"}
          >
            {pageName}
          </Link>
        ))}
      </Flex>

      {/* Contact Us Button for Desktop */}
      <Button
        background="secondary.600"
        display={{ base: "none", md: "none", lg: "block" }}
        color="contrast.200"
        rounded="full"
        px="5"
        _hover={{
          background: "secondary.500",
          color: "contrast.200",
        }}
        fontFamily="Roboto"
        onClick={() => push("/#contact-us")}
      >
        Contact Us
      </Button>
    </Flex>
  );
}
