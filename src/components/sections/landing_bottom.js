import React from 'react';
import { Image,Box,SimpleGrid } from "@chakra-ui/core";
import bottomIcon from '../../assets/landingpage/Final.png'
 const LandingBottom = props =>  {
    return (
        <SimpleGrid columns={{"lg":2,"md":2,"xs":1,"sm":1}} spacing={1} padding={10}>
            
        <Box paddingRight="10px"  justifyContent="space-around">
         
         <Box textAlign="justify" >We commit to becoming a place where people, passionate about technology, collaborate and aim at enhancing their
          knowledge about the latest developer technologies and use them creatively and ethically. And this we aim at doing by series of workshops,
           events, programs and services which will help the academics and research world.  </Box>
       </Box>
         <Box>
         <cemter><Image  src={bottomIcon} width={{lg: "80%", md:"60%", sm:"50%", xs:"100%"}} py={4} alt="aboutIcon" /> </cemter>
         </Box>   
        

        </SimpleGrid>
    );
}
export default LandingBottom ;