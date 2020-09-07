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

import Logo from '../../assets/sidenavbar/top_logo.svg'
import {useHistory } from 'react-router-dom'

// Side Navigation Drawer 
const MenuDrawer = props => {
    //Implementing useHistor() 
    const history = useHistory()

    //pushing routes to the history,  in order to save the state
    const router = path => {
        history.push(path)
      }

    //routes we have  Content of Drawer
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
        
            <DrawerContent  background="black" paddingTop={10} color="white" width={200} letterSpacing={5} lineHeight={3} textDecoration="none" fontFamily="Segoe UI">
                <DrawerBody>
                  
                    <center><Link onClick={    () => {router(paths[0].path)}  } ><img src={Logo} width="160px" alt=""/></Link><br/></center>
                  {/* Using map function to create Links and all */}
                    
             
                    <center>    
                         {paths.map(route => <><Link onClick={    () => {router(route.path)}  }>{route.name}</Link> <br /></>)}
                    </center>
               
                </DrawerBody>
            </DrawerContent>
        </DrawerOverlay>
    </Drawer>
}

export default MenuDrawer
