import React from 'react';
import { Typography, Grid, Box, Hidden } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import Creators from './creators'
import DisplayTeams from './coremembers/index';
import { team } from '../../../../data/airtable';
// importing assets.

const useStyles = makeStyles({
    leftcontainer: {
        background: "tomato",
    },
    rightcontainer: {
        background: "#F0EBEB",
    },
    leftpane: {
        marginLeft: "10%",
        marginTop: "10%",
        marginBottom: "60%",
        paddingRight: "10%",
    },
    rocket: {
        marginBottom: "15px",
    },
    rightpane: {

        paddingBottom: "5%"
    },
    storyheading: {
        padding: '25px',
    },
    leftcontent: {
        padding: '25px',
    },
    rightcontent: {
        padding: '25px',
    },
})
const OurStory = (props) => {
    const classes = useStyles();
    const Navbar = props.navbar;
    const data = team.useTeam()
    return (<>

        <Grid container>
            <Grid
                className={classes.leftcontainer}
                item
                xs={12}
                sm={12}
                md={4}  
           
            >

                <Box className={classes.leftpane}>
                    <Grid item sm={12} xs={12} md={12} lg={12}>
                        <Typography variant="h2" gutterBottom={true}>
                            Creators
                    </Typography>
                    </Grid>
                    <Creators />
                </Box>
            </Grid>



            <Grid item xs={12}
                sm={12}
                md={8}
                lg={8}
                className={classes.rightpane}>
                <Hidden smDown>
                    <Navbar />
                </Hidden>
                <div className={classes.storyheading}>
                    <center>
                        <Typography variant="h2">Our Story</Typography><br />
                        <Typography variant="h4">It dates back to the initial days of Covid19 Outbreak. </Typography>
                        <br /><Typography variant="h5">We Inspire Open Tech Communities </Typography>
                    </center>
                </div>
                <Grid container>


                    <Grid item xs={12} sm={12} lg={6} md={6} >
                        <Typography align="center" className={classes.leftcontent}>
                            Two undergraduate students decided to uplift
                            themselves by building real worlds technical skills.
                            And took a step ahead out of their usual college routines
                            and started working on exisitng Open Source Projects.
                            </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={6} md={6}>
                        <Typography align="center" className={classes.leftcontent}>
                            With the help of their core mentor,<b>Vinit Shahdeo, SDE Postman</b> they built
                                an open source organization to practice Learning By Building things, sharing
                                knowledge with students and this led to the birth of Tech Phantoms.
                            </Typography>

                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} lg={12} md={12}>
                    <Typography align="center" variant="h4">Our Core Team</Typography>
                    <div className={classes.scrollable}>
                        <DisplayTeams members={data} />
                    </div>
                </Grid>
            </Grid>

        </Grid>

    </>

    )



}
export default OurStory