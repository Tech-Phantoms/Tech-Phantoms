import React from 'react'
import EventHolder from '../components/EventHolder'


const Events = props => {

    return <>
        <span style={{ fontSize: 50 }}>Events</span><br />
        {/* Sample Event Holder */}
        <EventHolder
         description="Git and GitHub 101"
         date="23/08/2020"
         title="HacktoberFest with Tech Phantoms"
         mlsa_event={true} 
         event_recording_link="sadsd"
         />

    </>
}

export default Events