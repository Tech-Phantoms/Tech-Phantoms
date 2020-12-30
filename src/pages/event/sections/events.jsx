import React from "react";

import { events } from "../../../data/airtable";

import Holder from "../components/holder";

import { Container,  makeStyles, Grid } from "@material-ui/core";
import _ from "lodash";

const useStyle = makeStyles(theme => ({
  divider: {
    margin: theme.spacing(4, 0),
  },
  date: {
    margin: theme.spacing(2, 0),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

const Events = () => {
  const classes = useStyle();

  let [evnts, dates] = events.useEvents();

  const uniqueDates = _.uniqBy(dates, "fields.date");

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {uniqueDates.map(date => {
          let ev = _.filter(evnts, e => e.fields.date === date.fields.date);

          return (
            <>
              {ev.map(evs => {
                if (evs.fields.eventImg) {
                  return (
                    <Grid item xs={12} sm={6} md={4}>
                      <Holder
                        date={date.fields.date}
                        title={evs.fields.title}
                        mlsa_event={evs.fields.mlsa_event}
                        eventImg={evs.fields.eventImg[0].url || ""}
                        description={evs.fields.desription}
                        time={evs.fields.time}
                        reg_link={evs.fields.reg_link}
                        event_recording_link={evs.fields.event_recording_link}
                      />
                    </Grid>
                  );
                } else {
                  return (
                    <Grid item xs={12} sm={6} md={4}>
                      <Holder
                        date={date.fields.date}
                        title={evs.fields.title}
                        mlsa_event={evs.fields.mlsa_event}
                        description={evs.fields.desription}
                        time={evs.fields.time}
                        reg_link={evs.fields.reg_link}
                        event_recording_link={evs.fields.event_recording_link}
                      />
                    </Grid>
                  );
                }
              })}
            </>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Events;
