import React from "react";
import { Grid, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';

import GitHub from "../../../../assets/team/github_.svg";
import Linkedin from "../../../../assets/team/linkedin.svg";
import Instagram from "../../../../assets/team/instagram.svg";
import Medium from "../../../../assets/team/medium.svg";

const useStyles = makeStyles({
    container: {
        margin: '9px',
        boxShadow: '7px 7px #F8B406',
    },
    gridContainer: {
        // display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'center',
    },
    memberImage: {
        height: '100px',
        width: '100px',
    },
    links: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',

        wordSpacing: '3px',
    },
    linkImage: {
        height: '50px',
        width: '50px',
        padding: '5px',
    }
})






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
    return (
        <Box textAlign="center" className={classes.container} border={2}>
            <Grid container>
                <Box textAlign="center">
                    <Grid item className={classes.image}>
                        <center><img alt="coremember" src={imageUrl} className={classes.memberImage} /></center>
                    </Grid>
                    <Grid item className={classes.memberName}>
                        <Typography variant="h5">{name}</Typography>
                        <Typography variant="h6">{position}</Typography>
                    </Grid>
                    <Grid item className={classes.links}>

                        {
                            githubUrl &&
                            <a href={githubUrl}><img alt="corememberLink" className={classes.linkImage} src={GitHub} /></a>
                        }
                        {
                            linkedinUrl &&
                            <a href={linkedinUrl}><img alt="corememberLink" className={classes.linkImage} src={Linkedin} /></a>
                        }
                        {
                            mediumUrl &&
                            <a href={mediumUrl}><img alt="corememberLink" className={classes.linkImage} src={Medium} /></a>
                        }
                        {
                            instagramUrl &&
                            <a href={instagramUrl}><img alt="corememberLink" className={classes.linkImage} src={Instagram} /></a>
                        }
                    </Grid>
                </Box>
            </Grid>
        </Box>
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
