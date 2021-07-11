import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import Announcements from "./components/Announcements";
import Logo from "../../components/Logo";
import FeaturedProducts from "./components/FeaturedProducts";

const LandingPage = () => {
  return (
    <Box bg="#22283C" pt="4vh">
      <Flex color="white">
        <Box flex="3" bg="#22283C" height="96vh">
          <Flex direction="column">
            <Logo style={{ position: "absolute" }} />
            <Announcements />
          </Flex>
        </Box>
        <Box flex="6" bg="#22283C" height="96vh">
          <Text>Box 2</Text>
        </Box>
        <Box flex="3" bg="#22283C" height="96vh">
          <Flex direction="column">
            <FeaturedProducts />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
export default LandingPage;
