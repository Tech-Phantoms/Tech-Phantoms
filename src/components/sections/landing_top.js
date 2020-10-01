import React from "react";
import { useTheme } from "../themes";

//assests
import logo from "../../assets/logo.svg";
import LightMode_techphantoms from "../../assets/LightMode_techphantoms.svg";
import DarkMode_techphantoms from "../../assets/DarkMode_techphantoms.svg";
import LightMode_MLSA_Badge from "../../assets/LightMode_MLSA_Badge.svg";
import DarkMode_MLSA_Badge from "../../assets/DarkMode_MLSA_Badge.svg";
import IG from "../../assets/socialprofiles/instagram.svg";
import GitHub from "../../assets/socialprofiles/github.svg";
import Linkedin from "../../assets/socialprofiles/linkedin.svg";
//css
import { Box, Text, SimpleGrid, Image } from "@chakra-ui/core";

const LandingTop = (props) => {
  const { theme } = useTheme();

  return (
    <div>
      <Box
        padding="10px"
        w="100%"
        mt={{ md: "150px", xs: "5px", sm: "100px", lg: "150px" }}
        mb={["100px", "200px"]}
        color="#ED654B"
      >
        <SimpleGrid columns={{ lg: 2, md: 2, xs: 1, sm: 1 }} spacing={1}>
          <Box>
            <center>
              <Image
                src={logo}
                width={{ lg: "40%", md: "60%", sm: "50%", xs: "55%" }}
                alt="lightlogo"
                py={5}
              />
              <br />
              <SimpleGrid
                display={{ xs: "none", sm: "none", md: "grid", lg: "grid" }}
                width="50%"
                columns={3}
                spacing={1}
                padding={4}
              >
                <a href="https://github.com/ninja-developers">
                  <Image width="50%" src={GitHub} />
                </a>
                <a href="https://instagram.com/tech_phantoms">
                  <Image width="50%" src={IG} />
                </a>
                <a href="https://linkedin.com/company/techphantoms">
                  <Image width="50%" src={Linkedin} />
                </a>
              </SimpleGrid>
            </center>
          </Box>

          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <center>
              <Image
                src={
                  theme === "light"
                    ? LightMode_techphantoms
                    : DarkMode_techphantoms
                }
                width={{ lg: "60%", md: "60", sm: "25", xs: "60%" }}
                alt="LightMode_techphantoms"
              />
            </center>
            <center>
              <Text
                fontSize={["10px", "sm"]}
                p={[2, 4, 10]}
                color={theme === "dark" ? "#D8A752" : "orange"}
              >
                A Technical Community <br /> By
              </Text>
            </center>
            <center>
              <img
                src={
                  theme === "light" ? LightMode_MLSA_Badge : DarkMode_MLSA_Badge
                }
                width={{ lg: "20%", md: "10%", sm: "10%", xs: "10%" }}
                alt="LightMode_MLSA_Badge"
              />
              <SimpleGrid
                display={{ xs: "grid", sm: "grid", md: "none", lg: "none" }}
                width="80%"
                columns={3}
                spacing={1}
                padding={4}
              >
                <a href="https://github.com/ninja-developers">
                  <Image width="50%" src={GitHub} />
                </a>
                <a href="https://instagram.com/tech_phantoms">
                  <Image width="50%" src={IG} />
                </a>
                <a href="https://linkedin.com/company/techphantoms">
                  <Image width="50%" src={Linkedin} />
                </a>
              </SimpleGrid>
            </center>
          </Box>
        </SimpleGrid>
      </Box>
    </div>
  );
};
export default LandingTop;
