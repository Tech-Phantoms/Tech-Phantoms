import React from 'react';
import PropTypes from 'prop-types';
import tt from 'tinytime';
import MLSABadge from '../../../assets/LightMode_MLSA_Badge.svg';

import clsx from 'clsx'

import {
    Typography,
    Card,
    CardMedia,
    makeStyles,
    CardContent,
    CardActions,
    IconButton,
    Collapse,
    Button,
    Chip
} from '@material-ui/core'

import {
    indigo
} from '@material-ui/core/colors'

import {
    ExpandMore
} from '@material-ui/icons'

const useStyle = makeStyles(theme => ({
    media: {
        height: 0,
        paddingTop: '56.25%'
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    button: {
        margin: theme.spacing(0, 2)
    },
    chip: {
        backgroundColor: indigo[800],
        color: 'white'
    },
    topSpace: {
        marginTop: theme.spacing(2)
    }
}))

const Holder = props => {

    const classes = useStyle();

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    let mlsaLabel = () => {
        if (props.mlsa_event) {
            return (
                <div className={classes.topSpace}>
                    <center>
                        <Typography>
                            Event by
                </Typography>
                        <img src={MLSABadge} alt="mlsa badge" />
                    </center>
                </div>
            )
        } else {
            return null
        }
    }

    return (
        <div>
            <Card variant="outlined">
                <CardMedia className={classes.media} image={props.eventImg} />
                <CardContent>
                    <Typography variant="h5">
                        {props.title}
                    </Typography>

                    <div className={classes.topSpace}>
                        {((props.mlsa_event) ? <Chip className={classes.chip} size="small" label="MLSA" /> : null)}
                        <Typography>
                            {tt('{h}:{mm} {a}').render(new Date(props.date))} (IST)
                        </Typography>
                    </div>


                </CardContent>

                <CardActions disableSpacing>


                    <a target="blank" href={props.reg_link}>
                        <Button
                            className={classes.button}
                            variant="outlined"
                            disabled={props.event_recording_link && true}
                        >
                            Check Out
                        </Button>
                    </a>
                    {
                        props.event_recording_link &&
                        <a target="blank" href={props.event_recording_link}>
                            <Button variant="outline" style={{ 'background-color': 'red', 'color': 'white' }} >
                                Recording
                            </Button>

                        </a>
                    }

                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMore />
                    </IconButton>

                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography variant="h6">
                            Description
                        </Typography>
                        <Typography>
                            {props.description}
                        </Typography>
                        {mlsaLabel()}
                    </CardContent>
                </Collapse>
            </Card>
        </div>
    )
}

Holder.propTypes = {
    mlsa_event: PropTypes.bool,
    eventImg: PropTypes.string,
    title: PropTypes.string.isRequired,
    reg_link: PropTypes.string,
    event_recording_link: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.object
}

export default Holder;