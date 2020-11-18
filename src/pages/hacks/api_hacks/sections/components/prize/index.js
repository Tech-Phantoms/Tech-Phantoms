import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "35px",
    paddingRight:"15px"
  },
  name: {
    fontSize: "36px",
    fontWeight: "100",
  },
  subHead: {
    textAlign: "right",
  },
}));
const Prize = (props) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={12} md={8} lg={8}>
        <span className={classes.name}> {props.name} </span><br/>
        <span className={classes.subHead}> {props.desc} </span><br/>
      </Grid>
    </Grid>
  );
};

export default Prize;
