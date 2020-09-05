import React from 'react';
//assests
import logo from '../../../assets/logo.svg';
import LightMode_techphantoms from '../../../assets/LightMode_techphantoms.svg';
import LightMode_MLSA_Badge from '../../../assets/LightMode_MLSA_Badge.svg';
//css
import { Box,Flex,Text } from "@chakra-ui/core";

 const Landing_top = props =>  {
    return (
      <div>
        <Box bg="#F7F7F7" w="100%" p={10} color="#ED654B">
            <Flex align="center">
                <Box  w="50%" >
                  <center><img src={logo} width="60%"  /></center>   
              </Box>
  
              <Box  w="50%" >
                  <center><img src={LightMode_techphantoms} width="60%" /></center>
                  <center><Box p={10}>A Technical Community <br/> By</Box></center>
                  <center><img src={LightMode_MLSA_Badge} width="30%"  /></center>
  
              </Box> 
           </Flex>
        </Box>
       </div>
    );
}
export default Landing_top ;