import React from "react";
import MLSA from "../hack_assets/sponsors/mlsa.svg";
import Progate from "../hack_assets/sponsors/progate.svg";
import GFG from "../hack_assets/sponsors/gfg.svg";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  headings: {
    fontSize: "48px",
    fontWeight: "700",
  },
  subheadings: {
    fontSize: "18px",
    fontWeight: "100",
  },
  themeTopic: {
    fontSize: "36px",
    fontWeight: "100",
  },

  description: {
    fontSize: "18px",
    fontWeight: "100",
    marginTop: "5px",
  },
   visionarysponsor: {
    padding: "5vw",
    backgroundColor: "#30307C",
    color: "white",
    fontFamily: "Segoe UI",
    textAlign: "center",
    fontWeight: "500",
  },
  learningpartner: {
    padding: "5vw",
    backgroundColor: "#D1FF4F",
    color: "black",
    fontFamily: "Segoe UI",
    textAlign: "center",
    fontWeight: "500",
  },
  educationpartner: {
    padding: "5vw",
    backgroundColor: "#F4FFC7",
    color: "#32A176",
    fontFamily: "Segoe UI",
    textAlign: "center",
    fontWeight: "500",
  },
  a: {
    color: "yellow",
  },
}));

const Sponsor = (props) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Box className={classes.visionarysponsor}>
          <span className={classes.headings}>
            Visionary Support
            <br />
          </span><br/>
          <a target="_blank" rel="noopener noreferrer"  href="https://studentambassadors.microsoft.com/">
            <img src={MLSA} alt="mlsa" />
          </a>
          <br />
          <br />
          <br />
        </Box>
        <Box className={classes.educationpartner}>
          <span className={classes.subheadings}>
              <span className={classes.headings}>
              Education Partner
              <br/>
            </span><br />
            <a  target="_blank" rel="noopener noreferrer" href="https://www.geeksforgeeks.org/">
              <img src={GFG} alt="GFG" />
            </a>
          </span>
          <br />
        </Box>
        <Box className={classes.learningpartner}>
        <span className={classes.headings}>
              Learning Partner
              <br/>
            </span><br/>
            <a  target="_blank" rel="noopener noreferrer" href="https://progate.com/">
        
              <img src={Progate} alt="progate" />
            </a>
        </Box>
      </Grid>
    </Grid>
  );
};
export default Sponsor;
