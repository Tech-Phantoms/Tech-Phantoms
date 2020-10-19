import React from 'react';

import { events } from '../../../data/airtable'

import Holder from '../components/holder'

import {
    Container,
    Divider,
    Typography,
    makeStyles,
    Grid
} from '@material-ui/core'
import tt from 'tinytime'
import _ from 'lodash'

const useStyle = makeStyles(theme => ({
    divider: {
        margin: theme.spacing(4, 0)
    },
    date: {
        margin: theme.spacing(2, 0)
    }
}))

const Events = () => {

    const classes = useStyle();

    let [evnts, dates] = events.useEvents()

    const uniqueDates = _.uniqBy(dates, 'fields.date')

    return <>
        <Container>
            {
                uniqueDates.map(date => {
                    let ev = _.filter(evnts, e => e.fields.date === date.fields.date)

                    return <>
                        <div className={classes.date}>

                            <Typography variant="h4">
                                {tt('{DD}/{MM}/{YYYY}  {dddd}').render(new Date(date.fields.date))}
                            </Typography>
                        </div>

                        <Grid container spacing={2}>
                            {ev.map(evs => {
                                if (evs.fields.eventImg) {
                                    return <Grid item xs={6} sm={4} lg={4}>
                                        <Holder
                                            title={evs.fields.title}
                                            mlsa_event={evs.fields.mlsa_event}
                                            eventImg={evs.fields.eventImg[0].url || ''}
                                            description={evs.fields.desription}
                                            date={evs.fields.time}
                                            reg_link={evs.fields.reg_link}
                                            event_recording_link={evs.fields.event_recording_link}
                                        />
                                    </Grid>


                                } else {
                                    return <Holder
                                        title={evs.fields.title}
                                        mlsa_event={evs.fields.mlsa_event}
                                        description={evs.fields.desription}
                                        date={evs.fields.date}
                                        reg_link={evs.fields.reg_link}
                                        event_recording_link={evs.fields.event_recording_link}
                                    />


                                }
                            })}
                        </Grid>

                        <div className={classes.divider}>
                            <Divider variant="fullWidth" />
                        </div>
                    </>
                })
            }
        </Container>
    </>

}

export default Events;