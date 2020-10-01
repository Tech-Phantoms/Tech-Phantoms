import React from "react";
import { Text, Image, Box, SimpleGrid } from "@chakra-ui/core";

//importing assets
import aboutIcon from "../../assets/landing_page/community.svg";
import { useTheme } from "../themes"

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
        <Box>
          <cemter>
            <Image
              src={aboutIcon}
              width={{ lg: "80%", md: "60%", sm: "100%", xs: "100%" }}
              alt="aboutIcon"
            />{" "}
          </cemter>
        </Box>

        <Box paddingRight="10px" justifyContent="space-around">
        <Text fontSize="3xl" py={2} color={theme === "light" ? "tomato" : "#191F37"}>
           <b> V I S I O N</b>
          </Text>
          <Text fontSize="3xl" py={4}>
            Real growth happens when all of us grow together. We rise by lifting
            others.
          </Text>
          <Box textAlign="justify">
            Armed with a vision to "make people achieve more", Tech Phantoms is
            a community in co-operation with Microsoft Learn Student Ambassadors,
            where we aim at developing a teaching-learning environment for
            everyone who has that charisma for technology.
            With a clear vision to come up as a community where young developers kick start
             their journey towards Open Source.We strive towards building a learn by doing 
             environment where the learners are their own teachers and peer mentoring is promoted.
             
          </Box>
        </Box>
      </SimpleGrid>
    </div>
  );
};
export default LandingMiddle;
