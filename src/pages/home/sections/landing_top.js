import React from "react";
// import { useTheme } from "../themes";

import { Typography, Grid, Box, Hidden } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import TechPhantoms from "../../../assets/landing_page/UI_Updated/techphantoms.svg";
import Logo from "../../../assets/logo.svg";
import LightMode_MLSA_Badge from "../../../assets/LightMode_MLSA_Badge.svg";
import InstaButton from "../../../components/buttons/instagram";
import GitButton from "../../../components/buttons/githubbtn";
import SlackButton from "../../../components/buttons/slackbtn";

import Links from "../../../data/links";

const useStyles = makeStyles({
  leftcontainer: {
    background: "tomato",
  },
  rightcontainer: {
    background: "#F0EBEB",
  },
  leftpane: {
    // marginLeft: "20%",
    marginTop: "26%",
    marginBottom: "60%",
    // paddingRight: "10%",
  },
  rocket: {
    marginBottom: "15px",
  },
  rightpane: {
    marginTop: "6%",
    paddingBottom: "5%",
  },
  brandname: {
    fontFamily: "Segoe UI",
    fontSize: "4vh",
    color: "tomato",
    letterSpacing: "3px",
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
  const Navbar = props.navbar;
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
                  <br /> <b>
                  <Typography gutterBottom={true} align="center" variant="h4">
                     Open Source 
                  </Typography>
                  Organization</b>
                  <br />
                </span>
                <br />
              </Typography>
            </Grid>
            <Hidden mdDown>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Grid spacing={0} container>
                  <Grid align="center" item md={4} lg={4}>
                    <GitButton text="GitHub" link={Links.github} />
                  </Grid>
                  <Grid align="center" item md={4} lg={4}>
                    <SlackButton link={Links.slackInviteUpdated} />
                  </Grid>
                  <Grid align="center" item md={4} lg={4}>
                    <InstaButton text="Instagram" link={Links.instagram}/>
                  </Grid>
                </Grid>
              </Grid>
            </Hidden>
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
        <Hidden smDown>
          <Navbar />
        </Hidden>

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
                <a href="https://studentambassadors.microsoft.com/" 
                rel="noopener noreferrer" target="_blank">
                  <img alt="TechPhantoms" src={LightMode_MLSA_Badge} /><br/><br/>
                </a>
              </center>
            </Grid>
            <Hidden smUp>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Grid spacing={1} container>
                  <Grid align="center" item xs={6} sm={6}>
                    <GitButton text="GitHub" link={Links.github} />
                  </Grid>
                  <Grid align="center" item xs={6} sm={6}>
                    <SlackButton link={Links.slackInviteUpdated} /><br/><br/>
                  </Grid>
                  <Grid align="center" item xs={12} sm={12}>
                    <InstaButton text="Instagram" link={Links.instagram}/>
                  </Grid>
                </Grid>
              </Grid>
            </Hidden>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default LandingTop;
