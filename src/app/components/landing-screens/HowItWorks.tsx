import {
  Box,
  Text,
  Grid,
  GridItem,
  Flex,
  Heading,
  Image,
  Button,
} from "@chakra-ui/react";
import React from "react";

export default function HowItWorks() {
  const StepNumber = ({ step }: any) => {
    return (
      <Flex
        h="40px"
        w="40px"
        rounded="full"
        border="1px solid"
        alignItems="center"
        fontSize="32px"
        color="#373737"
        borderColor="#373737"
        justifyContent="center"
      >
        <Box as="span" mt="-8px">
          {step}
        </Box>
      </Flex>
    );
  };

  const StepContent = ({ title, description, cta, wrapperProps }: any) => {
    return (
      <Box {...wrapperProps}>
        <Heading fontSize="18px" color="#373737">
          {title}
        </Heading>
        <Text fontSize="14px" color="#373737">
          {description}
        </Text>
        {cta && cta}
      </Box>
    );
  };
  return (
    <Box py="60px" px="10">
      <Text fontSize="40px" fontWeight="medium" color="secondary.600">
        How it Works ?
      </Text>

      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem
          colSpan={2}
          bg="#F8F4F3"
          p={5}
          rounded="sm"
          display="flex"
          gap="5"
        >
          <Box>
            <StepNumber step={1} />
            <StepContent
              title="Raise a request"
              description="Raise a house construction service request. Our team will get in touch with you to understand your requirements in more detail."
              wrapperProps={{ mt: "8" }}
            />
          </Box>
          <Image src="/images/steps/meet.png" h="150px" w="150px" />
        </GridItem>
        <GridItem
          colSpan={2}
          bg="#F8F4F3"
          p={5}
          rounded="sm"
          display="flex"
          gap="5"
        >
          <Box>
            <StepNumber step={2} />
            <StepContent
              title="Meet our Expert"
              description="Experts will guide you in selecting the right package for house construction and solve any queries that you may have."
              wrapperProps={{ mt: "8" }}
            />
          </Box>
          <Image src="/images/steps/chairs.png" h="150px" w="150px" />
        </GridItem>
        <GridItem
          rowSpan={2}
          colSpan={1}
          bg="#F8F4F3"
          p={5}
          rounded="sm"
          display="flex"
          gap="5"
          flexDir="column"
        >
          <StepNumber step={3} />
          <Image
            src="/images/steps/booking.png"
            h="150px"
            w="150px"
            mx="auto"
          />

          <StepContent
            title="Meet our Expert"
            description="Good to go ! You pay 2% of the estimated project cost as the booking amount to start the house construction"
            wrapperProps={{ mt: "8" }}
          />
        </GridItem>
        <GridItem
          colSpan={2}
          bg="#F8F4F3"
          p={5}
          rounded="sm"
          display="flex"
          gap="5"
        >
          <Box>
            <StepNumber step={4} />
            <StepContent
              title="Meet our Expert"
              description="Our architects will provide exhaustive drawings and designs of your home construction till you are completely satisfied."
              wrapperProps={{ mt: "8" }}
            />
          </Box>
          <Image src="/images/steps/designs.png" h="150px" w="150px" />
        </GridItem>
        <GridItem
          colSpan={2}
          bg="#F8F4F3"
          p={5}
          rounded="sm"
          display="flex"
          gap="5"
        >
          <Box>
            <StepNumber step={5} />
            <StepContent
              wrapperProps={{ mt: "8" }}
              title="Meet our Expert"
              description="To ensure absolute trust, Amcen Homes provides an escrow model where you transfer the amount for stage of the project."
            />
          </Box>
          <Image src="/images/steps/transact.png" h="150px" w="150px" />
        </GridItem>
        <GridItem
          rowSpan={2}
          colSpan={5}
          bg="#F8F4F3"
          p={5}
          rounded="sm"
          display="flex"
          justifyContent={"space-between"}
        >
          <Box>
            <StepNumber step={6} />
            <StepContent
              title="Meet our Expert"
              description={
                <>
                  The last and final stage. We make sure you are well settled in
                  your newly built home. <br />
                  Our journey together doesn't end here. We provide 10 years of
                  warranty.
                </>
              }
              cta={
                <Button
                  background="secondary.600"
                  color="contrast.200"
                  rounded="full"
                  fontSize="sm"
                  px="5"
                  mt="5"
                  _hover={{
                    background: "secondary.500",
                    color: "contrast.200",
                  }}
                  py="2.5"
                >
                  Raise a Request
                </Button>
              }
              wrapperProps={{ mt: "8" }}
            />
          </Box>
          <Image src="/images/banner.png" h="200px" w="350px" />
        </GridItem>
      </Grid>
    </Box>
  );
}
