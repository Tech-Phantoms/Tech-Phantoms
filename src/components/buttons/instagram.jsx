import React from 'react';
import PropTypes from 'prop-types'

import {
    Button, makeStyles
} from '@material-ui/core'


const useStyles=makeStyles({
    instabutton:{
        background:'linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)',
        color:'white'
    }
})

// importing images



const InstaButton = props => {
const classes=useStyles();
    let { link,text } = props;

    return <>
        <a href={link} target="_blank"  rel="noopener noreferrer"  >
            <Button
                size="large"
                
                
                variant="contained"
                disableElevation
            className={classes.instabutton}
            >
                {text}
            </Button>
        </a>
    </>
}

InstaButton.propTypes = {
    link: PropTypes.string
}

export default InstaButton;