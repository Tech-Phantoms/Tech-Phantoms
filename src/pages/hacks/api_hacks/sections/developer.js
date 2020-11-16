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
  
  description: {
    fontSize: "18px",
    fontWeight: "100",
    marginTop: "5px",
  },
  center: {
    padding: "1vw",
    backgroundColor: "black",
    color: "lightgreen",
    fontFamily: "Segoe UI",
    textAlign:'center',
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
         
        
            <span className={classes.subheadings}>
              <br />
             {'</ > with Love by '}<a className={classes.a} href="https://linkedin.com/in/imabp">Abir Pal</a> 
            </span>
            <br />{" "}
       
        </Box>
      </Grid>
    </Grid>
  );
};
export default Developer;
