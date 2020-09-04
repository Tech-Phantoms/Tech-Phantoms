import React from 'react'
import {
    Box,
    Text,
    SimpleGrid
} from '@chakra-ui/core'

const Footer = props => {

    return <>
        <Box p={10} style={{marginTop: '120px'}}>
            <SimpleGrid columns={2} spacing={4}>
                <Box>
                    <Text>@2020 Tech_Phantoms</Text>
                </Box>

                <Box style={{alignContent: 'end'}}>icons</Box>

            </SimpleGrid>
        </Box>
    </>
}

export default Footer