import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core/";
import RegisterBTN from './components/btn/index'
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
    backgroundColor: "#4B48D9",
    color: "white",
    fontFamily: "Segoe UI",
    textAlign:'right'
  },

  description: {
    fontSize: "18px",
    fontWeight: "100",
    marginTop: "5px",
  },
}));

const Participate = (props) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Box className={classes.center}>
         
            <span className={classes.headings}>Participate</span>
            <span className={classes.subheadings}>
              <br />
        
     
              <b>You are late :( Hack has started.<br/></b>
          <br/>
          You can still attend our exclusive expert sessions<br/> from Microsoft, Postman, etc<br/> by registering below<br/>
          <br/><RegisterBTN/>
        
              
            </span>
            <br />{" "}
       
        </Box>
      </Grid>
    </Grid>
  );
};
export default Participate;
