import React from 'react'
import { events } from '../../data/airtable'
import Holder from './holder'
import {
    Box,

} from '@chakra-ui/core'
import tt from 'tinytime'
import _ from 'lodash'
const Events = props => {
    let [evnts, dates] = events.useEvents()
    console.log(dates)

    /**
     * From the dates array we first need to 
     * sort all the unique dates
     * then we have to render only those events 
     * from the events array that match the date
     */

    const uniqueDates = _.uniqBy(dates, 'fields.date')
    console.log('unique', uniqueDates)

    return <>
        <Box style={{ margin: '2.3rem' }}>
            {
                uniqueDates.map(date => {
                    let ev = _.filter(evnts, e => e.fields.date === date.fields.date)

                    return <>
                        <h1>{tt('{Do} {MMMM}').render(new Date(date.fields.date))}</h1>
                        {ev.map(evs => {
                            if (evs.fields.eventImg) {
                                return <>
                                    <Holder
                                        title={evs.fields.title}
                                        mlsa_event={evs.fields.mlsa_event}
                                        eventImg={evs.fields.eventImg[0].url || ''}
                                        description={evs.fields.desription}
                                        date={evs.fields.date}
                                        reg_link={evs.fields.reg_link}
                                    />
                                </>
                            } else {
                                return <>
                                    <Holder
                                        title={evs.fields.title}
                                        mlsa_event={evs.fields.mlsa_event}
                                        description={evs.fields.desription}
                                        date={evs.fields.date}
                                        reg_link={evs.fields.reg_link}
                                    /><br />
                                </>
                            }
                        })}
                    </>
                })
            }
        </Box>
    </>
}

export default Events