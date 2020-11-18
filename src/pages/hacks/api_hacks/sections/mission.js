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
    backgroundColor: "#75176B",
    color: "white",
    fontFamily: "Segoe UI",
    
  },

  description: {
    fontSize: "18px",
    fontWeight: "100",
    marginTop: "5px",
  },
}));

const Mission = (props) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Box className={classes.center}><center>
          <span className={classes.headings}>Mission of API Hacks.</span>
          <span className={classes.subheadings}><br/>
            To Leverage API First Skills among<br/> Novice students <b>interested</b> in Computer Science.
              <br/><br/>
        </span></center>
        </Box>
      </Grid>
    </Grid>
  );
};
export default Mission;
