import React from 'react';
import PropTypes from 'prop-types'

import {
    Button
} from '@material-ui/core'

// importing images
import github from '../../assets/btnIcons/github.svg'


const GithubButton = props => {

    let { link,text } = props;

    return <>
        <a href={link} target="_blank"  rel="noopener noreferrer"  >
            <Button
                size="large"
                startIcon={<img src={github} width="20px" alt="github" />}
                color="secondary"
                variant="contained"
                disableElevation
            >
                {text}
            </Button>
        </a>
    </>
}

GithubButton.propTypes = {
    link: PropTypes.string
}

export default GithubButton;