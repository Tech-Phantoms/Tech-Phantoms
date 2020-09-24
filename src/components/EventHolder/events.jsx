import React from 'react'
import { events } from '../../data/airtable'
import Holder from './holder'
import {
    Box,

} from '@chakra-ui/core'
const Events = props => {
    let [evnts] = events.useEvents()

    return <>
        <Box style={{margin: '2.3rem'}}>
            {evnts.map(el => {

                if (el.fields.eventImg) {
                    return <>
                        <Holder
                            title={el.fields.title}
                            mlsa_event={el.fields.mlsa_event}
                            eventImg={el.fields.eventImg[0].url || ''}
                            description={el.fields.desription}
                            date={el.fields.date}
                            reg_link={el.fields.reg_link}
                        />
                    </>
                } else {
                    return <>
                        <Holder
                            title={el.fields.title}
                            mlsa_event={el.fields.mlsa_event}
                            description={el.fields.desription}
                            date={el.fields.date}
                            reg_link={el.fields.reg_link}
                        /><br />
                    </>
                }


            })}
        </Box>
    </>
}

export default Events