import React from 'react';
//assests
import logo from '../../../assets/logo.svg';
import DarkMode_techphantoms from '../../../assets/DarkMode_techphantoms.svg';
import DarkMode_MLSA_Badge from '../../../assets/DarkMode_MLSA_Badge.svg';
//css

import { Box,Flex,Text } from "@chakra-ui/core";


 const Landing_top = props =>  {
    return (
      <div>
        <Box bg="#203A61" w="100%" p={10} color="#FEC761">
            <Flex align="center">
                <Box  w="50%" >
                  <center><img src={logo} width="60%"  /></center>   
              </Box>
  
              <Box  w="50%" >
                  <center><img src={DarkMode_techphantoms} width="60%" /></center>
                  <center><Box p={10}>A Technical Community <br/> By</Box></center>
                  <center><img src={DarkMode_MLSA_Badge} width="30%"  /></center>
  
              </Box> 
           </Flex>
        </Box>
      </div>
    );
}
export default Landing_top ;