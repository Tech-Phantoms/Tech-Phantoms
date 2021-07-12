import React from "react";
import { Box, Text, Center, Heading, Button, Link } from "@chakra-ui/react";
import AnimatedWorker from "./AnimatedWorkers";
import { FaDiscord } from "react-icons/fa";
import OpenCollectiveLogo from "./OpenCollectiveLogo";
import colors from "../../../colors";
function LandingContent() {
  return (
    <Center flexDirection="column">
      <AnimatedWorker height="30vh" />
      <Heading as="b" color={colors.headings} size="3xl">
        Tech Phantoms
      </Heading>
      <Box textAlign="center">
        <Text fontSize="md" m={4}>
          We are an open source community,
          <br /> and we build tools for developers and students.
        </Text>
        <Text fontSize="md" textAlign="center" m={4}>
          The thing which makes us unique is, we take our
          <br /> peer from A Level -{">"} Z Level through.
          <br /> Learning By Doing.
        </Text>
      </Box>
      <Link href="https://discord.apihacks.co" isExternal>
        <Button
          borderWidth={1}
          borderColor="white"
          bg={colors.secondaryDark}
          w="fit-content"
          h="5vh"
        >
          <Text pr={2}>Join us on</Text>
          <FaDiscord /> <Text pl={2}>Discord</Text>
        </Button>
      </Link>

      <Text color="white" fontSize="lg" m={4}>
        Liked our work ? Support us at
      </Text>
      <Link href="https://opencollective.com/techphantoms" isExternal>
        <Button borderWidth={1} bg="white" w="fit-content" h="fit-content">
          <OpenCollectiveLogo />
        </Button>
      </Link>
    </Center>
  );
}

export default LandingContent;
