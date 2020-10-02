import React from "react";
import { Text, Image, Box, SimpleGrid } from "@chakra-ui/core";

//importing assets
import bottomIcon from "../../assets/landing_page/pair_programming.svg";

const LandingBottom = (props) => {
  return (
    <SimpleGrid
      d="flex"
      flexDirection={{
        xs: "column-reverse",
        sm: "column-reverse",
        md: "row",
        lg: "row",
      }}
      columns={{ lg: 2, md: 2, xs: 1, sm: 1 }}
      spacing={1}
      padding={10}
    >
      <Box
        paddingRight="20px"
        justifyContent="space-around"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Text fontSize="3xl" py={4}>
          {" "}
          We{" "}
          <span role="img" aria-label="Heart">
            ❤️
          </span>{" "}
          Open Source{" "}
        </Text>
        <Box
          textAlign="justify"
          // maxWidth={{ lg: "70%", md: "80%" }}
        >
          Tech Phantoms was developed with a mission to faster learning of open
          source technologies and be an exclusive technical community that young
          developers seek to pave their way towards Open Source. To this end we
          provide mentoring, virtual collaboration space and and resources for
          young creative minds to nurture their skills and try their hands on
          some new skills as well under the guidance and supervision of our tech
          experts. It is a place where people passionate about
          technology, collaborate and aim at enhancing their knowledge about the
          latest developer technologies and use them creatively and ethically.
          We consistently conduct series of workshops, events, programs and
          services which will help the academics and research world.{" "}
        </Box>
      </Box>
      <Box
        minWidth="40%"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <center>
          <Image
            src={bottomIcon}
            width={{ lg: "80%", md: "100%", sm: "90%", xs: "90%" }}
            py={4}
            alt="aboutIcon"
          />{" "}
        </center>
      </Box>
    </SimpleGrid>
  );
};
export default LandingBottom;
