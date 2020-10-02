import React from 'react';
import { Link } from 'react-router-dom';
import {
    PseudoBox,
    Image,
    Flex,
    Heading,
    Box,
} from "@chakra-ui/core";
import emotion from '../../assets/404sad_face.svg'

const NotFoundPage = () => (
    <Box display={Flex} 
    alignItems="center" 
    bg="tomato" 
    flexDirection="column" 
    justifyContent="Center" 
    w="100%" 
    height="315px" 
    color="white">
        <Image src={emotion} maxW="90px" alt="Page not Found"/>
        
        <Heading as="h1" size="2xl">
            404!
        </Heading>

        <Heading as="h3" size="lg" textAlign="center">
            Looks like you have travelled way too far...
        </Heading>

        <Link to="/">
            <PseudoBox 
            as="button" 
            bg="white" 
            py={2} 
            px={4} 
            ml={3} 
            my={5} 
            rounded="md" 
            fontWeight="semibold" 
            color="tomato" 
            _focus={{ boxShadow: "outline" }}>
                Go back to home
            </PseudoBox>
        </Link>

    </Box>
);
export default NotFoundPage;