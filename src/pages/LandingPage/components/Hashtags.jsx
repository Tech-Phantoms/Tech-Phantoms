import { Box, Text } from "@chakra-ui/react";
import React from "react";
import colors from "../../../colors";

function Hashtags() {
  return (
    <Box h="fit-content" mr={6}>
      <Text align="right">
        <Text fontSize="xl">Our Social Hashtags</Text>
        <Text fontSize="2xl" fontWeight="bold" color={colors.headings}>
          #techphantoms
        </Text>
        <Text fontSize="2xl" fontWeight="bold" color={colors.headings}>
          #apihacks
        </Text>
      </Text>
    </Box>
  );
}

export default Hashtags;
