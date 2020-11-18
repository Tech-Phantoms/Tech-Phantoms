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
    backgroundColor: "#FFC700",
    color: "black",
    fontFamily: "Segoe UI",
  },

  description: {
    fontSize: "18px",
    fontWeight: "100",
    marginTop: "5px",
  },
  quote: {
    fontSize: "36px",
  },
}));

const Theme = (props) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Box className={classes.center}>
          <span className={classes.headings}>Theme</span>
          <span className={classes.subheadings}>
            <br />
            Along with API First skills, we want to nurture creativity without
            any limits.
            <br /> So we are having an open theme.
            <br />
            <br />
            <span className={classes.themeTopic}>
              <span className={classes.quote}> " </span>
              Build things that matter, using API
              <span className={classes.quote}> " </span>
            </span>
          </span>
          <br />
        </Box>
      </Grid>
    </Grid>
  );
};
export default Theme;
