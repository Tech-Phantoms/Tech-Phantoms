// Footer Component
import React from "react";
import { Box, SimpleGrid, Flex, Link } from "@chakra-ui/core";

// importing static assets
import "remixicon/fonts/remixicon.css";
import Logo from "../../assets/logo.svg";

const iconStyle = {
  fontSize: 36,
};

const Footer = (props) => {
  return (
    <>
      {/* Chakra UI Box  */}
      <Box
        p={10}
        style={{ marginTop: "120px", padding: "2rem" }}
        bg="tomato"
        color="white"
      >
        {/* Using SimpleGrid ( 2 Columns (Left Logo and Right Social Handles) ) */}
        <SimpleGrid
          columns={{ xs: 2, sm: 2, md: 3, lg: 3 }}
          spacing={{ sm: 0, xs: 0, md: 1, lg: 1 }}
        >
          {/* Left Logo */}
          <Box>
            <Link target="blank" href="#">
              <img src={Logo} alt="" width="55px" />
            </Link>
          </Box>
          <Box
            display={{ xs: "none", sm: "none", md: "block", lg: "block" }}
            style={{ marginTop: "0", padding: "0.5rem" }}
            bg="tomato"
            color="white"
            style={{ alignContent: "center" }}
          >
            <center style={{ cursor: "default", padding: "1rem" }}>
              {"</>"} with ❤ by Tech Phantoms
            </center>
          </Box>
          {/* Right Social Handles */}
          <Box style={{ alignContent: "end" }}>
            {/* Flex  default flex-direction:row */}
            <Flex>
              {/* Setting flexgrow level 1, assigning equal space to every icon */}
              <Flex flexGrow={{ sm: 0.75, xs: 0.75, md: 1, lg: 1 }} />

              {/* 3 Column Grid for 3 different social media */}
              {/* Note: Adding a social media handle, requires incrementing column={previous_value+1} */}
              <SimpleGrid
                columns={{ sm: 3, xs: 3, md: 3, lg: 3 }}
                spacing={{ sm: 2, xs: 2, md: 4, lg: 4 }}
              >
                {/* GitHub Link */}
                <Box>
                  <Link
                    target="blank"
                    href="https://github.com/Ninja-Developers"
                  >
                    <i class="ri-github-fill" style={iconStyle}></i>
                  </Link>
                </Box>
                {/* Instagram Link */}
                <Box>
                  <Link
                    target="blank"
                    href="https://instagram.com/tech_phantoms"
                  >
                    <i class="ri-instagram-line" style={iconStyle}></i>
                  </Link>
                </Box>
                {/* Medium Link */}
                <Box>
                  <Link target="blank" href="https://medium.com/techphantoms">
                    <i class="ri-medium-line" style={iconStyle}></i>
                  </Link>
                </Box>
              </SimpleGrid>
            </Flex>
            <Flex />
          </Box>
        </SimpleGrid>
      </Box>

      <Box
        display={{ xs: "block", sm: "block", md: "none", lg: "none" }}
        style={{ marginTop: "0", padding: "0.5rem" }}
        bg="white"
        color="tomato"
        style={{ alignContent: "center" }}
      >
        <center style={{ cursor: "default", padding: "1rem" }}>
          {"</>"} with ❤ by Tech Phantoms
        </center>
      </Box>
    </>
  );
};
// default export.
export default Footer;
