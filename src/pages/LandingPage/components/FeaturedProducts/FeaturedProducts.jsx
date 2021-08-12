import React from "react";
import { Box, Center, Flex, Heading, VStack } from "@chakra-ui/react";
import colors from "../../../../colors";
import ProjectCard from "./components/ProjectCard";
import { projects } from "./projects";
function FeaturedProducts() {
  return (
    <Center>
      <Box
        borderWidth="1px"
        borderColor={colors.borderStroke}
        bg={colors.secondaryDark}
        h="50vh"
        w="85%"
        mt={6}
      >
        <Flex direction="column">
          <Center>
            <Heading m={2} as="h4" size="md" color={colors.headings}>
              Featured Products
            </Heading>
          </Center>
          <Center p={2}>
            <VStack overflow="scroll" h="40vh" w="100%">
              {projects.map((val) => {
                return (
                  <ProjectCard
                    name={val.name}
                    logo={val.logo}
                    projectLink={val.projectLink}
                  />
                );
              })}
            </VStack>
          </Center>
        </Flex>
      </Box>
    </Center>
  );
}

export default FeaturedProducts;
