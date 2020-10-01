import React from "react";
import { SimpleGrid } from "@chakra-ui/core";
import AnimatedSection from "./animated_section";
import InfoSection from "./info_section";

//importing assets
import { useTheme } from "../themes";

const LandingMiddle = (props) => {
  const { theme } = useTheme();

  return (
    <div>
      <SimpleGrid
        columns={{ lg: 2, md: 2, xs: 1, sm: 1 }}
        spacing={1}
        padding={10}
        bg={theme === "light" ? "#1B1CIE" : "#191F37"}
      >
        <AnimatedSection />
        <InfoSection />
      </SimpleGrid>
    </div>
  );
};
export default LandingMiddle;
