import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import colors from "../../../colors";
function Announcements() {
  return (
    <Box
      borderWidth="1px"
      borderColor={colors.borderStroke}
      bg={colors.secondaryDark}
      h="50vh"
      ml={6}
      mt={6}
      w="70%"
    >
      <Flex>
        <Heading m={4} as="h4" size="md" color={colors.headings}>
          Announcements
        </Heading>
      </Flex>
    </Box>
  );
}

export default Announcements;
