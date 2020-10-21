import React from 'react';

import {
    Paper,
    Container,
    Grid,
    Typography,
    makeStyles,
    Button
} from '@material-ui/core'

// importing images
import slack from '../../../assets/btnIcons/slack.svg';
import github from '../../../assets/btnIcons/github.svg';

const useStyle = makeStyles(theme => ({
    root: {
        margin: theme.spacing(32, 0)
    },
    paper: {
        padding: theme.spacing(2, 4)
    }
}))

const Social = () => {
    const classes = useStyle();

    return (
        <div className={classes.root}>
            <Container>
                <Paper variant="outlined" className={classes.paper}>
                    <Typography>
                        We have a Slack Channel.
                    </Typography>

                    <Grid container spacing={3}>
                        <Grid item>
                            <Button
                                startIcon={<img src={github} width="20px" alt="github" />}
                                color="secondary"
                                variant="contained"
                                disableElevation
                            >
                                Github
                            </Button>
                        </Grid>

                        <Grid item>
                            <Button
                                startIcon={<img src={slack} width="20px" alt="slack" />}
                                variant="outlined"
                            >
                                Slack
                            </Button>
                        </Grid>

                    </Grid>
                </Paper>
            </Container>
        </div>
    );
}

export default Social