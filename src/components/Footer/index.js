import React from "react";

import { Box, Container, Heading, Link, Stack, Text } from "@chakra-ui/react";
import { FacebookLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";

import LogoBlack from "assets/images/brand-logo/logo.svg";
import { Flex, Wrap } from "@chakra-ui/react/dist/chakra-ui-react.cjs";

function Footer() {
  return (
    <Box bg="gray.100">
      <Container maxW={{ base: "container.sm", xl: "container.xl" }} py="5rem">
        <Flex
          direction={{ base: "column", sm: "row" }}
          spacing={{ base: "1rem" }}
          justify={"space-between"}
        >
          <Stack direction="column" spacing="1.5rem" mb={{ base: "3rem" }}>
            <Box py="0.25rem">
              <LogoBlack />
            </Box>
            <Text>2 Rehab street, Lekki, Lagos</Text>
            <Text>Hello@rehabify.com</Text>
            <Text>+234 800 000 0000</Text>
            <Stack direction="row" spacing="1rem">
              <Link href="https://instagram.com/">
                <InstagramLogo size={20} />
              </Link>
              <Link href="https://facebook.com/">
                <FacebookLogo size={20} weight="fill" />
              </Link>
              <Link href="https://linkedin.com/">
                <LinkedinLogo size={20} weight="fill" />
              </Link>
            </Stack>
          </Stack>

          <Stack direction="column" spacing="1.5rem" mb={{ base: "3rem" }}>
            <Heading as="h3" size="h3">
              Products
            </Heading>
            <Text>For Patients</Text>
            <Text>For Therapist</Text>
          </Stack>

          <Stack direction="column" spacing="1.5rem" mb={{ base: "3rem" }}>
            <Heading as="h3" size="h3">
              Become a Therapist
            </Heading>
            <Text>Apply as Physiotherapist</Text>
            <Text>Apply as Pathologist</Text>
            <Text>Apply as Psychatrist</Text>
          </Stack>

          <Stack direction="column" spacing="1.5rem">
            <Heading as="h3" size="h3">
              Company
            </Heading>
            <Text>About Us</Text>
            <Text>Contact Us</Text>
            <Text>Careers</Text>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
}

export default Footer;
