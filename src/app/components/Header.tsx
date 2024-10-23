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
} from "@chakra-ui/react";
import AppLogo from "./AppLogo";
import { useRouter, usePathname } from "next/navigation";
import { ChevronDownIcon } from "@chakra-ui/icons";

export default function Header({ name }: HeaderProps) {
  const { push } = useRouter();
  const pathname = usePathname();
  const isMobile = useBreakpointValue({ base: true, md: false });
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
      pageName: "Blogs",
      href: "/blogs",
      url: "/blogs",
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
    // <Flex
    //   pos="sticky"
    //   top={0}
    //   bg="#fff"
    //   zIndex={999}
    //   px={8}
    //   py={4}
    //   borderBottom="1px solid"
    //   borderColor="secondary.400"
    //   justify="space-between"
    //   alignItems="center"
    // >
    //   <AppLogo
    //     logoHeight={25}
    //     logoWidth={35}
    //     appNameProps={{ fontSize: "32px" }}
    //   />
    //   <Flex gap={8} align="center">
    //     {NavItems.map(({ pageName, url, href }, i) => {
    //       return (
    //         <Link
    //           key={i}
    //           href={href}
    //           _hover={{
    //             textDecoration: "none",
    //             borderColor: "primary.500",
    //             color: "primary.500",
    //           }}
    //           fontSize="18px"
    //           fontWeight="medium"
    //           textDecoration="none"
    //           color={href === pathname ? "primary.500" : "secondary.500"}
    //           borderBottom="2px solid"
    //           borderColor={href === pathname ? "primary.500" : "transparent"}
    //         >
    //           {pageName}
    //         </Link>
    //       );
    //     })}
    //   </Flex>
    //   <Button
    //     background="secondary.600"
    //     color="contrast.200"
    //     rounded="full"
    //     px="5"
    //     _hover={{
    //       background: "secondary.500",
    //       color: "contrast.200",
    //     }}
    //     fontFamily="Roboto"
    //   >
    //     Contact Us
    //   </Button>
    // </Flex>
    <Flex
      pos="sticky"
      top={0}
      bg="#fff"
      zIndex={999}
      px={{ base: 4, md: 8 }}
      py={{ base: 2, md: 4 }}
      borderBottom="1px solid"
      borderColor="secondary.400"
      justify="space-between"
      alignItems="center"
    >
      <AppLogo
        logoHeight={useBreakpointValue({ base: 20, md: 25 })}
        logoWidth={useBreakpointValue({ base: 30, md: 35 })}
        appNameProps={{
          fontSize: useBreakpointValue({ base: "24px", md: "32px" }),
        }}
      />

      {isMobile ? (
        // Mobile menu
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<ChevronDownIcon />}
            variant="outline"
            aria-label="Navigation Menu"
          />
          <MenuList>
            {NavItems.map(({ pageName, href }, i) => (
              <MenuItem key={i}>
                <Link href={href}>{pageName}</Link>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      ) : (
        // Desktop menu
        <Flex gap={8} align="center">
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
      )}

      {/* Display "Contact Us" button only on larger screens */}
      {!isMobile && (
        <Button
          background="secondary.600"
          color="contrast.200"
          rounded="full"
          px="5"
          _hover={{
            background: "secondary.500",
            color: "contrast.200",
          }}
          fontFamily="Roboto"
        >
          Contact Us
        </Button>
      )}
    </Flex>
  );
}
