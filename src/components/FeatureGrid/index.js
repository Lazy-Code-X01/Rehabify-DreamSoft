import React from "react";

import { Container, Heading, SimpleGrid, VStack } from "@chakra-ui/react";

import FeatureCell from "./FeatureCell";

const features = [
  {
    no: "01",
    heading: "CHeck Symptoms",
    text: "Our diagnois AI will prompt you to choose the affected body part related to your symptoms",
    src: "assets/images/doc.jpg",
  },
  {
    no: "02",
    heading: "Get Diagnosis ",
    text: "In few seconds, you will get an accurate clinical report based on your signs and symptoms.",
    src: "assets/images/doc.jpg",
  },
  {
    no: "03",
    heading: "Get Connected ",
    text: "After receiving a clinical impression, you can connect with a verified Physiotherapist on the platform",
    src: "assets/images/doc.jpg",
  },
];

function FeatureGrid() {
  return (
    <Container
      maxW={{ base: "container.sm", xl: "container.xl" }}
      py={{ base: "2rem", md: "4rem" }}
      // backgroundColor='#f5f5f5'
    >
      <VStack spacing={{ base: "3rem", md: "5rem" }}>
        {/* Heading */}
        <Heading size="h1">How it works</Heading>

        {/* Grid */}
        <SimpleGrid
          columns={{ base: 1, md: 2, xl: 3 }}
          spacing={{ base: "3rem", md: "5rem", xl: "2rem" }}
          maxW="57rem"
        >
          {features.map((feature, index) => (
            <FeatureCell key={`feature-${index}`} {...feature} />
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
}

export default FeatureGrid;
