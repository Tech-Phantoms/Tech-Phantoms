import React from 'react'

import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerBody,
    Link
} from '@chakra-ui/core'

const MenuDrawer = props => {

    const paths = [
        { name: 'Home', path: '/' },
        { name: 'Team', path: '/team' },
<<<<<<< HEAD
        { name: 'Event', path: '/events' },
    
=======
        { name: 'Event', path: '/events' }
>>>>>>> origin/master
    ]


    return <Drawer
        isOpen={props.open}
        placement="right"
        onClose={props.close}
    >
        <DrawerOverlay>
            <DrawerContent>
                <DrawerBody>
                    {paths.map(el => <><Link href={el.path}>{el.name}</Link> <br /></>)}
                </DrawerBody>
            </DrawerContent>
        </DrawerOverlay>
    </Drawer>
}

export default MenuDrawer