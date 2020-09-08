import React from 'react';
import { Image,Box,SimpleGrid } from "@chakra-ui/core";
import aboutIcon from '../../assets/landingpage/about.png'
 const LandingMiddle = props =>  {
    return (
        <SimpleGrid columns={{"lg":2,"md":2,"xs":1,"sm":1}} spacing={1} bg="#F2F2F2" padding={10}>
            
         <Box>
         <cemter><Image  src={aboutIcon} width={{lg: "80%", md:"60%", sm:"100%", xs:"100%"}} alt="aboutIcon" /> </cemter>
         </Box>   
        

        <Box paddingRight="10px"  justifyContent="space-around">
         
          <Box textAlign="justify">Armed with a vision to "make people achieve more", Tech Phantoms is a community in cooperation with Microsoft Learn Student Ambassadors, 
              where we aim at developing a teaching-learning environment for everyone who has that charisma for technology. An environment where you can 
              collaborate, share and learn from the experts. </Box>
        </Box>
        </SimpleGrid>
    );
}
export default LandingMiddle ;