import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Typography,
  Grid,
  Button,
  Hidden,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core/";

import Top from './sections/index'
import BG from "./hack_assets/bg.jpg";
import API from './hack_assets/api.png'

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
          <Grid item xs={12} sm={12} md={4} lg={4}>
          <img  alt="api" src={API} width="90%" />
          </Grid>
          <Grid xs={12} sm={12} md={8} lg={8}>
            <Typography variant="h6" >
             <br/>
              API first skills helps to build scalable software systems or
              serverless architecture. This mini hackathon will be a step to
              make students industry ready by helping them to build impactful
              products using APIs
              <Typography variant="h6">
          <b>Date:<br/> 25th November (4:00 PM IST) <br/>to 30th November (10:00 PM IST) </b><br/><br/>
          <Button 
          variant="outlined" 
          target='_blank' 
          href="https://forms.office.com/Pages/ResponsePage.aspx?id=oBzDhDusrk6tEVGdgCM-b_XYgpX-JuhEnEl61Ll0DY1UQ1dCUUZBVTRRN09GQUNSNlc0RzdIVzZTUi4u">
             Participate 
             </Button>
              </Typography>
              <Typography variant="h6"><br/>
          <b>Presented By </b><br/>
          <b>Tech Phantoms,</b> <br/>A Technical Community by Microsoft Student Ambassadors
      <br/> and <br/>
      <b>Innovators Hub,</b><br/> <span style={{color:'red'}}>Chandigarh</span> University
              </Typography>
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Container className={classes.backgroundB}>
        <Accordion expanded>
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <Typography className={classes.heading}>Eligibility</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Undergraduate Student studying in <b>Freshmen, Sophomore or Pre-Final</b> year in <b>India</b>.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded>
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <Typography className={classes.heading}>Contact</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <b>Innovators Hub Lead</b>: Rishabh Raj, Co-Lead, IEEE Chandigarh University<br/> <a href="mailto:rishabhraj2257@gmail.com">rishabhraj2257@gmail.com</a>
       <br/>  <b>Tech Phantoms Lead</b>: Abir Pal, Beta Student Ambassador, Microsoft <br/><a href="mailto:abir@techphantoms.tech">abir@techphantoms.tech</a>
             
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </>
  );
};

export default Apihacks;
