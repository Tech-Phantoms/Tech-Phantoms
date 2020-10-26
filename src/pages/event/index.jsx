import React from 'react';
import Events from './sections/events'
import { Hidden } from "@material-ui/core/";
import DevTag from '../../components/underDevTag/'
import {
    Container
} from '@material-ui/core'

const Index = props => {
    const Navbar = props.navbar
    return (
        <div>
            <Hidden smDown>
                <Navbar />
            </Hidden>
            <DevTag/>
            <center>
                <span style={{ fontSize: 50 }}>Events</span><br />
            </center>
            <Container>
                <Events />
            </Container>
        </div>
    );
}


export default Index