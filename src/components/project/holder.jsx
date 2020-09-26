import React from 'react'

import {
    Box,
    Text,
    Badge,
    Icon,
    SimpleGrid
} from '@chakra-ui/core'

const Holder = props => {

    let langColor = {
        "javascript": 'yellow',
        "typescript": 'cyan',
        "python": 'blue',
        "c++": "pink"
    }

    let getLangColor = language => {
        return langColor[language]
    }

    return <>
        <Box
            w="420px"
            px={4}
            py={2}
            m={3}
            style={{
                border: '1px black solid',
                borderRadius: '3px'
            }}
        >
            <Box px={4} py={1} >
                <Text fontSize="xl" >{props.repo_name}</Text>
            </Box>

            <Box px={4} >
                <Text color="grey" fontSize="xs" >{props.description}</Text>
            </Box>

            <Box px={4} py={5}>
                <SimpleGrid alignItems="left" columns={3} spacing={2}>
                    <Box>
                        <Badge variantColor={getLangColor(props.language)} >{props.language}</Badge>
                    </Box>

                    <Box>
                        <Text><Icon color="red.400" name="warning" /> <span style={{fontSize: '12px', padding: '1px'}} >{props.issues}</span></Text>
                    </Box>

                    <Box>
                    <Text><Icon color="green.400" name="star" /> <span style={{fontSize: '12px', padding: '1px'}} >{props.stars}</span></Text>
                    </Box>

                </SimpleGrid>
            </Box>

        </Box>
    </>
}


export default Holder