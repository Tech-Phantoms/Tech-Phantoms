import React, { useEffect, useRef } from "react";
import { Text, Button, Box, SimpleGrid, Link } from "@chakra-ui/core";

//importing assets
import lottie from "lottie-web";

const InfoSection = (props) => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../assets/404/astronaut.json"),
    });
  }, []);

  return (
    <div>
      <SimpleGrid
        columns={{ lg: 2, md: 2, xs: 1, sm: 1 }}
        spacing={1}
        padding={10}
        bg={"#1B1CIE"}
      >
        <Box>
          <cemter>
            <div
              className="container"
              ref={container}
              style={{
                width: "58%",
                marginLeft: "17%",
              }}
            ></div>
          </cemter>
        </Box>

        <Box paddingRight="10px" justifyContent="space-around" marginTop="10%">
          <Text fontSize="6xl" py={2} color={"tomato"}>
            <b>Ooopss!</b>
          </Text>
          <Text fontSize="2xl" py={4}>
            The page you are looking for might have been removed, <br></br>
            had it's name changes, or is temporarily unavailable.
          </Text>
          <Box textAlign="justify" alignContent="center">
            <Link href="/">
              <Button
                title="Go Back"
                width="20%"
                background="#d6e0f0"
                padding="22px"
              >
                Go Back
              </Button>
            </Link>
          </Box>
        </Box>
      </SimpleGrid>
    </div>
  );
};
export default InfoSection;
