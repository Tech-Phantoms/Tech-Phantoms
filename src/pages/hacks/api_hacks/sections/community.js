import React from "react";
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
  center: {
    padding: "5vw",
    backgroundColor: "#4D3E4B",
    color: "#FCFFE8",
    fontFamily: "Segoe UI",
  },

  description: {
    fontSize: "18px",
    fontWeight: "100",
    marginTop: "5px",
  },
  a:{
    color:'aqua',
   
  }
}));

const Community = (props) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Box className={classes.center}>
         
            <span className={classes.headings}>Tech Phantoms</span>
            <span className={classes.subheadings}>
              <br />
              We are an open source organization by Microsoft Learn Student Ambassadors. We are on a mission to leverage open source culture among students and starters and building super cool OSS tools.<br/><br/>
              <span className={classes.headings}>Innovators Hub</span><br/>
              We are the technical club of Chandigarh University, specializing in research and patents.We dont hesitate, we Innovate.
             <br/><br/><span className={classes.headings}>Contact</span><br/>
             We are active and dont let your queries be with you. <br/> You can reach us at: <br/>
            <a className={classes.a} href="mailto:abir@techphantoms.tech">
             abir@techphantoms.tech
            </a>
            </span>
            <br />{" "}
       
        </Box>
      </Grid>
    </Grid>
  );
};
export default Community;
