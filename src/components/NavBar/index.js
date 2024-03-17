import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import { Box, Button, Container, HStack, Link, Show } from "@chakra-ui/react";

import LogoBlack from "assets/images/brand-logo/logo.svg";
import MobileNav from "./MobileNav";

function NavBar() {
  const [navLinks] = useState([
    {
      name: "Patients",
      path: "/",
    },
    {
      name: "Therapist",
      path: "/",
    },
    {
      name: "Symptom Checker",
      path: "/",
    },
    {
      name: "About us ",
      path: "/",
    },
  ]);

  return (
    <Box bg="#f5f5f5">
      <Container maxW="container.xl" py="1.5rem">
        <HStack justifyContent="space-between" spacing="6rem">
          {/* Left links */}
          <HStack spacing="6rem">
            <Link as={NavLink} to="/">
              <LogoBlack />
            </Link>
            <Show above="lg">
              <HStack spacing="5.25rem">
                {navLinks.map((link) => {
                  return (
                    <Button
                      key={`nav${link.path}`}
                      as={NavLink}
                      to={link.path}
                      variant="link"
                      colorScheme="blackAlpha"
                      color="black"
                    >
                      {link.name}
                    </Button>
                  );
                })}
              </HStack>
            </Show>
          </HStack>

          {/* Right Links */}
          <Show above="lg">
            <HStack spacing="1.125rem">
              <Button as={NavLink} to="/" bg="green" color="white">
                Log In
              </Button>
            </HStack>
          </Show>

          {/* Mobile menu */}
          <MobileNav links={navLinks} />
        </HStack>
      </Container>
    </Box>
  );
}

export default NavBar;
