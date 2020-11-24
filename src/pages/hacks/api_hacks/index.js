import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  Hidden, 
} from "@material-ui/core/";

import Top from './sections/index'
import Mission from './sections/mission'
import Info from './sections/info'
import Theme from './sections/theme'
import Participate from './sections/participate'
import Speakers from './sections/speakers'
import Community from './sections/community'
import Sponsor from './sections/sponsor'
import Developer from './sections/developer'
import Prizes from './sections/prize'
import BG from "./hack_assets/bg.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
    marginTop: "15px",
  },
  backgroundC: {
    backgroundImage: BG,
  },
  backgroundB: {
    marginTop: "25px",
    marginBottom: "50px",
  },
}));

const Apihacks = (props) => {
  const Navbar = props.navbar;
  const classes = useStyles();
  return (
    <>
<Hidden mdDown><Navbar/></Hidden>
    
      <Container className={classes.backgroundC}>
        <Grid container>
         <Top/>
        </Grid>
        <Grid container>
         <Mission/>
        </Grid>
        <Grid container>
         <Info/>
        </Grid>
        <Grid container>
         <Theme/>
        </Grid>
        <Grid container>
         <Participate/>
        </Grid>
        <Grid container>
         <Speakers/>
        </Grid>
        <Grid container>
         <Prizes/>
        </Grid>
        <Grid container>
         <Sponsor/>
        </Grid>
        <Grid container>
         <Community/>
        </Grid>
        <Grid container>
         <Developer/>
        </Grid>
        </Container>     
    </>
  );
};

export default Apihacks;
