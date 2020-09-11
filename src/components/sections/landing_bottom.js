import React from 'react';
import { Text,Image,Box,SimpleGrid } from "@chakra-ui/core";

//importing assets
import bottomIcon from '../../assets/landing_page/pair_programming.svg'
import loader from '../../assets/loader.gif'

 const LandingBottom = props =>  {
    return (
        <SimpleGrid d='flex' flexDirection={{"xs":"column-reverse","sm":"column-reverse","md":"row","lg":"row"}}  columns={{"lg":2,"md":2,"xs":1,"sm":1}} spacing={1} padding={10}>
            
        <Box paddingRight="10px"  justifyContent="space-around">
        <Text fontSize="3xl" py={4}> We <span role="img" aria-label="Heart">💓</span> Open Source </Text>
         <Box textAlign="justify" maxWidth={{lg:"70%",md:"60%"}} >We commit to becoming a place where people, passionate about technology, collaborate and aim at enhancing their
          knowledge about the latest developer technologies and use them. creatively and ethically. And this we aim at doing by series of workshops,
           events, programs and services which will help the academics and research world.  </Box>
       </Box>
         <Box minWidth="40%">
         <cemter><Image  src={bottomIcon} width={{lg: "100%", md:"100%", sm:"50%", xs:"100%"}} py={4} alt="aboutIcon" /> </cemter>
         </Box>   
        

        </SimpleGrid>
    );
}
export default LandingBottom ;