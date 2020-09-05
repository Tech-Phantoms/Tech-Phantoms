// Side Navigation
import React from 'react'
// Chakra UI
import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerBody,
    Link
} from '@chakra-ui/core'

// Side Navigation Drawer 
const MenuDrawer = props => {
    
    // Content of Drawer
    const paths = [
        { name: 'Home', path: '/' },
        { name: 'Team', path: '/team' },
        { name: 'Event', path: '/events' }
    ]


    return <Drawer
        isOpen={props.open}
        placement="right"
        onClose={props.close}
    >
        {/* Overlaying the background  */}
        <DrawerOverlay>
        
            <DrawerContent background="black" color="white" width={200} letterSpacing={5} lineHeight={3} textDecoration="none" fontFamily="Segoe UI">
                <DrawerBody>
                    {/* Using map function to create Links and all */}
                    {paths.map(el => <><Link href={el.path}>{el.name}</Link> <br /></>)}
            
                </DrawerBody>
            </DrawerContent>
        </DrawerOverlay>
    </Drawer>
}

export default MenuDrawer