import React from 'react'
import { events } from '../../data/airtable'
import Holder from './holder'
import {
    Box,
    Grid,
    Text,
    Divider
} from '@chakra-ui/core'
import tt from 'tinytime'
import _ from 'lodash'


const Events = props => {
    let [evnts, dates] = events.useEvents()
    console.log(dates)

    const uniqueDates = _.uniqBy(dates, 'fields.date')
    console.log('unique', uniqueDates)

    return <>
        <Box style={{ margin: '2.3rem' }}>
            {
                uniqueDates.map(date => {
                    let ev = _.filter(evnts, e => e.fields.date === date.fields.date)

                    return <>
                        <Box py={6}>

                            <Text fontSize="xl" fontWeight="bold">
                                {tt('{DD}/{MM}/{YYYY}  {dddd}').render(new Date(date.fields.date))}
                            </Text>
                        </Box>

                        <Grid templateColumns="repeat(4, 1fr)" gap={18} >
                            {ev.map(evs => {
                                if (evs.fields.eventImg) {
                                    return <Box>
                                        <Holder
                                            title={evs.fields.title}
                                            mlsa_event={evs.fields.mlsa_event}
                                            eventImg={evs.fields.eventImg[0].url || ''}
                                            description={evs.fields.desription}
                                            date={evs.fields.time}
                                            reg_link={evs.fields.reg_link}
                                        />
                                    </Box>

                                } else {
                                    return <Box>
                                        <Holder
                                            title={evs.fields.title}
                                            mlsa_event={evs.fields.mlsa_event}
                                            description={evs.fields.desription}
                                            date={evs.fields.date}
                                            reg_link={evs.fields.reg_link}
                                        />
                                    </Box>

                                }
                            })}
                        </Grid>

                        <Box py={6}>
                            <Divider />
                        </Box>
                    </>
                })
            }
        </Box>
    </>
}

export default Events