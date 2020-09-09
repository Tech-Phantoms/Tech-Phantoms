import React from 'react'
import { events } from '../../data/airtable'
import Holder from './holder'

const Events = props => {
    let [evnts, dates] = events.useEvents()

    return <>

        {evnts.map(el => <>
            <Holder
                eventTitle={el.fields.title}
                mlsaEvent={el.fields.mlsa_event}
            />
        </>)}
    </>
}

export default Events