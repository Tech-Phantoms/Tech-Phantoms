import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import Announcements from "./components/Announcements";
import colors from "../../colors";
import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts";
import ROUTES from "../../routes";
import SpecialBanner from "./components/SpecialBanner";
import Hashtags from "./components/Hashtags";
import LandingContent from "./components/LandingContent";

const LandingPage = () => {
  return (
    <Box bg={colors.primaryDark} pt="4vh">
      <Flex color="white">
        <Box flex="3" bg={colors.primaryDark} height="96vh">
          <Flex direction="column">
            <Box ml={6}>
              <img src="/img/logo.svg" alt="Logo" width="40px" />
            </Box>
            <Announcements />
            <Box
              style={{ position: "fixed", bottom: 20, left: 0 }}
              ml={6}
              flexGrow={1}
            >
              <Flex direction="row" mb={5}>
                <Box mr={4} h="fit-content">
                  <a href={ROUTES.socials.twitter}>
                    <img alt="twitter" src="/img/twitter.svg" />
                  </a>
                </Box>
                <Box>
                  <a href={ROUTES.socials.github}>
                    <img alt="github" src="/img/github.svg" />
                  </a>
                </Box>
              </Flex>
              <Text color={colors.headings}>Staff and Contact</Text>
              <Text color={colors.headings}>Events and Streaming</Text>
            </Box>
          </Flex>
        </Box>

        <Box
          flex="6"
          bg={colors.primaryDark}
          height="96vh"
          justifyItems="center"
        >
          <LandingContent />
        </Box>
        <Box flex="3" bg={colors.primaryDark} height="96vh">
          <Flex direction="column">
            <SpecialBanner />
            <FeaturedProducts />
            <Box
              style={{ position: "fixed", bottom: 20, right: 0 }}
              ml={6}
              flexGrow={1}
            >
              <Hashtags />
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
export default LandingPage;
