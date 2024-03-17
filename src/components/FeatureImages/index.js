import React from "react";

import { Box, Container, VStack } from "@chakra-ui/react";
import Feature from "./Feature";

function FeatureImages() {
  return (
    <Box bg="white">
      <Container
        maxW={{ base: "container.sm", xl: "container.xl" }}
        py={{ base: "3rem", md: "6.5rem" }}
      >
        <VStack spacing={{ base: "3rem", md: "6.5rem" }}>
          <Feature
            heading="Expert Guidiance from Certified Physiotherapist"
            text="Find the support, tools, and resources to help you regain your strength, restore your health, and untimely achieve the vibrant and fulfilling life you deserve with Rehabify. Find the support, tools and resources to help you regain your strength, restore your health, and ultimately"
            imageSrc="assets/images/doc.jpg"
            imageAlt="Feature Image 1"
            to="/"
          ></Feature>

          <Feature
            heading="Personalized Care MAade for You and Your Preferences"
            text="The Screeno ecosystem is designed to help you generate profit. Set up complete sales and marketing funnels with ease using the Screeno built-in marketing tools and integrations. Generate leads and convert your audience into paying subscribers, at no extra cost."
            imageSrc="assets/images/doc.jpg"
            imageAlt="Feature Image 2"
            reverse={true}
            to="/"
          ></Feature>
        </VStack>
      </Container>
    </Box>
  );
}

export default FeatureImages;
