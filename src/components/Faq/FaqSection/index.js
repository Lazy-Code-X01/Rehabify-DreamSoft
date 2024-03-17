import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQSection = ({ faqs }) => {
  return (
    <Accordion defaultIndex={[0]}>
      {faqs.map((faq, index) => (
        <AccordionItem key={index}>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    {faq.question}
                  </Box>
                  {isExpanded ? (
                    <FaMinus fontSize="12px" />
                  ) : (
                    <FaPlus fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>{faq.answer}</AccordionPanel>
            </>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FAQSection;
