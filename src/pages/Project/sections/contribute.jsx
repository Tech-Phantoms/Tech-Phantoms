import React from 'react';

import {
    Paper,
    Container,
    Grid,
    Typography,
    makeStyles,

} from '@material-ui/core'

// importing images
import Links from '../../../data/links'

import GitHub from '../../../components/buttons/githubbtn'


const useStyle = makeStyles(theme => ({
    root: {
        margin: theme.spacing(32, 0)
    },
    paper: {
        padding: theme.spacing(2, 4),
        background:'purple',
        color:'white'
    },
    title: {
        marginBottom: theme.spacing(4)
    },
    a:{
        color:'white',
    }
}))

const Contribute = () => {
    const classes = useStyle();

    return (
        <div className={classes.root}>
            <Container>
                <Paper variant="outlined" className={classes.paper}>
                    <Typography className={classes.title} variant="h5">
                        Contribute on our GitHub Org!
                    </Typography>

                    <Grid container spacing={3}>
                        <Grid item xs={12} md={12} lg={12} sm={12}  >
                            <GitHub link={Links.github} text="GitHub"/>
                        </Grid>

                        <Grid item xs={12} md={12} lg={12} sm={12}  >
                            Or reach us at : <a className={classes.a} href="mailto:opensource@techphantoms.tech"> opensource@techphantoms.tech</a>
                        </Grid>

                    </Grid>
                </Paper>
            </Container>
        </div>
    );
}

export default Contribute