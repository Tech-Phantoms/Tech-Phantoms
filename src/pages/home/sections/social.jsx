import React from 'react';
import Logo from '../../../assets/logo.svg'
import {
    Paper,
    Container,
    Grid,
    Typography,
    makeStyles,
    Button
} from '@material-ui/core'

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

                    <Grid container spacing={2}>
                        <Grid item>
                            <Button>
                                Github
                            </Button>
                        </Grid>

                        <Grid item>
                            <Button>
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