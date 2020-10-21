import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Typography, ButtonBase } from '@material-ui/core/';


import Placeholder from './placeholder.svg'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

const creatorsData = [
    {
        img: { Placeholder },
        name: 'Abir Pal',
        subtagline: 'Community and Dev Lead',
        linkedin:'https://linkedin.com/in/imabp',
    },
    {
        img: { Placeholder },
        name: 'Souvik De',
        subtagline: 'Community and Dev Lead',
        linkedin:'https://www.linkedin.com/in/souvik-de-a2b941169/',
    },

    {
        img: { Placeholder },
        name: 'Vinit Shahdeo',
        subtagline: 'Core Mentor and SDE Postman',
        linkedin:'https://www.linkedin.com/in/vinitshahdeo/',
    }
]

const Creators = (props) => {
    const classes = useStyles();

    return (<>
        {
            creatorsData.map((creator) => (
                <div className={classes.root}>
                    <Box className={classes.paper}>
                        <Grid container spacing={2}>
                            <Grid item>
                                <ButtonBase className={classes.image}>
                                    <img className={classes.img} alt="complex" src={Placeholder} />
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="h4">
                                            {creator.name}
                                        </Typography>
                                        <Typography gutterBottom>
                                            {creator.subtagline}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            <a rel="noopener noreferrer"  target="_blank" href={creator.linkedin}>LinkedIn</a>
                                        </Typography>
                                    </Grid>
                                </Grid>
                               
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            )
            )
        }

    </>);
}


export default Creators;