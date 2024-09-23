import React from "react";
import { HeaderProps } from "../services/types";
import { Flex, Button, Text } from "@chakra-ui/react";
import AppLogo from "./AppLogo";

export default function Header({ name }: HeaderProps) {
  const NavItems = [
    {
      pageName: "Home",
    },
    {
      pageName: "About Us",
    },
    {
      pageName: "Our Services",
    },
    {
      pageName: "Our Gallery",
    },
    {
      pageName: "FAQs",
    },
  ];
  return (
    <Flex
      pos="sticky"
      top={0}
      bg="#fff"
      zIndex={999}
      px={8}
      py={4}
      borderBottom="1px solid"
      borderColor="secondary.400"
      justify="space-between"
      alignItems="center"
    >
      <AppLogo
        logoHeight={25}
        logoWidth={35}
        appNameProps={{ fontSize: "32px" }}
      />
      <Flex gap={8} align="center">
        {NavItems.map(({ pageName }, i) => {
          return (
            <Text
              key={i}
              cursor="pointer"
              fontSize="18px"
              fontWeight="medium"
              color={"secondary.500"}
            >
              {pageName}
            </Text>
          );
        })}
      </Flex>
      <Button
        background="secondary.600"
        color="contrast.200"
        rounded="full"
        px="5"
        _hover={{
          background: "secondary.500",
          color: "contrast.200",
        }}
      >
        Contact Us
      </Button>
    </Flex>
  );
}
