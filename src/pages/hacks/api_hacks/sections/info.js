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
  center: {
    padding:'5vw',
    backgroundColor: "yellowgreen",
    color: "black",
    fontFamily: "Segoe UI",
    
  },

  description: {
    fontSize: "18px",
    fontWeight: "100",
    marginTop: "5px",
  },
}));

const Info = (props) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Box className={classes.center}><center>
          <span className={classes.headings}>What is an API?</span>
          <span className={classes.subheadings}><br/>
          In layman's terms, these are interfaces which allow software solutions to communicate with each other. It helps to think of them as the “engine under the hood,” and the backbone of the connectivity that our society has come to rely upon.
API is abbreviated form of Application Programming Interface<br/><br/>
        </span><br/>  </center>
        </Box>
      </Grid>
    </Grid>
  );
};
export default Info;
