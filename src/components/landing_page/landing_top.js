import React from 'react';
//assests
import logo from '../../assets/logo.svg';
import LightMode_techphantoms from '../../assets/LightMode_techphantoms.svg';
import LightMode_MLSA_Badge from '../../assets/LightMode_MLSA_Badge.svg';
//css
import { Box,Flex } from "@chakra-ui/core";

 const LandingTop = props =>  {
    return (
      <div>
        <Box  w="100%" p={10} color="#ED654B">
            <Flex align="center">
                <Box  w="50%" >
                  <center><img src={logo} width="60%" alt="lightlogo" /></center>   
              </Box>
  
              <Box  w="50%" >
                  <center><img src={LightMode_techphantoms} width="60%"  alt="LightMode_techphantoms"/></center>
                  <center><Box p={10}>A Technical Community <br/> By</Box></center>
                  <center><img src={LightMode_MLSA_Badge} width="30%" alt="LightMode_MLSA_Badge" /></center>
  
              </Box> 
           </Flex>
        </Box>
       </div>
    );
}
export default LandingTop ;