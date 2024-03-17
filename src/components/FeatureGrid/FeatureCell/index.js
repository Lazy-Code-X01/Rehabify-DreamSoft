import React from "react";

import PropTypes from "prop-types";
import { Box, Heading, Text, VStack, Image } from "@chakra-ui/react";

function FeatureCell({ src, no, heading, text, ...props }) {
  return (
    <VStack alignItems="start" spacing="1rem" {...props}>
      <Box p={{ base: "1rem", md: "0" }}>
        <Image borderRadius="10px" src={src} alt={src} />
      </Box>
      <Text color="green" fontSize="1.5rem">
        {no}
      </Text>
      <Heading as="h3" size="h3">
        {heading}
      </Heading>
      <Text>{text}</Text>
    </VStack>
  );
}

FeatureCell.propTypes = {
  no: PropTypes.string,
  src: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
};

export default FeatureCell;
