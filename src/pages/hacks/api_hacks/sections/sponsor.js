import React from "react";
import MLSA from '../hack_assets/sponsors/mlsa.svg'
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core/";

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
  
  description: {
    fontSize: "18px",
    fontWeight: "100",
    marginTop: "5px",
  },
  center: {
    padding: "5vw",
    backgroundColor: "#30307C",
    color: "white",
    fontFamily: "Segoe UI",
    textAlign:'left',
    fontWeight:'500'
  },
  a:{
    color: "yellow",
 
  }
}));

const Developer = (props) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Box className={classes.center}>
            <span className={classes.headings}>
             Visionary Support<br/>
            </span>
            <span className={classes.subheadings}>
             We thank the following organizations from the whole team of  and <b>Tech Phantoms</b> and <b>Innovators' Hub </b>
             in making our mission successful. <br/><br/><br/>
            <img src={MLSA} alt="mlsa"/>
            </span>
            <br />{" "}
       
        </Box>
      </Grid>
    </Grid>
  );
};
export default Developer;
