import React from 'react';
//assests
import logo from '../../../assets/logo.svg';
import DarkMode_techphantoms from '../../../assets/DarkMode_techphantoms.svg';
import DarkMode_MLSA_Badge from '../../../assets/DarkMode_MLSA_Badge.svg';
//css

import { Box,Flex } from "@chakra-ui/core";


 const LandingTop = props =>  {
    return (
      <div>
        <Box bg="#203A61" w="100%" p={10} color="#FEC761">
            <Flex align="center">
                <Box  w="50%" >
                  <center><img src={logo} width="60%" alt="dark_logo" /></center>   
              </Box>
  
              <Box  w="50%" >
                  <center><img src={DarkMode_techphantoms} width="60%" alt="DarkMode_techphantoms" /></center>
                  <center><Box p={10}>A Technical Community <br/> By</Box></center>
                  <center><img src={DarkMode_MLSA_Badge} width="30%"  alt="DarkMode_MLSA_Badge"/></center>
  
              </Box> 
           </Flex>
        </Box>
      </div>
    );
}
export default LandingTop ;