import React from 'react';
import { Text,Image,Box,SimpleGrid } from "@chakra-ui/core";

//importing assets
import bottomIcon from '../../assets/landing_page/pair_programming.svg'
import loader from '../../assets/loader.gif'

 const showMeCode = props =>  {
    return (
        <SimpleGrid d='flex' flexDirection={{"xs":"column-reverse","sm":"column-reverse","md":"row","lg":"row"}}  columns={{"lg":2,"md":2,"xs":1,"sm":1}} spacing={1} padding={10}>
            
        <Box paddingRight="10px"  justifyContent="space-around">
        <Text fontSize="3xl" py={4}> Show me the Code </Text>
         <Box textAlign="justify" maxWidth={{lg:"70%",md:"60%"}} >
             
          </Box>
       </Box>
         <Box minWidth="40%">
         <cemter><Image fallbackSrc={loader}  src={bottomIcon} width={{lg: "100%", md:"100%", sm:"50%", xs:"100%"}} py={4} alt="aboutIcon" /> </cemter>
         </Box>   
        

        </SimpleGrid>
    );
}
export default showMeCode;