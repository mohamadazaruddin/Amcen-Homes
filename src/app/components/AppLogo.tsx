import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { appLogoProps } from "../services/types";

export default function AppLogo({
  logoHeight,
  logoWidth,
  appNameProps,
}: appLogoProps) {
  return (
    <Flex gap={2.5} align="center">
      <Image
        alt=""
        src="/images/appLogo.png"
        width={logoWidth}
        height={logoHeight}
      />
      <Text {...appNameProps}>
        <Box as={"span"} color={"primary.500"}>
          A
        </Box>
        mcen{" "}
        <Box as={"span"} color={"primary.500"}>
          H
        </Box>
        omes
      </Text>
    </Flex>
  );
}
