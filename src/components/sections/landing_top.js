import React from 'react';
//assests
import logo from '../../assets/logo.svg';
import LightMode_techphantoms from '../../assets/LightMode_techphantoms.svg';
import LightMode_MLSA_Badge from '../../assets/LightMode_MLSA_Badge.svg';
//css
import { Box, Text, SimpleGrid } from "@chakra-ui/core";

const LandingTop = props => {
  return (
    <div>
      <Box w="100%" mt={["100px", "200px"]} mb={["100px", "200px"]} color="#ED654B">
        <SimpleGrid columns="2" spacing={4}>
          <Box >
            <center><img src={logo} width={["40%", null, "80%"]} alt="lightlogo" /></center>
          </Box>

          <Box >
            <center><img src={LightMode_techphantoms} width={["40%", "80%"]} alt="LightMode_techphantoms" /></center>
            <center><Text fontSize={["1px", "sm"]} p={[2, 4, 10]}>A Technical Community <br /> By</Text></center>
            <center><img src={LightMode_MLSA_Badge} width={["40%", "40%"]} alt="LightMode_MLSA_Badge" /></center>

          </Box>
        </SimpleGrid>
      </Box>
    </div>
  );
}
export default LandingTop;