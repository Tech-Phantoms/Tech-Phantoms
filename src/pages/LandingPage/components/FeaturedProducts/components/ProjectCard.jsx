import { Box, Heading, HStack, Image, Link } from "@chakra-ui/react";
import React from "react";
import colors from "../../../../../colors";

function ProjectCard({ logo, name, projectLink }) {
  return (
    <Box
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      p="2"
      w="100%"
      bg={colors.tertiaryDark}
    >
      <Link href={projectLink}>
        <HStack spacing="5">
          <Image src="/img/logo.svg" alt="Logo" width="40px" />

          <Heading as="h5" size="sm" isTruncated>
            {name}
          </Heading>
        </HStack>
      </Link>
    </Box>
  );
}

export default ProjectCard;
