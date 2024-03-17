import React from "react";

import { Link } from "react-router-dom";
import { Box, Button, Container, Heading, VStack } from "@chakra-ui/react";

function NotFound() {
  return (
    <Box bg="#f5f5f5">
      <Container
        maxW={{ base: "container.sm", xl: "container.xl" }}
        pt={{ base: "3rem", md: "4.75rem" }}
        pb={{ base: "3rem", xl: "6.25rem" }}
      >
        <VStack spacing="2rem" py="4rem">
          <Heading as="h1" size="h1" color="black">
            Page Not Found...
          </Heading>
          <Button as={Link} to="/" colorScheme="black">
            Back to Homepage
          </Button>
        </VStack>
      </Container>
    </Box>
  );
}

export default NotFound;
