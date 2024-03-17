import React from "react";

import {
  Container,
  Button,
  Wrap,
  Flex,
  WrapItem,
  Heading,
  Text,
} from "@chakra-ui/react";

import FAQSection from "./FaqSection";
// faq data
const faqs = [
  {
    question: "Can i trust Rehabify with my data ?",
    answer:
      "Yes you can we use DNS domain data blocker to adversely protect your data against strong viruses and hackers with our state of the art database against hackers and scammers .",
  },
  {
    question: "Can i trust Rehabify with my data ?",
    answer:
      "Yes you can we use DNS domain data blocker to adversely protect your data against strong viruses and hackers with our state of the art database against hackers and scammers .",
  },
  {
    question: "Can i trust Rehabify with my data ?",
    answer:
      "Yes you can we use DNS domain data blocker to adversely protect your data against strong viruses and hackers with our state of the art database against hackers and scammers .",
  },
  {
    question: "Can i trust Rehabify with my data ?",
    answer:
      "Yes you can we use DNS domain data blocker to adversely protect your data against strong viruses and hackers with our state of the art database against hackers and scammers .",
  },
];

function Faq() {
  return (
    <Container
      maxW={{ base: "container.sm", xl: "container.xl" }}
      py={{ base: "2rem", md: "4rem" }}
    >
      <Flex
        spacing={{ sm: "1rem", md: "6rem" }}
        flexDirection={{ base: "column", md: "row" }}
        align="space-between"
      >
        <Wrap spacing="1.875rem" flex={1} direction={"column"} mb={5}>
          <WrapItem>
            <Heading as="h2">Frequently asked questions</Heading>
          </WrapItem>
          <WrapItem direction="column">
            <Text as="b" fontSize="19px">
              Have Other Questions
            </Text>{" "}
            <br />
          </WrapItem>
          <WrapItem>
            <Button backgroundColor="green" color="white">
              Contact Us
            </Button>
          </WrapItem>
        </Wrap>

        <Wrap spacing="1.875rem" flex={1}>
          <WrapItem>
            <FAQSection faqs={faqs} />
          </WrapItem>
        </Wrap>
      </Flex>
    </Container>
  );
}

export default Faq;
