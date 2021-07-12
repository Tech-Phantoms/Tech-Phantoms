import { Box, Heading, HStack, Image } from "@chakra-ui/react";
import React from "react";
import colors from "../../../../../colors";

function ProjectCard() {
  return (
    <Box
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      p="2"
      w="100%"
      bg={colors.tertiaryDark}
    >
      <HStack spacing="5">
        <Image src="/img/logo.svg" alt="Logo" width="40px" />

        <Heading as="h5" size="sm" isTruncated>
          OpenSourcer
        </Heading>
      </HStack>
    </Box>
  );
}

export default ProjectCard;
