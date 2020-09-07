import React from 'react'
import EventHolder from '../components/EventHolder'


const Events = props => {

    return <>
   <span style={{fontSize:50}}>Events</span><br/>
  {/* Sample Event Holder */}
        <EventHolder
         eventDesc="Git and GitHub 101"
         eventDate="23/08/2020"
         eventTitle="HacktoberFest with Tech Phantoms"
         eventTime="4:00PM"
         mlsaEvent={true} 
         eventRec="sadsd"
         />
    </>
}

export default Events