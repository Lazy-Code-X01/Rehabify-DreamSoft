import React from "react";

import { Box, Container, Image, Wrap, WrapItem } from "@chakra-ui/react";

import partnerLogos from "assets/json/partner-logos.json";
import { Text } from "@chakra-ui/react/dist/chakra-ui-react.cjs";

function LogoCloud() {
  return (
    <Box bg="#f5f5f5">
      <Container
        maxW={{ base: "container.sm", xl: "container.xl" }}
        py={{ base: "3.125rem", md: "3.25rem" }}
      >
        <Text
          size="h1"
          color="darkGreen"
          textAlign={"center"}
          fontWeight={"extrabold"}
          fontSize={"30px"}
          mb={"50px"}
        >
          Our Patners
        </Text>
        <Wrap
          spacing={{ base: "3rem", md: "3rem" }}
          justify={{ base: "center", xl: "space-between" }}
        >
          {partnerLogos.map((logo, index) => (
            <WrapItem key={index}>
              <Image
                src={logo}
                w="100%"
                h={["16px", "20px", "24px", "28px", "32px"]}
              />
            </WrapItem>
          ))}
        </Wrap>
      </Container>
    </Box>
  );
}

export default LogoCloud;
