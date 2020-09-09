import Holder from './holder'
import Events from './events'


const EventHolder =props=>{
                        /*
                        eventImg: Event Image Link (required, default image: https://drive.google.com/file/d/13UqDB73ie5a-2LhF4RpepZdWa4QhPWTz/view)
                        title: Event Title (required)
                        description: Event Description (required)
                        date: Event Date (required)
                        reg_link: Event Register Link (required, can use a default table airtable for this see below 👇)
                        event_recording_link: Event Recording Link (Optional, for past events, can be updated later)
                        duration: Duration(required)
                        mlsa_event: MLSA Event(Options (yes or no))          
                        rsvp            
                        */
                       const [show, setShow] = React.useState(false);

export { Holder, Events }

