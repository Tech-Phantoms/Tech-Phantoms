import React from 'react';
import PropTypes from 'prop-types';

import {
    Button
} from '@material-ui/core';

// importing images
import slack from '../../assets/btnIcons/slack.svg';

const SlackButton = props => {

    let { link } = props;


    return <>
        <a href={link}>
            <Button
                startIcon={<img src={slack} width="20px" alt="slack" />}
                variant="outlined"
            >
                Slack
        </Button>
        </a>
    </>
}

SlackButton.propTypes = {
    link: PropTypes.string
}

export default SlackButton;