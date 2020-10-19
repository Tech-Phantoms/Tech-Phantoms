import React from "react";
// import { useTheme } from "../themes";

import { Typography, Grid, Box, Hidden } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import TechPhantoms from "../../assets/landing_page/UI_Updated/techphantoms.svg";
import Logo from "../../assets/logo.svg";
import Navbar from "../navbar/navbar";
import LightMode_MLSA_Badge from "../../assets/LightMode_MLSA_Badge.svg";
const useStyles = makeStyles({
  leftcontainer: {
    background: "tomato",
  },
  rightcontainer: {
    background: "#F0EBEB",
  },
  leftpane: {
    marginLeft: "20%",
    marginTop: "30%",
    marginBottom: "80%",
    paddingRight: "10%",
  },
  rocket: {
    marginBottom: "15px",
  },
  rightpane: {
    marginTop: "10%",
  },
  brandname: {
    fontFamily: "Segoe UI",
    fontSize: "4vh",
    color: "tomato",
    letterSpacing: "3px",
  },
  navclass: {
    alignItems: "right",
    padding: "25px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  navchild: {
    padding: "4px",
  },
});

//assests
// import logo from "../../assets/logo.svg";
// import LightMode_techphantoms from "../../assets/LightMode_techphantoms.svg";
// import DarkMode_techphantoms from "../../assets/DarkMode_techphantoms.svg";

// import DarkMode_MLSA_Badge from "../../assets/DarkMode_MLSA_Badge.svg";
// import IG from "../../assets/socialprofiles/instagram.svg";
// import GitHub from "../../assets/socialprofiles/github.svg";
// import Linkedin from "../../assets/socialprofiles/linkedin.svg";
// //css
// import { Box, Text, SimpleGrid, Image } from "@chakra-ui/core";
// import links from '../../data/links'

const LandingTop = (props) => {
  // const { theme } = useTheme();
  const classes = useStyles();
  return (
    <Grid container>
      <Grid
        className={classes.leftcontainer}
        item
        xs={12}
        sm={12}
        md={4}
        lg={4}
      >
        <Box className={classes.leftpane}>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Typography
                color="white"
                align="center"
                variant="h2"
                gutterBottom="true"
              >
                <div className={classes.rocket}>
                  <span role="img" aria-label="rocket">
                    🚀
                  </span>
                </div>
                <span style={{ color: "white" }}>
                  Build Things that Matter!
                </span>
                <br />
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Typography gutterBottom={true} align="center" variant="h5">
                <span style={{ color: "white" }}>
                  {" "}
                  Introducing
                  <br /> An
                  <br /> <b> Open Source Organization</b>
                  <br />
                </span>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>

      <Grid
        className={classes.rightcontainer}
        item
        xs={12}
        sm={12}
        md={8}
        lg={8}
      >
        <div className={classes.navclass}>
          <Hidden smDown>
            <Navbar />
          </Hidden>

        </div>

        <Grid container className={classes.rightpane}>
          <Grid container item xs={12} sm={12} md={12} lg={12}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <center>
                <img alt="techPhantoms" src={Logo} width="120rem" />
              </center>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <center>
                <img alt="techPhantoms" src={TechPhantoms} />
              </center>
            </Grid>
          </Grid>
          <Grid container item xs={12} sm={12} md={12} lg={12}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <br />
              <center>
                {" "}
                An Open Technical Community <br /> By
                <br /> <br />
              </center>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <center>
                <img alt="TechPhantoms" src={LightMode_MLSA_Badge} />
              </center>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default LandingTop;
