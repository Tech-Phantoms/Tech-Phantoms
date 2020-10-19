import React from 'react';
import Events from './sections/events'

import {
    Container
} from '@material-ui/core'

const Index = props => {

    return (
        <div>
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