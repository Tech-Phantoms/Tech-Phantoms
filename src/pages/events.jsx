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
        <Holder
            eventDesc="Git and GitHub 101"
            eventDate="23/08/2020"
            eventTitle="HacktoberFest with Tech Phantoms"
            eventTime="4:00PM"
            mlsaEvent={true}
            eventRec="sadsd"
        />

        <Box style={{ margin: '12px 10px' }}>
            <Evnts />
        </Box>
    </>
}

export default Events