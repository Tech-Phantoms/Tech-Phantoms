import React from 'react'
import EventHolder from '../components/EventHolder'
import CalendarComponent from '../components/EventHolder/CalendarComponent'
import {
    Box,
    Flex
} from '@chakra-ui/core'

const Events = props => {


    return (
        <div >
        <Box className style={{ fontSize: 50 }}>Events</Box><br />
        <Box pos="fixed" w="100%" zIndex={2}>
        <CalendarComponent/>
        </Box>
        <Flex align="center" justify="center">
         <EventHolder
         eventDesc="Git and GitHub 101"
         eventDate="23/08/2020"
         eventTitle="HacktoberFest with Tech Phantoms"
         eventTime="4:00PM"
         mlsaEvent={true} 
         eventRec="sadsd"
         />
         
        </Flex>
         </div>
    )
}

export default Events