import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core/";

import Judge from './components/judge/index'

import JudgeList from '../hack_assets/data/judgesList'


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
    padding: "5vw",
    backgroundColor: "black",
    color: "white",
    fontFamily: "Segoe UI",
    textAlign:'left'
  },
  name: {
    fontSize: "36px",
    fontWeight: "100",
  },
}));

const Participate = (props) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
    <Grid item xs={12} sm={12} md={12} lg={12}>
      <Box className={classes.center}>
        <span className={classes.headings}> Judges</span><br/>
        We thank them to take out the time and help us in judging panel<br/><br/>
        <span className={classes.subheadings}>
            <Grid container className={classes.speaker}>
              <br />

              {JudgeList.map((judge) => {
                const name = judge.name;
                const title = judge.desc;
                const subtitle = judge.sub;
                const img = judge.img;
                
                return (
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Judge name={name} title={title} img={img} subtitle={subtitle}/>
                  </Grid>
                );
              })}
            </Grid>

          </span>
        <br />
      </Box>
    </Grid>
  </Grid>
  );
};
export default Participate;
