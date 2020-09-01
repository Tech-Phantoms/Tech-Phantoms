import React from 'react'
import {
    Box,
    Flex
} from '@chakra-ui/core'

import Drawer from './drawer'

import menu from '../../assets/menu.svg'


const Navbar = props => {

    return (
        <Box w="100%" py={4} px={6}>
            <Flex>
                <Flex flexGrow={1}>

                </Flex>
                <Flex >
                    <Box style={{ cursor: 'pointer' }}>
                        <img src={menu} width="20px" />
                    </Box>
                </Flex>
            </Flex>

            <Drawer />
        </Box>
    )
}

export default Navbar