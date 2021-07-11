import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
function FeaturedProducts() {
  return (
    <Box borderWidth="1px" color="white" h="50vh" m={6}>
      <Flex>
        <Text m={4}>Featured Projects</Text>
      </Flex>
    </Box>
  );
}

export default FeaturedProducts;
