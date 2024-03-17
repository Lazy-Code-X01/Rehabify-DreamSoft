import React from "react";

import {
  Box,
  Container,
  Divider,
  Stack,
  Heading,
  Text,
  Button,
  Wrap,
  WrapItem,
  VStack,
  Center,
} from "@chakra-ui/react";

function Licensed() {
  return (
    <Box
      position="relative"
      bgImage="url('assets/images/doc.jpg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      mb={20}
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        w="full"
        h="full"
        bg="black"
        opacity={0.5}
        bgBlendMode="multiply"
      />

      <Container
        maxW={{ base: "container.sm", xl: "container.xl" }}
        py={{ base: "2rem", md: "4rem" }}
      >
        <VStack spacing={{ base: "3rem", md: "6rem" }} align="center">
          {/* Heading */}
          <Heading size="h1" zIndex={1} color={"#fff"} align="center">
            Are You a Licensed Therapist ?
          </Heading>

          <Center
            position="relative"
            zIndex={1}
            textAlign="center"
            display="flex"
            justifyContent="center"
            color="#fff"
          >
            <Text fontSize="19px">
              Rehabify offers a unique dynamic team of healthcare providers
              dedicated to enhancing the lives of patients by delivering
              effective, personalized rehabilitation care through innovative and
              convenient methods.
            </Text>
          </Center>

          <Wrap spacing="1.875rem">
            <WrapItem>
              <Button backgroundColor="green" color="white">
                Learn More
              </Button>
            </WrapItem>
          </Wrap>
        </VStack>
      </Container>
      <Divider borderColor="gray.400" />
    </Box>
  );
}

export default Licensed;
