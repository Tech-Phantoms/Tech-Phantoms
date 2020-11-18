import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core/";
import Speaker from "./components/speaker/index";
import SpeakerList from "../hack_assets/data/speakerList";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  headings: {
    fontSize: "48px",
    fontWeight: "100",
  },
  subheadings: {
    fontSize: "18px",
    fontWeight: "100",
  },
  themeTopic: {
    fontSize: "36px",
    fontWeight: "100",
  },
  center: {
    padding: "4.8vw",
    backgroundColor: "#F5FFB7",
    color: "black",
    fontFamily: "Segoe UI",
  },

  description: {
    fontSize: "18px",
    fontWeight: "100",
    marginTop: "5px",
  },
  speaker: {
    paddingTop: "20px",
  },
}));

const Speakers = (props) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Box className={classes.center}>
          <span className={classes.headings}> Phenomenal Speakers</span><br/>
          Our guest speakers are always ready to uplift the students with their
            vast experience and knowledge in various aspects.
          <span className={classes.subheadings}>
            <Grid container className={classes.speaker}>
              <br />

              {SpeakerList.map((speaker) => {
                const name = speaker.name;
                const title = speaker.title;
                const img = speaker.img;
                
                return (
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Speaker name={name} title={title} img={img} subtitle={speaker.subtitle}/>
                  </Grid>
                );
              })}
            </Grid>
            
            <span className={classes.themeTopic}> More on the way...</span>
          </span>
          <br />
        </Box>
      </Grid>
    </Grid>
  );
};
export default Speakers;
