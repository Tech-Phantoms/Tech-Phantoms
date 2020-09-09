import React from 'react'
import { Events as Evnts, Holder } from '../components/EventHolder'
import {
    Box,
} from '@chakra-ui/core'


const Events = props => {

    return <>
        <center>
            <span style={{ fontSize: 50 }}>Events</span><br />
        </center>
        {/* Sample Event Holder */}

        {/* <EventHolder
         description="Git and GitHub 101"
         date="2013-03-10T02:00:00Z"
         title="HacktoberFest with Tech Phantoms"
         mlsa_event={true} 
         event_recording_link="some link"
         />*/}

        <Box style={{ margin: '12px 10px' }}>
            <Evnts />
        </Box>
    </>
}

export default Events