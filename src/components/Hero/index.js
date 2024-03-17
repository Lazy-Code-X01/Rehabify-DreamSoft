import React from "react";

import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

function Hero() {
  return (
    <Box backgroundColor="#fff">
      <Container
        maxW={{ base: "container.sm", xl: "container.xl" }}
        pt={{ base: "3rem", md: "4.75rem" }}
        pb={{ base: "3rem", xl: "6.25rem" }}
      >
        <Stack
          direction={{ base: "column", xl: "row" }}
          justifyContent={{ base: "start", md: "center", xl: "space-between" }}
          alignItems={{ base: "center", xl: "end" }}
          spacing={{ base: "3rem", xl: "7rem" }}
        >
          {/* Text */}
          <VStack
            alignItems={{ base: "start", md: "center", xl: "start" }}
            textAlign={{ base: "start", md: "center", xl: "start" }}
            spacing="3rem"
          >
            <VStack spacing="1rem">
              <Heading as="h1" size="h1" color="black">
                Your Recovery Journey Starts Here
              </Heading>
              <Text color="black" lineHeight="1.5">
                Find the support, tools and resources to help you regian your
                strength, restore your health and ultimately achieve the vibrant
                and fulfilling life you deserve with Rehabify
              </Text>
            </VStack>
            <Wrap spacing="1.875rem">
              <WrapItem>
                <Button backgroundColor="green" color="white">
                  Get Started
                </Button>
              </WrapItem>
            </Wrap>
          </VStack>

          {/* Image */}
          <Box w="100%" maxW="543px" p={{ base: "1rem", md: "0" }}>
            <Box position="relative">
              <Image src="assets/images/doc.jpg" alt="Hero image" />
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default Hero;
