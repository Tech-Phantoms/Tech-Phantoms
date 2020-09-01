import React from 'react'

import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerBody
} from '@chakra-ui/core'

const MenuDrawer = props => {


    return <Drawer
        isOpen={true}
        placement="right"
    >
        <DrawerOverlay>
            <DrawerContent>
                <DrawerBody>
                    {['Home', 'Event', 'Team'].map(el => <>{el} <br /></>)}
                </DrawerBody>
            </DrawerContent>
        </DrawerOverlay>
    </Drawer>
}

export default MenuDrawer