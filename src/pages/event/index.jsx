import React, { useEffect, useState } from 'react';
import Events from './sections/events'
import { Hidden } from "@material-ui/core/";
import DevTag from '../../components/underDevTag/'
import {
    Container
} from '@material-ui/core'
import { events } from '../../data/airtable';

const Index = props => {
    const Navbar = props.navbar

    let [eventList, setEventList] = useState([]);
    let [datesList, setDateList] = useState([]);
    useEffect(() => {
        let [evnts, dates] = events.useEvents();
        setEventList(evnts);
        setDateList(dates);
    }, []);

    return (
        <div>
            <Hidden smDown>
                <Navbar />
            </Hidden>
            <DevTag />
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