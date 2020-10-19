import React from 'react';
import PropTypes from 'prop-types';
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
    paper: {
        padding: theme.spacing(2, 2)
    },
    divider: {
        marginTop: theme.spacing(4)
    }
}))

const Holder = props => {
    const classes = useStyle()

    let {
        issueUrl,
        repo_name,
        description,
        language,
        issues,
        stars
    } = props

    return (
        <div>
            <a target="blank" href={issueUrl}>
                <Paper variant="outlined" className={classes.paper}>
                    <Grid container spacing={0}>
                        <Grid item xs={12}>
                            <Typography variant="h5">
                                {repo_name}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="caption">
                                {description}
                            </Typography>
                        </Grid>
                    </Grid>
                    <div className={classes.divider} />
                    <Grid container spacing={4}>
                        <Grid item xs={6}>
                            <Languagebadge language={language} />
                        </Grid>
                        <Grid item xs={3}>
                            <Badge badgeContent={issues}>
                                <Info color="primary" fontSize="small" />
                            </Badge>
                        </Grid>
                        <Grid item xs={3}>
                            <Badge badgeContent={stars}>
                                <Star color="secondary" fontSize="small" />
                            </Badge>
                        </Grid>
                    </Grid>
                </Paper>
            </a>
        </div>
    )
}

Holder.propTypes = {
    issueUrl: PropTypes.string.isRequired,
    repo_name: PropTypes.string.isRequired,
    description: PropTypes.string,
    language: PropTypes.string,
    issues: PropTypes.number,
    stars: PropTypes.number
}

export default Holder