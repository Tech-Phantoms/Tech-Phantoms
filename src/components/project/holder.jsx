import React from 'react'
import {
    Grid,
    Paper,
    Typography,
    makeStyles,
    Badge
} from '@material-ui/core'

import {
    Star,
    Info
} from '@material-ui/icons'

import Languagebadge from './badge'

const useStyle = makeStyles(theme => ({
    root: {
        width: theme.spacing(60)
    },
    paper: {
        padding: theme.spacing(2, 2)
    },
    divider: {
        marginTop: theme.spacing(4)
    }
}))

const Holder = props => {

    const classes = useStyle()

    return (
        <div className={classes.root}>
            <a target="blank" href={props.issueUrl}>
                <Paper variant="outlined" className={classes.paper}>
                    <Grid container spacing={0}>
                        <Grid item xs={12}>
                            <Typography variant="h5">
                                {props.repo_name}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="caption">
                                {props.description}
                            </Typography>
                        </Grid>
                    </Grid>
                    <div className={classes.divider} />
                    <Grid container spacing={4}>
                        <Grid item xs={3}>
                            <Languagebadge language={props.language} />
                        </Grid>
                        <Grid item xs={3}>
                            <Badge badgeContent={props.issues}>
                                <Info color="primary" fontSize="small" />
                            </Badge>
                        </Grid>
                        <Grid item xs={3}>
                            <Badge badgeContent={props.stars}>
                                <Star color="secondary" fontSize="small" />
                            </Badge>
                        </Grid>
                    </Grid>
                </Paper>
            </a>
        </div>
    )
}


export default Holder
