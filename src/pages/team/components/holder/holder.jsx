import React from "react";
import { Grid, Box, Typography, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';

import GitHub from "../../../../assets/team/github_.svg";
import Linkedin from "../../../../assets/team/linkedin.svg";
import Instagram from "../../../../assets/team/instagram.svg";
import Medium from "../../../../assets/team/medium.svg";

const useStyles = makeStyles((theme)=>({
    container: {
        margin: '30px',
        padding:'2px',
        boxShadow: '5px 5px orange, 10px 10px tomato',
        justifyContent: 'center',
        background: 'transparent',
        border: '1px solid tomato',
        borderRight :'1px solid orange',
        borderBottom :'1px solid orange',
        color: 'black',
        transition:'0.5s',
        '&:hover':{
            color:'white',
            cursor:'pointer',
            background:'purple',
            borderLeft: '1px solid purple',
            borderTop:'1px solid purple',
            padding:'15px',
            margin:'15px',
        }
        // borderRadius:'20px',
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
      },
    linkImage: {
        height: '50px',
        width: '50px',
        padding: '5px',
    }
}))






const Holder = (props) => {
    const {
        name,
        imageUrl,
        githubUrl,
        linkedinUrl,
        instagramUrl,
        mediumUrl,
        position
    } = props;
    const classes = useStyles();
    var gridLinks = 4;

    if (mediumUrl !== null && mediumUrl !== undefined) {
        gridLinks = 3;
        if (githubUrl === null && githubUrl === undefined) {
            gridLinks = 2;
        }
    }


    return (
        <Box textAlign="center" className={classes.container} >

            <Grid direction="row"
                justify="center"
                alignItems="center">
                <Grid m item className={classes.image}>
                    <center>
                        <Avatar alt="avatars" src={imageUrl} className={classes.large} />

                    </center>
                </Grid>
                <Grid item className={classes.memberName}>
                    <Typography variant="h5">{name}</Typography>
                    <Typography variant="h6">{position}</Typography>
                </Grid>
                <Grid item xs={12} md={12} sm={12} lg={12}>
                    <Grid container alignItems="center">


                        <Grid item xs={gridLinks} md={gridLinks} sm={gridLinks} lg={gridLinks}>
                            {
                                githubUrl &&
                                <a href={githubUrl}><img alt="corememberLink" className={classes.linkImage} src={GitHub} /></a>
                            }
                        </Grid>
                        <Grid item xs={gridLinks} md={gridLinks} sm={gridLinks} lg={gridLinks}>
                            {
                                linkedinUrl &&
                                <a href={linkedinUrl}><img alt="corememberLink" className={classes.linkImage} src={Linkedin} /></a>
                            }
                        </Grid>

                        <Grid item xs={gridLinks} md={gridLinks} sm={gridLinks} lg={gridLinks}>
                            {
                                instagramUrl &&
                                <a href={instagramUrl}><img alt="corememberLink" className={classes.linkImage} src={Instagram} /></a>
                            }
                        </Grid>
                        <Grid item xs={gridLinks} md={gridLinks} sm={gridLinks} lg={gridLinks}>
                            {
                                mediumUrl &&
                                <a href={mediumUrl}><img alt="corememberLink" className={classes.linkImage} src={Medium} /></a>
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </Box >
    );
};
Holder.propTypes = {
    names: PropTypes.string,
    imageUrl: PropTypes.string,
    githubUrl: PropTypes.string,
    instagramUrl: PropTypes.string,
    mediumUrl: PropTypes.string,
    gender: PropTypes.string
}
export default Holder;
