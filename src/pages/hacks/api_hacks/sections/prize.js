import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core/";
import Prize from './components/prize/index'
import PrizeList from '../hack_assets/data/prizeList'
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
    backgroundColor: "#FFC700",
    color: "black",
    fontFamily: "Segoe UI",
  },

  description: {
    fontSize: "18px",
    fontWeight: "100",
    marginTop: "5px",
  },
}));

const Prizes = (props) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Box className={classes.center}>
         
            <span className={classes.headings}>Benefits</span>
            <span className={classes.subheadings}>
              <br />
             Avail premium benefits and exclusive prizes worth anticipating.  
              <br /> 
              <br/>
              {
                    PrizeList.map((prize)=>{
                                                return (<Prize name={prize.name} icon={prize.icon} desc={prize.desc} />)
                    })

              }
       
            </span>
            <br />{" "}
       
        </Box>
      </Grid>
    </Grid>
  );
};
export default Prizes;
