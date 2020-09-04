import React from 'react'
import {
    Box,
    Text,
    SimpleGrid,
    Flex
} from '@chakra-ui/core'

const Footer = props => {

    return <>
        <Box p={10} style={{marginTop: '120px'}} bg="tomato" color="white">
            <SimpleGrid columns={2} spacing={4}>
                <Box>
                    <Text>@2020 Tech_Phantoms</Text>
                </Box>

                <Box style={{alignContent: 'end'}}>
                    <Flex>
                        <Flex flexGrow={1} />

                        <Flex>
                            <SimpleGrid columns={2} spacing={2}>

                                <Box>
                                    github
                                </Box>
                                <Box>
                                    Linkedin
                                </Box>

                            </SimpleGrid>
                        </Flex>

                    </Flex>
                </Box>

            </SimpleGrid>
        </Box>
    </>
}

export default Footer