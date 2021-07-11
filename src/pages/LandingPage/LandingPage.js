import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import Announcements from "./components/Announcements";
import Logo from "../../components/Logo";
import colors from "../../colors";
import FeaturedProducts from "./components/FeaturedProducts";
import ROUTES from "../../routes";

const LandingPage = () => {
  return (
    <Box bg={colors.primaryDark} pt="4vh">
      <Flex color="white">
        <Box flex="3" bg={colors.primaryDark} height="96vh">
          <Flex direction="column">
            <Box ml={6}>
              <img src="/img/logo.svg" width="40px" />
            </Box>
            <Announcements />
            <Box
              style={{ position: "fixed", bottom: 20, left: 0 }}
              ml={6}
              flexGrow={1}
            >
              <Flex direction="row" mb={5}>
                <Box mr={4}>
                  <a href={ROUTES.socials.twitter}>
                    <img src="/img/twitter.svg" />
                  </a>
                </Box>
                <Box>
                <a href={ROUTES.socials.github}>
                  <img src="/img/github.svg" />
                  </a>
                </Box>
              </Flex>
              <Text color={colors.headings}>Staff and Contact</Text>
              <Text color={colors.headings}>Events and Streaming</Text>
            </Box>
          </Flex>
        </Box>
        <Box flex="6" bg={colors.primaryDark} height="96vh">
          <Text>Box 2</Text>
        </Box>
        <Box flex="3" bg={colors.primaryDark} height="96vh">
          <Flex direction="column">
            <FeaturedProducts />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
export default LandingPage;
